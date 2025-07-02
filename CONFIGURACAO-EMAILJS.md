# Configuração do EmailJS para Formulário de Feedback

## Visão Geral

O formulário de feedback dos clientes usa o EmailJS para enviar emails automaticamente para `gabrielm200312@gmail.com` sempre que um cliente submete uma avaliação.

## Configuração do EmailJS

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email

1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha o provedor de email (Gmail recomendado)
4. Configure com o email `gabrielm200312@gmail.com`
5. Copie o **Service ID** gerado

### 3. Criar Template de Email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use o template ID: `template_feedback`
4. Configure o template com o seguinte conteúdo:

**Subject:**
```
Nova Avaliação - CCP Soluções Contábeis
```

**Body:**
```
NOVA AVALIAÇÃO RECEBIDA

DADOS DO CLIENTE:
Nome: {{customer_name}}
Posição: {{customer_position}}
Empresa: {{customer_company}}
E-mail: {{customer_email}}
Telefone: {{customer_phone}}

AVALIAÇÃO:
Estrelas: {{rating}}/5 {{rating_stars}}
Comentário: {{feedback_text}}

Data de Envio: {{submission_date}}

---
Esta avaliação foi enviada através do formulário de feedback do site da CCP Soluções Contábeis.
Para aprovar e publicar esta avaliação, adicione-a manualmente à seção de depoimentos do site.
```

### 4. Configurar Public Key

1. Vá para "Account" → "General"
2. Copie sua **Public Key**

### 5. Atualizar Configurações no Site

Edite o arquivo `js/config.js` e adicione suas credenciais:

```javascript
emailjs: {
    publicKey: "SEU_PUBLIC_KEY_AQUI",
    serviceID: "SEU_SERVICE_ID_AQUI",
    templateID: "template_feedback",
    adminEmail: "gabrielm200312@gmail.com"
}
```

## Funcionamento

1. **Com EmailJS configurado**: Os emails são enviados automaticamente
2. **Sem EmailJS**: O sistema abre o cliente de email padrão do usuário
3. **Popup bloqueado**: Mostra instruções para envio manual

## Limites do Plano Gratuito

- 200 emails por mês
- Ideal para o volume esperado de feedback

## Alternativas

Se o EmailJS não estiver disponível, o sistema automaticamente:
1. Tenta abrir o cliente de email padrão
2. Se bloqueado, mostra instruções para envio manual

## Segurança

- As credenciais do EmailJS são públicas (por design)
- O template controla o que pode ser enviado
- Emails sempre vão para o endereço configurado no template
