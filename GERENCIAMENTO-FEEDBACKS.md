# Como Gerenciar os Feedbacks dos Clientes

## Recebimento dos Feedbacks

Quando um cliente envia um feedback através do formulário do site, você receberá um email em `gabrielm200312@gmail.com` com todas as informações:

- **Nome completo** do cliente
- **Posição/Cargo** na empresa
- **Nome da empresa**
- **Email** de contato
- **Telefone** de contato
- **Avaliação** (1-5 estrelas)
- **Comentário** detalhado

## Processo de Aprovação

### 1. Análise do Feedback
- Verifique se o feedback é genuíno e relevante
- Confirme se o cliente realmente utilizou os serviços da CCP
- Avalie se o conteúdo é apropriado para publicação

### 2. Contato com o Cliente (Opcional)
- Para feedbacks excepcionais, considere entrar em contato para agradecer
- Se necessário, esclareça detalhes sobre a experiência

### 3. Publicação no Site
Para adicionar o feedback aprovado aos depoimentos do site:

#### Edite o arquivo `index.html`:
1. Localize a seção "Testimonials" (linha aproximada 140-200)
2. Adicione um novo `testimonial-item` seguindo o padrão:

```html
<div class="testimonial-item">
    <div class="testimonial-content">
        <div class="stars">
            <!-- Adicione a quantidade de estrelas conforme a avaliação -->
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">
            "COMENTÁRIO DO CLIENTE AQUI"
        </p>
        <div class="testimonial-author">
            <div class="author-info">
                <h4 class="author-name">Nome do Cliente</h4>
                <p class="author-position">Cargo, Nome da Empresa</p>
            </div>
        </div>
    </div>
</div>
```

#### Atualizar a navegação do carrossel:
1. Localize a seção `testimonial-dots`
2. Adicione um novo dot: `<span class="dot" data-slide="X"></span>`
   (onde X é o número sequencial do slide)

#### Atualizar o JavaScript:
1. Abra o arquivo `js/script.js`
2. Localize a função `initTestimonialsCarousel`
3. O carrossel se ajustará automaticamente aos novos itens

## Boas Práticas

### ✅ Aprovação Recomendada
- Feedbacks com 4-5 estrelas
- Comentários específicos sobre os serviços
- Clientes identificados corretamente
- Linguagem profissional e respeitosa

### ❌ Não Aprovação
- Feedbacks com 1-2 estrelas (salvo casos excepcionais)
- Comentários genéricos ou suspeitos
- Linguagem inadequada ou ofensiva
- Informações falsas ou enganosas

### 📝 Edição de Comentários
- Pequenas correções de gramática são aceitáveis
- Mantenha sempre o sentido original
- Não altere o tom ou a mensagem principal

## Frequência de Atualização
- Revisar emails de feedback semanalmente
- Atualizar o site mensalmente com novos depoimentos
- Manter no máximo 6-8 depoimentos ativos no carrossel

## Backup dos Feedbacks
- Manter uma pasta no email com todos os feedbacks recebidos
- Criar um arquivo com histórico de aprovações/rejeições
- Documentar os motivos das decisões

## Resposta aos Clientes
Consider responder aos clientes que enviaram feedback:

**Para feedbacks positivos:**
```
Olá [Nome],

Muito obrigado pelo seu feedback positivo sobre nossos serviços! 
Ficamos muito felizes em saber que superamos suas expectativas.

Sua avaliação foi aprovada e será publicada em nosso site em breve.

Continuamos à disposição para auxiliá-lo sempre que precisar.

Atenciosamente,
Equipe CCP Soluções Contábeis
```

**Para feedbacks que precisam de esclarecimento:**
```
Olá [Nome],

Agradecemos pelo seu feedback. Gostaríamos de entender melhor 
sua experiência para continuarmos melhorando nossos serviços.

Poderia nos fornecer mais detalhes sobre [situação específica]?

Estamos comprometidos em resolver qualquer questão e garantir 
sua total satisfação.

Atenciosamente,
Equipe CCP Soluções Contábeis
```
