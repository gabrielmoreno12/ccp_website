# ⚡ DNS - Configuração Rápida

## 🎯 Configuração Essencial para ccpsolucoescontabeis.com.br

### 📍 Registros DNS Obrigatórios

**No painel do seu provedor de domínio (Registro.br, GoDaddy, etc.):**

#### Para ccpsolucoescontabeis.com.br (domínio raiz)
```
A      @    216.24.57.1
ANAME  @    ccp-website.onrender.com
```
*Se seu provedor não suportar ANAME, use apenas o registro A acima*

#### Para www.ccpsolucoescontabeis.com.br
```
CNAME  www  ccp-website.onrender.com
```

### 📧 Email Profissional (Escolha uma opção)

#### Google Workspace (R$ 30/mês)
```
MX   @   1  aspmx.l.google.com.
MX   @   5  alt1.aspmx.l.google.com.
MX   @   5  alt2.aspmx.l.google.com.
MX   @   10 alt3.aspmx.l.google.com.
MX   @   10 alt4.aspmx.l.google.com.
```

#### Zoho Mail (Gratuito)
```
MX   @   10 mx.zoho.com.
MX   @   20 mx2.zoho.com.
```

### 🔧 No Render.com

✅ **Já configurado!** Você já adicionou os domínios no Render:
- ccpsolucoescontabeis.com.br
- www.ccpsolucoescontabeis.com.br

**Status atual**: Aguardando configuração DNS

### 🎯 O que fazer AGORA no seu provedor de domínio:

**1. Para o domínio principal (ccpsolucoescontabeis.com.br):**
- Adicione um registro **A** apontando para `216.24.57.1`
- OU um registro **ANAME/ALIAS** apontando para `ccp-website.onrender.com`

**2. Para o subdomínio www:**
- Adicione um registro **CNAME** apontando `www` para `ccp-website.onrender.com`

**3. Clique em "Verify" no Render** após configurar o DNS

### ⏰ Tempo de Propagação
- **DNS**: 1-4 horas
- **SSL**: 2-24 horas
- **Email**: 24-48 horas

### ✅ Teste Final
- https://ccpsolucoescontabeis.com.br
- https://www.ccpsolucoescontabeis.com.br
- Cadeado verde (SSL)
- Email funcionando

### 🔍 Verificar Propagação DNS
Use estas ferramentas para verificar se configurou corretamente:
- **DNS Checker**: https://dnschecker.org
- **WhatsMyDNS**: https://whatsmydns.net

### ⚠️ Importante
- O botão "Verify" no Render só funciona DEPOIS que o DNS propagar
- Aguarde algumas horas antes de clicar em "Verify"
- O SSL será configurado automaticamente após a verificação

---
**📖 Guia completo em**: `CONFIGURACAO-DNS.md`
