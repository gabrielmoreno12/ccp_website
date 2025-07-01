/**
 * Configurações do Website CCP Soluções Contábeis
 * 
 * Este arquivo contém todas as configurações principais que podem
 * ser facilmente alteradas para personalizar o website.
 */

const CCP_CONFIG = {
    // Informações da Empresa
    empresa: {
        nome: "CCP Soluções Contábeis",
        slogan: "Soluções Contábeis para Você e sua Empresa",
        descricao: "Soluções contábeis modernas e eficientes para empresas de todos os segmentos. Sua parceira de confiança há mais de 20 anos.",
        anosExperiencia: 20
    },

    // Informações de Contato
    contato: {
        telefone: "(48) 9222-6800",
        telefoneObs: "Somente WhatsApp",
        whatsapp: "5548922268000",
        email: "admccpsolucoes@gmail.com",
        endereco: {
            rua: "Rua Ilha dos Corais, 60",
            bairro: "Vargem do Bom Jesus",
            cidade: "Florianópolis",
            estado: "SC",
            cep: "88056-597",
            completo: "Rua Ilha dos Corais, 60 - Vargem do Bom Jesus<br>Florianópolis - SC"
        }
    },

    // Horário de Funcionamento
    horario: {
        segundaASexta: "8h às 18h",
        sabado: "8h às 12h",
        domingo: "Fechado"
    },

    // Redes Sociais
    redesSociais: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        whatsapp: "https://api.whatsapp.com/send?phone=5548922268000"
    },

    // Coordenadas para Google Maps
    localizacao: {
        latitude: -30.034179781884405,
        longitude: -51.22831708488156,
        zoom: 15
    },

    // Estatísticas da Empresa
    estatisticas: {
        clientesAtendidos: 500,
        anosExperiencia: 20,
        satisfacao: 100,
        profissionais: 15
    },

    // Cores do Site (CSS Custom Properties)
    cores: {
        primaria: "#082464",
        primariaClara: "#1a3a8a",
        primariaEscura: "#051b4a",
        secundaria: "#f8fafc",
        accent: "#3b82f6",
        textoPrimario: "#1f2937",
        textoSecundario: "#6b7280",
        textoClaro: "#9ca3af",
        branco: "#ffffff",
        sucesso: "#10b981",
        aviso: "#f59e0b",
        erro: "#ef4444"
    },

    // Principais Serviços (para a página inicial)
    servicosDestaque: [
        {
            titulo: "Abertura de Empresa",
            descricao: "Consultoria completa para abertura do seu negócio com agilidade e segurança jurídica.",
            icone: "fas fa-building"
        },
        {
            titulo: "Imposto de Renda",
            descricao: "Declaração completa do IR para pessoa física e jurídica com máxima restituição.",
            icone: "fas fa-calculator"
        },
        {
            titulo: "Certificação Digital",
            descricao: "ECF e ECNPJ - Certificados digitais para pessoa física e jurídica.",
            icone: "fas fa-certificate"
        },
        {
            titulo: "Departamento Pessoal",
            descricao: "Gestão completa de RH, folha de pagamento e obrigações trabalhistas.",
            icone: "fas fa-users"
        },
        {
            titulo: "Consultoria Fiscal",
            descricao: "Planejamento tributário para reduzir custos e aumentar a eficiência.",
            icone: "fas fa-file-invoice-dollar"
        },
        {
            titulo: "Assessoria Empresarial",
            descricao: "Suporte estratégico para tomada de decisões e crescimento do negócio.",
            icone: "fas fa-handshake"
        }
    ],

    // Depoimentos de Clientes
    depoimentos: [
        {
            nome: "Maria Silva",
            cargo: "CEO, TechStart Ltda",
            foto: "client-1.jpg",
            texto: "A CCP transformou completamente a gestão contábil da nossa empresa. O atendimento é excepcional e sempre conseguem otimizar nossos tributos."
        },
        {
            nome: "João Santos",
            cargo: "Diretor, Construtora Santos",
            foto: "client-2.jpg",
            texto: "Profissionais extremamente competentes e comprometidos. Desde que contratamos a CCP, nossa empresa tem crescido de forma organizada e segura."
        },
        {
            nome: "Ana Costa",
            cargo: "Proprietária, Boutique Ana",
            foto: "client-3.jpg",
            texto: "O que mais me impressiona é o atendimento humanizado. Sempre que preciso, tenho acesso direto ao contador para esclarecer minhas dúvidas."
        }
    ],

    // Missão, Visão e Valores
    mvv: {
        missao: "Oferecer soluções contábeis e fiscais de excelência, contribuindo para o crescimento sustentável e organizado dos nossos clientes, através de um atendimento personalizado, ético e tecnologicamente avançado.",
        visao: "Ser reconhecida como a principal empresa de contabilidade da região, referência em qualidade, inovação e relacionamento, contribuindo para o sucesso dos nossos clientes e o desenvolvimento econômico local.",
        valores: [
            { titulo: "Ética", descricao: "Conduta íntegra em todas as nossas ações" },
            { titulo: "Excelência", descricao: "Busca constante pela qualidade superior" },
            { titulo: "Compromisso", descricao: "Dedicação total ao sucesso dos clientes" },
            { titulo: "Inovação", descricao: "Evolução contínua dos nossos processos" },
            { titulo: "Transparência", descricao: "Relacionamento claro e honesto" }
        ]
    },

    // Segmentos Atendidos
    segmentos: [
        { nome: "Área da Saúde", descricao: "Clínicas médicas, odontológicas, laboratórios e consultórios", icone: "fas fa-stethoscope" },
        { nome: "Beleza e Estética", descricao: "Salões de beleza, clínicas de estética e spas", icone: "fas fa-cut" },
        { nome: "Tecnologia", descricao: "Empresas de TI, desenvolvimento e consultoria tecnológica", icone: "fas fa-laptop-code" },
        { nome: "Imobiliário", descricao: "Imobiliárias, corretores e construtoras", icone: "fas fa-home" },
        { nome: "Alimentação", descricao: "Restaurantes, lanchonetes, bares e food trucks", icone: "fas fa-utensils" },
        { nome: "Comércio", descricao: "Lojas físicas, e-commerces e distribuidoras", icone: "fas fa-shopping-cart" },
        { nome: "Serviços", descricao: "Prestadores de serviços em geral", icone: "fas fa-tools" },
        { nome: "Indústria", descricao: "Empresas industriais e de manufatura", icone: "fas fa-industry" }
    ],

    // Perguntas Frequentes
    faq: [
        {
            pergunta: "Como posso agendar uma consultoria?",
            resposta: "Você pode agendar uma consultoria gratuita através do nosso formulário de contato, WhatsApp, telefone ou e-mail. Nossa equipe entrará em contato para definir o melhor horário para você."
        },
        {
            pergunta: "Qual é o prazo para abertura de uma empresa?",
            resposta: "O prazo médio para abertura de empresa varia de 15 a 30 dias úteis, dependendo do tipo de empresa e da complexidade do processo. Nosso time trabalha para agilizar ao máximo este processo."
        },
        {
            pergunta: "Vocês atendem empresas de que tamanho?",
            resposta: "Atendemos empresas de todos os portes, desde MEIs e microempresas até médias e grandes empresas. Nossos serviços são personalizados conforme o tamanho e necessidades específicas de cada negócio."
        },
        {
            pergunta: "Como funciona o atendimento da CCP?",
            resposta: "Oferecemos atendimento personalizado e humanizado. Cada cliente tem acesso direto ao contador responsável pela sua conta, garantindo comunicação clara e resolução rápida de questões."
        },
        {
            pergunta: "Quais documentos preciso para iniciar os serviços?",
            resposta: "Os documentos necessários variam conforme o serviço solicitado. Em uma primeira consultoria, nossa equipe fornecerá uma lista completa dos documentos específicos para sua situação."
        },
        {
            pergunta: "A CCP oferece consultoria gratuita?",
            resposta: "Sim! Oferecemos uma consultoria inicial gratuita para conhecer suas necessidades e apresentar as melhores soluções para sua empresa. Agende já a sua!"
        }
    ],

    // Configurações de SEO
    seo: {
        titulo: "CCP Soluções Contábeis - Contabilidade Moderna e Eficiente",
        descricao: "CCP Soluções Contábeis oferece serviços de contabilidade completos para empresas de todos os segmentos. Mais de 25 anos de experiência no mercado.",
        palavrasChave: "contabilidade, contador, abertura empresa, imposto renda, MEI, departamento pessoal, consultoria fiscal, Porto Alegre, RS",
        autor: "CCP Soluções Contábeis",
        idioma: "pt-BR"
    },

    // Configurações de Analytics
    analytics: {
        googleAnalyticsId: "", // Inserir ID do Google Analytics
        facebookPixelId: "", // Inserir ID do Facebook Pixel
        hotjarId: "" // Inserir ID do Hotjar
    },

    // Configurações de Formulário
    formulario: {
        emailDestino: "admccpsolucoes@gmail.com",
        assuntoDefault: "Contato via Website",
        mensagemSucesso: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        mensagemErro: "Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone."
    }
};

// Função para aplicar configurações dinamicamente
function aplicarConfiguracoes() {
    // Aplicar cores CSS
    const root = document.documentElement;
    Object.entries(CCP_CONFIG.cores).forEach(([prop, valor]) => {
        root.style.setProperty(`--${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}`, valor);
    });

    // Outras configurações podem ser aplicadas aqui
    console.log('Configurações CCP aplicadas com sucesso');
}

// Aplicar configurações quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarConfiguracoes);
} else {
    aplicarConfiguracoes();
}

// Exportar configurações para uso global
window.CCP_CONFIG = CCP_CONFIG;
