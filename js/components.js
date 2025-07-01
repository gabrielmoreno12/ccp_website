// Função para carregar componentes reutilizáveis
function loadComponent(selector, filePath) {
    const element = document.querySelector(selector);
    if (element) {
        // Tentar fetch primeiro
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                element.innerHTML = html;
                console.log(`Componente ${filePath} carregado com sucesso via fetch`);
            })
            .catch(error => {
                console.warn('Fetch falhou, tentando método alternativo:', error);
                
                // Fallback: inserir footer completo diretamente
                if (selector === '#footer-placeholder') {
                    const footerHTML = `
                        <footer class="footer">
                            <div class="container">
                                <div class="footer-content">
                                    <div class="footer-section">
                                        <div class="footer-brand">
                                            <img src="images/logo-ccp-white.png" alt="CCP Soluções Contábeis" class="footer-logo">
                                            <p class="footer-description">
                                                Soluções contábeis modernas e eficientes para empresas de todos os segmentos. 
                                                Sua parceira de confiança há mais de 20 anos.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="footer-section">
                                        <h3 class="footer-title">Serviços</h3>
                                        <ul class="footer-links">
                                            <li><a href="servicos.html">Abertura de Empresa</a></li>
                                            <li><a href="servicos.html">Contabilidade</a></li>
                                            <li><a href="servicos.html">Imposto de Renda</a></li>
                                            <li><a href="servicos.html">Departamento Pessoal</a></li>
                                            <li><a href="servicos.html">Consultoria Fiscal</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-section">
                                        <h3 class="footer-title">Empresa</h3>
                                        <ul class="footer-links">
                                            <li><a href="sobre.html">Sobre Nós</a></li>
                                            <li><a href="sobre.html">Nossa Missão</a></li>
                                            <li><a href="sobre.html">Nossa Equipe</a></li>
                                            <li><a href="contato.html">Contato</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-section">
                                        <h3 class="footer-title">Contato</h3>
                                        <div class="footer-contact">
                                            <div class="contact-item">
                                                <i class="fab fa-whatsapp" style="color: white;"></i>
                                                <span>(48) 9222-6800 (Somente WhatsApp)</span>
                                            </div>
                                            <div class="contact-item">
                                                <i class="fas fa-envelope" style="color: white;"></i>
                                                <span>admccpsolucoes@gmail.com</span>
                                            </div>
                                            <div class="contact-item">
                                                <i class="fas fa-map-marker-alt" style="color: white;"></i>
                                                <span>Rua Ilha dos Corais, 60 - Vargem do Bom Jesus<br>Florianópolis - SC</span>
                                            </div>
                                        </div>
                                        <div class="social-links">
                                            <a href="#" class="social-link">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#" class="social-link">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#" class="social-link">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="#" class="social-link">
                                                <i class="fab fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-bottom">
                                    <p>&copy; 2025 CCP Soluções Contábeis. Todos os direitos reservados.</p>
                                </div>
                            </div>
                        </footer>
                    `;
                    element.innerHTML = footerHTML;
                    console.log('Footer carregado via fallback');
                }
            });
    } else {
        console.error('Elemento não encontrado:', selector);
    }
}

// Carregar footer automaticamente quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando carregamento do footer...');
    
    // Verificar se o elemento existe
    const footerElement = document.querySelector('#footer-placeholder');
    if (footerElement) {
        console.log('Elemento footer-placeholder encontrado');
        loadComponent('#footer-placeholder', 'includes/footer.html');
    } else {
        console.error('Elemento #footer-placeholder não encontrado na página');
    }
});

// Função para carregar header (para uso futuro se necessário)
function loadHeader() {
    loadComponent('#header-placeholder', 'includes/header.html');
}

// Exportar funções para uso em outros scripts
window.ComponentLoader = {
    loadComponent,
    loadFooter: () => loadComponent('#footer-placeholder', 'includes/footer.html'),
    loadHeader: () => loadComponent('#header-placeholder', 'includes/header.html')
};
