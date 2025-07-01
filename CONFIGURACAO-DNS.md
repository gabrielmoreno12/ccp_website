# 🌐 Configuração DNS - ccpsolucoescontabeis.com.br

Este guia passo a passo te ajudará a configurar o DNS do domínio **ccpsolucoescontabeis.com.br** para que funcione perfeitamente com o site hospedado no Render.

## 📋 Resumo da Configuração

- **Domínio**: ccpsolucoescontabeis.com.br
- **Hospedagem**: Render.com
- **SSL**: Automático pelo Render
- **Email**: Configuração para e-mails profissionais

## 🔧 Configurações DNS Necessárias

### 1. Registros Principais (Obrigatórios)

#### Para Site Principal
```
Tipo: A
Nome: @
Valor: 216.24.57.1
TTL: 3600
```

```
Tipo: A
Nome: www
Valor: 216.24.57.1
TTL: 3600
```

**OU** (alternativa com CNAME):
```
Tipo: CNAME
Nome: www
Valor: ccp-website.onrender.com
TTL: 3600
```

### 2. Configuração de Email Profissional

#### Para usar Google Workspace (G Suite)
```
Tipo: MX
Nome: @
Valor: 1 aspmx.l.google.com.
TTL: 3600

Tipo: MX
Nome: @
Valor: 5 alt1.aspmx.l.google.com.
TTL: 3600

Tipo: MX
Nome: @
Valor: 5 alt2.aspmx.l.google.com.
TTL: 3600

Tipo: MX
Nome: @
Valor: 10 alt3.aspmx.l.google.com.
TTL: 3600

Tipo: MX
Nome: @
Valor: 10 alt4.aspmx.l.google.com.
TTL: 3600
```

#### Para usar Hostinger Email
```
Tipo: MX
Nome: @
Valor: 10 mx1.hostinger.com.
TTL: 3600

Tipo: MX
Nome: @
Valor: 10 mx2.hostinger.com.
TTL: 3600
```

#### Para usar Locaweb Email
```
Tipo: MX
Nome: @
Valor: 10 mx1.locaweb.com.br.
TTL: 3600

Tipo: MX
Nome: @
Valor: 20 mx2.locaweb.com.br.
TTL: 3600

Tipo: MX
Nome: @
Valor: 30 mx3.locaweb.com.br.
TTL: 3600
```

### 3. Registros de Segurança (Recomendados)

#### SPF (Proteção contra Spam)
```
Tipo: TXT
Nome: @
Valor: v=spf1 include:_spf.google.com ~all
TTL: 3600
```

#### DMARC (Autenticação de Email)
```
Tipo: TXT
Nome: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:contato@ccpsolucoescontabeis.com.br
TTL: 3600
```

## 🏢 Configuração por Provedor

### Registro.br (Recomendado para .com.br)

1. **Acesse**: https://registro.br
2. **Login** na sua conta
3. **Vá em**: Meus Domínios > ccpsolucoescontabeis.com.br
4. **Clique em**: DNS
5. **Adicione os registros** conforme tabela acima

### GoDaddy

1. **Acesse**: https://godaddy.com
2. **Login** e vá em "Meus Produtos"
3. **Clique em**: Gerenciar DNS
4. **Adicione os registros** conforme necessário

### Hostinger

1. **Acesse**: https://hostinger.com.br
2. **Vá em**: Domínios > Gerenciar
3. **Clique em**: Zona DNS
4. **Adicione os registros**

### Locaweb

1. **Acesse**: https://locaweb.com.br
2. **Painel de Controle** > Domínios
3. **DNS** > Editar Zona
4. **Adicione os registros**

## ⚙️ Configuração no Render (Hospedagem)

### 1. Configurar Domínio Customizado

1. **Acesse**: https://render.com
2. **Vá no seu projeto**: ccp-website
3. **Settings** > Custom Domains
4. **Adicione**: ccpsolucoescontabeis.com.br
5. **Adicione**: www.ccpsolucoescontabeis.com.br

### 2. Verificação SSL

O Render configurará automaticamente o SSL (HTTPS) após a propagação do DNS.

## 📧 Configuração de E-mails Profissionais

### Opção 1: Google Workspace (Recomendado)

**Custo**: R$ 30/mês por usuário

1. **Acesse**: https://workspace.google.com
2. **Inicie configuração** para ccpsolucoescontabeis.com.br
3. **Configure os registros MX** conforme mostrado acima
4. **Crie contas**:
   - contato@ccpsolucoescontabeis.com.br
   - gabriela@ccpsolucoescontabeis.com.br
   - admin@ccpsolucoescontabeis.com.br

### Opção 2: Titan Email (Hostinger)

**Custo**: R$ 15/mês

1. **Acesse**: Hostinger Email
2. **Configure MX records**
3. **Crie contas de email**

### Opção 3: Email Gratuito (Zoho)

**Custo**: Gratuito até 5 usuários

1. **Acesse**: https://zoho.com/mail
2. **Cadastre o domínio**
3. **Configure DNS conforme instruções**

## 🔍 Verificação e Testes

### 1. Verificar Propagação DNS

Use essas ferramentas para verificar se o DNS propagou:

- **WhatsMyDNS**: https://whatsmydns.net
- **DNS Checker**: https://dnschecker.org
- **MXToolbox**: https://mxtoolbox.com

### 2. Testar Website

Após 24-48h da configuração DNS:

1. **Acesse**: https://ccpsolucoescontabeis.com.br
2. **Teste**: https://www.ccpsolucoescontabeis.com.br
3. **Verifique**: Certificado SSL (cadeado verde)

### 3. Testar Email

1. **Envie email** de uma conta externa para contato@ccpsolucoescontabeis.com.br
2. **Verifique** se chegou na caixa de entrada
3. **Responda** para testar envio

## ⏰ Cronograma de Propagação

- **DNS A/CNAME**: 1-4 horas
- **DNS MX**: 4-24 hours
- **SSL Certificate**: 2-24 horas após DNS
- **Email**: 24-48 horas

## 🚨 Problemas Comuns

### Site não carrega
- **Causa**: DNS não propagou
- **Solução**: Aguardar até 48h

### SSL não funciona
- **Causa**: Render aguardando DNS
- **Solução**: Verificar se domínio foi adicionado no Render

### Email não funciona
- **Causa**: MX records incorretos
- **Solução**: Verificar configuração MX

### www não redireciona
- **Causa**: Falta registro CNAME ou A para www
- **Solução**: Adicionar registro www

## 📞 Contatos para Suporte

### Render Support
- **Site**: https://render.com/support
- **Docs**: https://render.com/docs

### Registro.br
- **Telefone**: 11 5509-3548
- **Email**: info@registro.br

### Google Workspace
- **Suporte**: Via console admin
- **Docs**: https://support.google.com/a

## 📋 Checklist Final

Após configurar tudo:

- [ ] DNS A/CNAME configurado
- [ ] DNS MX configurado para email
- [ ] Domínio adicionado no Render
- [ ] Site carrega em ccpsolucoescontabeis.com.br
- [ ] Site carrega em www.ccpsolucoescontabeis.com.br
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Email profissional configurado
- [ ] Teste de envio/recebimento de email
- [ ] WhatsApp links atualizados no site
- [ ] Google Analytics configurado
- [ ] Google Search Console configurado

## 🎯 Próximos Passos

Após DNS configurado:

1. **Atualize** informações de contato no site
2. **Configure** Google Analytics
3. **Submeta** sitemap no Google Search Console
4. **Teste** formulário de contato
5. **Configure** backup automático
6. **Monitore** uptime do site

---

**⚠️ Importante**: Mantenha este arquivo como referência. DNS pode levar até 48h para propagar completamente ao redor do mundo.

**📱 Dica**: Use o modo anônimo do navegador para testar o site após mudanças DNS, para evitar cache.
