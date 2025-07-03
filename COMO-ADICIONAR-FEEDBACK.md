# Como Adicionar Novos Feedbacks Aprovados ao Site

## 📝 Instruções Passo a Passo

### 1. Quando um novo feedback for aprovado:

1. **Abra o arquivo**: `index.html`
2. **Localize a seção**: `<!-- Testimonials -->`
3. **Encontre o div**: `<div class="testimonials-carousel">`

### 2. Adicione o novo feedback NO INÍCIO do carrossel:

```html
<!-- Feedback real de [NOME] - MAIS RECENTE -->
<div class="testimonial-item active">
    <div class="testimonial-content">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">
            "[COMENTÁRIO DO CLIENTE]"
        </p>
        <div class="testimonial-author">
            <div class="author-info">
                <h4 class="author-name">[NOME COMPLETO]</h4>
                <p class="author-position">[CARGO], [EMPRESA]</p>
            </div>
        </div>
    </div>
</div>
```

### 3. Atualize as classes "active":

- **REMOVA** `active` do feedback anterior (que estava em primeiro)
- **ADICIONE** `active` ao novo feedback (que agora é o primeiro)

### 4. Atualize os dots de navegação:

No final da seção de depoimentos, você verá:
```html
<div class="testimonial-dots">
    <span class="dot active" data-slide="0"></span>
    <span class="dot" data-slide="1"></span>
    <span class="dot" data-slide="2"></span>
    <!-- Adicione mais dots se necessário -->
</div>
```

- **Se adicionou um novo slide**: Adicione um novo `<span class="dot" data-slide="X"></span>`
- **Atualize os números**: `data-slide` deve corresponder à posição (0, 1, 2, 3...)

### 5. Exemplo Prático:

Se você receber um feedback de "Ana Costa, Gerente da Empresa XYZ", adicione assim:

```html
<!-- Feedback real da Ana Costa - MAIS RECENTE -->
<div class="testimonial-item active">
    <div class="testimonial-content">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">
            "Excelente atendimento! A CCP resolveu todos os nossos problemas contábeis de forma rápida e eficiente."
        </p>
        <div class="testimonial-author">
            <div class="author-info">
                <h4 class="author-name">Ana Costa</h4>
                <p class="author-position">Gerente, Empresa XYZ</p>
            </div>
        </div>
    </div>
</div>
```

### 6. Ajuste as estrelas conforme a avaliação:

- **5 estrelas**: Todas as 5 tags `<i class="fas fa-star"></i>`
- **4 estrelas**: 4 com `fas fa-star` + 1 com `far fa-star`
- **3 estrelas**: 3 com `fas fa-star` + 2 com `far fa-star`

Exemplo para 4 estrelas:
```html
<div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
</div>
```

## 🔄 Manutenção do Carrossel

### Ordem Recomendada:
1. **Feedbacks reais mais recentes** (sempre no início)
2. **Feedbacks reais antigos**
3. **Depoimentos de exemplo** (no final, podem ser removidos conforme necessário)

### Limite Recomendado:
- **Máximo**: 6-7 depoimentos (para não ficar muito longo)
- **Mínimo**: 3-4 depoimentos (para manter dinâmico)

### Quando remover depoimentos de exemplo:
- Quando tiver **4+ feedbacks reais**, pode remover os exemplos
- Sempre manter pelo menos **3 depoimentos** no total

## 📧 Template de Email para Clientes

Quando aprovar um feedback, você pode enviar este email ao cliente:

---

**Assunto**: Obrigado pelo seu feedback - CCP Soluções Contábeis

Olá [NOME],

Muito obrigado pelo seu feedback sobre nossos serviços! 

Ficamos muito felizes em saber que nossa equipe atendeu suas expectativas. Seu depoimento foi aprovado e agora está publicado em nosso site, ajudando outros empresários a conhecer nosso trabalho.

Você pode ver seu depoimento em: [URL do site]

Continuamos à disposição para qualquer necessidade contábil.

Atenciosamente,  
Equipe CCP Soluções Contábeis

---

## ⚠️ Pontos Importantes

1. **Sempre adicione no início** (posição 0)
2. **Não esqueça de atualizar as classes** `active`
3. **Verifique os dots de navegação**
4. **Teste o carrossel** após adicionar
5. **Mantenha backup** do arquivo antes de editar
6. **Use comentários HTML** para identificar feedbacks reais vs exemplos

## 🧪 Como Testar

Após adicionar um novo feedback:

1. **Abra o site** no navegador
2. **Vá até a seção** "O que nossos clientes dizem"
3. **Verifique se o novo feedback** aparece primeiro
4. **Teste a navegação** (setas e dots)
5. **Verifique no mobile** se está responsivo

---

**Dúvidas?** Entre em contato com o desenvolvedor responsável.
