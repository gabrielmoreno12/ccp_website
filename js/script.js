// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initTestimonialsCarousel();
    initFAQ();
    initContactForm();
    initFeedbackForm();
    initAnimatedCounters();
    initScrollEffects();
    initAOS();
    initSmoothScrolling();
    
    // Check EmailJS
    console.log('EmailJS disponível:', typeof window.emailjs !== 'undefined');
    if (typeof window.emailjs !== 'undefined') {
        console.log('EmailJS carregado com sucesso');
    } else {
        console.warn('EmailJS não foi carregado. Verifique se o script está incluído.');
    }
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Testimonials Carousel
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    if (testimonials.length > 0) {
        // Show specific slide
        function showSlide(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }

        // Next slide
        function nextSlide() {
            const next = (currentSlide + 1) % testimonials.length;
            showSlide(next);
        }

        // Previous slide
        function prevSlide() {
            const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
            showSlide(prev);
        }

        // Auto-play functionality
        function startAutoPlay() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            clearInterval(slideInterval);
        }

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);
        }

        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        if (carousel) {
            carousel.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });

            carousel.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                endY = e.changedTouches[0].clientY;
                handleSwipe();
            });
        }

        function handleSwipe() {
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const minSwipeDistance = 50;

            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
                if (deltaX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
                stopAutoPlay();
                startAutoPlay();
            }
        }

        // Initialize
        showSlide(0);
        startAutoPlay();
    }
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        }
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Feedback Form Functionality
function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
        
        // Initialize star rating functionality
        const starRating = document.querySelector('.star-rating');
        if (starRating) {
            const stars = starRating.querySelectorAll('.star');
            const radioInputs = starRating.querySelectorAll('input[type="radio"]');
            
            stars.forEach((star, index) => {
                star.addEventListener('mouseenter', () => highlightStars(stars, index));
                star.addEventListener('mouseleave', () => resetStars(stars, radioInputs));
                star.addEventListener('click', () => selectStars(stars, radioInputs, index));
            });
        }
    }
}

function highlightStars(stars, index) {
    stars.forEach((star, i) => {
        if (i >= index) {
            star.style.color = '#fbbf24';
        } else {
            star.style.color = '#d1d5db';
        }
    });
}

function resetStars(stars, radioInputs) {
    const checkedInput = Array.from(radioInputs).find(input => input.checked);
    if (checkedInput) {
        const checkedIndex = Array.from(radioInputs).indexOf(checkedInput);
        highlightStars(stars, checkedIndex);
    } else {
        stars.forEach(star => {
            star.style.color = '#d1d5db';
        });
    }
}

function selectStars(stars, radioInputs, index) {
    radioInputs[index].checked = true;
    highlightStars(stars, index);
}

async function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Get form values
    const feedbackData = {
        nome: formData.get('customerName'),
        posicao: formData.get('customerPosition'),
        empresa: formData.get('customerCompany'),
        email: formData.get('customerEmail'),
        telefone: formData.get('customerPhone'),
        avaliacao: formData.get('rating'),
        comentario: formData.get('customerFeedback')
    };
    
    // Validate form
    if (!validateFeedbackForm(feedbackData)) {
        return;
    }
    
    // Show loading state
    setFormLoading(form, true);
    
    try {
        const result = await sendFeedbackEmail(feedbackData);
        
        if (result.success) {
            let successMessage = 'Obrigado pelo seu feedback! ';
            
            switch (result.method) {
                case 'emailjs':
                    successMessage += 'Sua avaliação foi enviada automaticamente e será analisada em breve.';
                    break;
                case 'formsubmit':
                    successMessage += 'Sua avaliação foi enviada com sucesso e será analisada em breve.';
                    break;
                case 'mailto':
                    successMessage += 'Seu cliente de email foi aberto. Por favor, envie o email para completar o processo.';
                    break;
                default:
                    successMessage += 'Sua avaliação será analisada e publicada em breve.';
            }
            
            showFeedbackMessage('success', successMessage);
            form.reset();
            resetStarRating();
        } else {
            throw new Error('Falha no envio');
        }
    } catch (error) {
        console.error('Erro ao enviar feedback:', error);
        
        if (error.message === 'popup_blocked') {
            showFeedbackMessage('error', `
                Não foi possível abrir automaticamente seu cliente de email. 
                <br><br>
                <strong>Por favor, envie manualmente um email para:</strong>
                <br>📧 admccpsolucoes@gmail.com
                <br><br>
                Com o assunto: <strong>"Nova Avaliação - ${feedbackData.nome}"</strong>
                <br>E inclua suas informações e comentário.
            `);
        } else {
            showFeedbackMessage('error', 'Erro ao enviar feedback. Tente novamente ou entre em contato conosco diretamente pelo WhatsApp.');
        }
    } finally {
        setFormLoading(form, false);
    }
}

function validateFeedbackForm(data) {
    const errors = [];
    
    if (!data.nome || data.nome.trim().length < 2) {
        errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    if (!data.posicao || data.posicao.trim().length < 2) {
        errors.push('Posição deve ter pelo menos 2 caracteres');
    }
    
    if (!data.empresa || data.empresa.trim().length < 2) {
        errors.push('Nome da empresa deve ter pelo menos 2 caracteres');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('E-mail deve ter um formato válido');
    }
    
    if (!data.telefone || data.telefone.trim().length < 10) {
        errors.push('Telefone deve ter pelo menos 10 dígitos');
    }
    
    if (!data.avaliacao) {
        errors.push('Selecione uma avaliação com estrelas');
    }
    
    if (!data.comentario || data.comentario.trim().length < 10) {
        errors.push('Comentário deve ter pelo menos 10 caracteres');
    }
    
    if (errors.length > 0) {
        showFeedbackMessage('error', 'Por favor, corrija os seguintes erros:\n• ' + errors.join('\n• '));
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function sendFeedbackEmail(data) {
    const starsDisplay = '⭐'.repeat(parseInt(data.avaliacao));
    
    console.log('🚀 Iniciando envio de feedback...');
    
    // Método 1: FormSubmit (mais confiável que EmailJS)
    console.log('📧 Tentando FormSubmit...');
    
    try {
        const formData = new FormData();
        formData.append('_to', 'admccpsolucoes@gmail.com');
        formData.append('_subject', 'Nova Avaliação - CCP Soluções Contábeis');
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');
        formData.append('_next', 'https://formsubmit.co/thankyou');
        
        // Dados do cliente
        formData.append('Nome', data.nome);
        formData.append('Posição', data.posicao);
        formData.append('Empresa', data.empresa);
        formData.append('Email', data.email);
        formData.append('Telefone', data.telefone);
        formData.append('Avaliação', `${data.avaliacao}/5 estrelas ${starsDisplay}`);
        formData.append('Comentário', data.comentario);
        formData.append('Data de Envio', new Date().toLocaleString('pt-BR'));
        formData.append('Origem', 'Formulário de Feedback - Site CCP');
        
        console.log('📤 Enviando via FormSubmit...');
        
        const response = await fetch('https://formsubmit.co/ajax/admccpsolucoes@gmail.com', {
            method: 'POST',
            body: formData
        });
        
        console.log('📨 Resposta FormSubmit:', response.status);
        
        if (response.ok) {
            const result = await response.json();
            console.log('✅ FormSubmit resultado:', result);
            
            if (result.success) {
                console.log('🎉 Email enviado com sucesso via FormSubmit!');
                return { success: true, method: 'formsubmit' };
            }
        }
        
    } catch (error) {
        console.error('❌ Erro no FormSubmit:', error);
    }
    
    // Método 2: EmailJS como fallback
    if (typeof emailjs !== 'undefined') {
        console.log('📧 Tentando EmailJS como fallback...');
        
        try {
            emailjs.init(CCP_CONFIG.emailjs.publicKey);
            
            const templateParams = {
                to_name: "CCP Soluções Contábeis",
                to_email: "admccpsolucoes@gmail.com", 
                from_name: data.nome,
                from_email: data.email,
                subject: 'Nova Avaliação - CCP Soluções Contábeis',
                message: `
NOVA AVALIAÇÃO RECEBIDA

Nome: ${data.nome}
Posição: ${data.posicao}
Empresa: ${data.empresa}
Email: ${data.email}
Telefone: ${data.telefone}
Avaliação: ${data.avaliacao}/5 ${starsDisplay}
Comentário: ${data.comentario}
Data: ${new Date().toLocaleString('pt-BR')}

Esta avaliação precisa ser analisada e aprovada antes da publicação.
                `.trim()
            };
            
            console.log('📤 Enviando via EmailJS...');
            
            const response = await emailjs.send(
                CCP_CONFIG.emailjs.serviceID,
                CCP_CONFIG.emailjs.templateID,
                templateParams
            );
            
            console.log('📨 Resposta EmailJS:', response);
            
            if (response && response.status === 200) {
                console.log('✅ Email enviado com sucesso via EmailJS!');
                return { success: true, method: 'emailjs' };
            }
            
        } catch (error) {
            console.error('❌ Erro no EmailJS:', error);
        }
    }
    
    // Método 3: Mailto como último recurso
    console.log('📧 Usando mailto como último recurso...');
    
    const emailBody = `
NOVA AVALIAÇÃO RECEBIDA - CCP Soluções Contábeis

DADOS DO CLIENTE:
Nome: ${data.nome}
Posição: ${data.posicao}  
Empresa: ${data.empresa}
E-mail: ${data.email}
Telefone: ${data.telefone}

AVALIAÇÃO:
Estrelas: ${data.avaliacao}/5 ${starsDisplay}
Comentário: ${data.comentario}

Data: ${new Date().toLocaleString('pt-BR')}

---
Esta avaliação foi enviada através do formulário de feedback do site.
Para aprovar e publicar, adicione manualmente à seção de depoimentos.
    `.trim();
    
    const subject = encodeURIComponent('Nova Avaliação - CCP Soluções Contábeis');
    const body = encodeURIComponent(emailBody);
    const mailtoUrl = `mailto:admccpsolucoes@gmail.com?subject=${subject}&body=${body}`;
    
    console.log('📧 Abrindo cliente de email...');
    
    try {
        const mailWindow = window.open(mailtoUrl, '_blank');
        
        if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
            throw new Error('popup_blocked');
        }
        
        console.log('✅ Cliente de email aberto com sucesso!');
        return { success: true, method: 'mailto' };
        
    } catch (error) {
        console.error('❌ Erro ao abrir cliente de email:', error);
        throw error;
    }
}

function setFormLoading(form, loading) {
    if (loading) {
        form.classList.add('loading');
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        }
    } else {
        form.classList.remove('loading');
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Feedback';
        }
    }
}

function showFeedbackMessage(type, message) {
    // Remove existing message
    const existingMessage = document.querySelector('.feedback-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `feedback-message ${type}`;
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    
    const form = document.getElementById('feedbackForm');
    form.parentElement.insertBefore(messageDiv, form);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 5000);
    }
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetStarRating() {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
        star.style.color = '#d1d5db';
    });
}

// Form Validation
function validateForm(data) {
    const errors = [];
    
    if (!data.nome || data.nome.trim().length < 2) {
        errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Por favor, insira um e-mail válido');
    }
    
    if (!data.mensagem || data.mensagem.trim().length < 10) {
        errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        background: ${getNotificationColor(type)};
        color: white;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || colors.info;
}

// Animated Counters
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Scroll Effects
function initScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }

            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Phone Number Formatting
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        if (value.length <= 2) {
            formattedValue = `(${value}`;
        } else if (value.length <= 7) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 11) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }

    input.value = formattedValue;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Performance Monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                // Log performance metrics (can be sent to analytics)
                console.log('Page load time:', loadTime + 'ms');
            }, 0);
        });
    }
}

// Call performance tracking
trackPerformance();

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error to logging service
});

// Unhandled Promise Rejection Handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error to logging service
});

// Utility Functions
const utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Get viewport dimensions
    getViewportSize: function() {
        return {
            width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement: function(element, offset = 0) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};

// Export utils for use in other scripts
window.ccpUtils = utils;

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('CCP Website initialized successfully');
    });
} else {
    console.log('CCP Website initialized successfully');
}
