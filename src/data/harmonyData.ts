import { BannerSlide, BenefitItem, FAQItem, EventArticle } from '../types';
import { CONFIG } from '../config';

export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Veículo moderno trafegando em rodovia ao entardecer com segurança e tranquilidade",
    tag: "PROTEÇÃO PATRIMONIAL MUTUALISTA",
    title: "PROTEÇÃO PARA O SEU VEÍCULO",
    subtitle: "Proteção para o seu veículo. Tranquilidade para você.",
    complement: "Conte com uma estrutura de benefícios e assistência para dirigir com mais segurança e tranquilidade.",
    ctaText: "FAÇA SUA COTAÇÃO",
    ctaTarget: "cotacao",
    isSusepSlide: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Profissional de assistência técnica automotiva prestando auxílio emergencial na via",
    tag: "SUPORTE EM TODO O BRASIL",
    title: "ASSISTÊNCIA 24 HORAS",
    subtitle: "Precisou? A assistência está com você.",
    complement: "Conte com atendimento e serviços de assistência quando precisar, conforme as condições do seu plano.",
    ctaText: "CONHEÇA OS BENEFÍCIOS",
    ctaTarget: "beneficios",
    isSusepSlide: true
  },
  {
    id: 3,
    image: "/assets/tow_truck_removing_car.jpg",
    imageAlt: "Caminhão guincho plataforma atendendo veículo em rodovia com rapidez",
    tag: "SOCORRO MÚTUO EFICIENTE",
    title: "REBOQUE E ASSISTÊNCIA",
    subtitle: "Seu veículo não pode parar.",
    complement: "Conte com serviço de reboque e assistência conforme as condições do plano contratado.",
    ctaText: "SAIBA MAIS",
    ctaTarget: "beneficios",
    isSusepSlide: true
  },
  {
    id: 4,
    image: "/assets/ai_assistant_service.jpg",
    imageAlt: "Interface de assistente virtual por Inteligência Artificial para atendimento rápido e proteção veicular",
    tag: "ATENDIMENTO INTELIGENTE 24H",
    title: "PROTEÇÃO POR IA",
    subtitle: "Proteção completa em 5 min",
    complement: "Tecnologia de ponta para garantir sua proteção instantânea, sem burocracia e disponível a qualquer momento.",
    ctaText: "VER SERVIÇOS",
    ctaTarget: "beneficios",
    isSusepSlide: true
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Painel tecnológico automotivo moderno com telemetria e sistema de rastreamento digital",
    tag: "INOVAÇÃO & MONITORAMENTO",
    title: "TECNOLOGIA E SEGURANÇA",
    subtitle: "Mais tecnologia para proteger o seu veículo.",
    complement: "Conheça as soluções de rastreamento disponibilizadas pela Harmony, conforme as condições do plano.",
    ctaText: "CONHEÇA",
    ctaTarget: "protecao",
    isSusepSlide: true
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Fachada institucional moderna simbolizando transparência, governança e conformidade regulatória",
    tag: "TRANSPARÊNCIA REGULATÓRIA",
    title: "HARMONY CLUBE: CADASTRADA NA SUSEP",
    subtitle: "A Harmony Clube está cadastrada perante a Superintendência de Seguros Privados — SUSEP, dentro do marco regulatório aplicável às associações de proteção patrimonial mutualista.",
    complement: "Atuação sujeita à regulamentação e às normas aplicáveis ao segmento. Consulte as informações cadastrais e regulatórias oficiais.",
    ctaText: "CONSULTAR SUSEP",
    ctaTarget: CONFIG.SUSEP_CONSULTA_URL,
    isExternalLink: true,
    isSusepSlide: true
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "assistencia-24h",
    title: "Assistência 24 Horas",
    shortDesc: "Central operacional dedicada 24 horas por dia, 365 dias ao ano em território nacional.",
    fullDesc: "Equipe especializada pronta para prestar apoio rápido em situações de emergência, orientando e enviando socorro onde você estiver.",
    iconName: "ClockAlert",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    category: "assistencia",
    conditions: "Acionamento via central 0800 ou WhatsApp oficial. Atendimento em todo território nacional.",
    coverageLimits: "Até limites contratados no plano de adesão."
  },
  {
    id: "reboque",
    title: "Reboque e Guincho",
    shortDesc: "Remoção do veículo em casos de colisão, pane mecânica ou elétrica.",
    fullDesc: "Serviço de reboque por plataforma moderna para conduzir o veículo com total segurança até a oficina referenciada ou local indicado.",
    iconName: "Truck",
    image: "/assets/tow_truck_removing_car.jpg",
    category: "assistencia",
    conditions: "Quilometragem conforme a categoria do plano (ex.: 200 km, 400 km ou ilimitado para eventos de colisão).",
    coverageLimits: "Conforme contrato e regulamento vigente."
  },
  {
    id: "socorro-mecanico",
    title: "Socorro Mecânico e Elétrico",
    shortDesc: "Envio de mecânico para reparo emergencial de pequeno porte no local.",
    fullDesc: "Tentativa de conserto paliativo imediato para que o associado possa seguir viagem em segurança, como carga de bateria ou pequenos ajustes.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae65d3f8?auto=format&fit=crop&w=800&q=80",
    category: "assistencia",
    conditions: "Válido para panes passíveis de solução no próprio local sem necessidade de ferramental de oficina pesada.",
    coverageLimits: "Conforme manual de assistência."
  },
  {
    id: "troca-pneu",
    title: "Troca de Pneus",
    shortDesc: "Auxílio profissional para substituição do pneu furado pelo estepe do veículo.",
    fullDesc: "Caso ocorra dano ou perfuração em pneu, um prestador é enviado para efetuar a troca pelo sobressalente em perfeitas condições.",
    iconName: "Disc",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    category: "assistencia",
    conditions: "Necessário que o veículo possua estepe em condições de uso e chave de roda original.",
    coverageLimits: "Acionamento ilimitado para eventos comprovados."
  },
  {
    id: "chaveiro",
    title: "Chaveiro 24 Horas",
    shortDesc: "Abertura do veículo em casos de perda, quebra ou trancamento das chaves no interior.",
    fullDesc: "Envio de chaveiro qualificado para abertura das portas sem danificar a estrutura do veículo ou confecção de cópia simples conforme o plano.",
    iconName: "Key",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    category: "assistencia",
    conditions: "Abertura não invasiva do automóvel. Documentação do veículo solicitada para verificação de posse.",
    coverageLimits: "Conforme regulamento."
  },
  {
    id: "pane-seca",
    title: "Auxílio Combustível (Pane Seca)",
    shortDesc: "Suporte para reabastecimento ou remoção até o posto de combustível mais próximo.",
    fullDesc: "Em caso de esgotamento imprevisto de combustível, fornecemos reboque até o posto de abastecimento mais perto ou suporte emergencial.",
    iconName: "Fuel",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    category: "assistencia",
    conditions: "Custo do combustível por conta do associado.",
    coverageLimits: "1 acionamento por mês conforme plano."
  },
  {
    id: "rastreamento",
    title: "Rastreamento e Telemetria",
    shortDesc: "Tecnologia de monitoramento veicular com alta precisão e aplicativo dedicado.",
    fullDesc: "Sistemas de rastreamento com geolocalização em tempo real, telemetria de ignição e alertas de cerca virtual conforme as condições contratadas.",
    iconName: "Radio",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
    category: "rastreamento",
    conditions: "Equipamento instalado em oficinas credenciadas mediante plano com tecnologia inclusa.",
    coverageLimits: "Acesso via smartphone iOS e Android."
  },
  {
    id: "retorno-domicilio",
    title: "Hospedagem ou Retorno ao Domicílio",
    shortDesc: "Meio de transporte alternativo ou diária de hotel em caso de sinistro fora do domicílio.",
    fullDesc: "Se o veículo ficar imobilizado em viagem distante da cidade de domicílio, fornecemos passagens ou hospedagem para motorista e ocupantes.",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    category: "clube",
    conditions: "Válido a partir de 50km do município de residência e quando o conserto ultrapassar 48 horas.",
    coverageLimits: "Conforme tabela do plano contratado."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "como-funciona-protecao",
    category: "protecao",
    question: "Como funciona a proteção patrimonial mutualista da Harmony Clube?",
    answer: "A proteção veicular mutualista é um sistema cooperativo e associativo legalmente fundamentado na Constituição Federal e no Código Civil Brasileiro. Os associados reúnem-se em benefício comum para ratear de forma proporcional e transparente eventuais despesas decorrentes de colisões, furtos ou danos aos veículos cadastrados, gerando custos significativamente mais justos e acessíveis do que produtos mercantis convencionais."
  },
  {
    id: "susep-regula",
    category: "susep",
    question: "A Harmony Clube é cadastrada na SUSEP? O que isso significa?",
    answer: "Sim. A Harmony Clube está cadastrada perante a Superintendência de Seguros Privados — SUSEP, dentro do marco regulatório aplicável às associações de proteção patrimonial mutualista. Esse cadastro atesta a conformidade das entidades associativas dentro das normas e diretrizes estabelecidas pelos órgãos reguladores do setor. Importante ressaltar: a Harmony é uma associação de socorro mútuo e não uma seguradora comercial; a SUSEP não garante pagamentos nem assume riscos da entidade."
  },
  {
    id: "diferenca-seguradora",
    category: "protecao",
    question: "Qual é a diferença entre uma associação mutualista e uma seguradora convencional?",
    answer: "As seguradoras são sociedades anônimas que visam lucro financeiro através da comercialização de apólices individuais com perfil restritivo de condutor. Já a Harmony Clube é uma associação sem fins lucrativos regida pelo mutualismo: a gestão é colaborativa, as regras são estabelecidas democraticamente em estatuto social, e o objetivo exclusivo é a divisão justa de custos e a assistência mútua de qualidade entre os membros."
  },
  {
    id: "como-fazer-cotacao",
    category: "geral",
    question: "Como fazer uma cotação para o meu veículo?",
    answer: "Você pode realizar sua cotação diretamente em nosso site na página 'Cotação'. Basta preencher o tipo do veículo (carro, moto ou caminhonete), placa, modelo, ano e seus dados de contato. Nossa equipe entrará em contato rapidamente apresentando as condições e planos disponíveis para o seu perfil."
  },
  {
    id: "quais-veiculos-aceitos",
    category: "geral",
    question: "Quais veículos podem ser protegidos na Harmony Clube?",
    answer: "Aceitamos automóveis de passeio, motocicletas, caminhonetes, utilitários, veículos para transporte por aplicativo, táxis e frotas leves, respeitando a vistoria prévia e o regulamento associativo oficial."
  },
  {
    id: "como-acionar-assistencia",
    category: "assistencia",
    question: "Como devo proceder para acionar a Assistência 24 Horas em caso de emergência?",
    answer: "Em caso de pane mecânica, pneu furado, colisão ou necessidade de guincho, ligue imediatamente para nossa linha gratuita de emergência 0800 700 8090 ou acione pelo botão de emergência em nosso site e WhatsApp. Tenha em mãos a placa do veículo, sua localização aproximada e relate a ocorrência para envio imediato do socorro."
  },
  {
    id: "como-comunicar-evento",
    category: "assistencia",
    question: "Como comunicar um sinistro ou evento (colisão, roubo ou furto)?",
    answer: "Primeiro, priorize a sua segurança física. Em casos de roubo ou furto, registre imediatamente o Boletim de Ocorrência (B.O.). Em seguida, acesse a página 'Sinistro & Eventos' ou entre em contato com nossa central para envio dos documentos básicos (B.O., CNH, CRLV e fotos). Nossa equipe orientará todo o trâmite conforme o regulamento."
  },
  {
    id: "como-acessar-area-associado",
    category: "associado",
    question: "Como acessar a Área do Associado?",
    answer: "O acesso à Área do Associado é realizado através do menu superior em 'Área do Associado'. Lá você encontra atalhos para emitir a 2ª via de boleto, consultar o status do seu veículo, verificar o regulamento do plano e solicitar atendimento."
  },
  {
    id: "perfil-condutor",
    category: "protecao",
    question: "Existe análise de perfil de crédito (SPC/Serasa) ou restrição por condutor jovem?",
    answer: "Não realizamos consulta ao SPC ou Serasa para a adesão associativa. Além disso, a proteção mutualista não possui cobrança adicional por perfil individual de condutor, permitindo que qualquer pessoa legalmente habilitada conduza o veículo protegido."
  },
  {
    id: "consulta-oficial-susep",
    category: "susep",
    question: "Onde posso consultar as informações cadastrais oficiais da entidade?",
    answer: "Você pode acessar o portal oficial do Governo Federal e da SUSEP (gov.br/susep) para consultar as informações cadastrais e normativas referentes às entidades que atuam dentro do marco regulatório da proteção patrimonial mutualista."
  }
];

export const EVENTS_ARTICLES: EventArticle[] = [
  {
    id: "marco-regulatorio-susep",
    title: "Marco Regulatório e Transparência: A Importância do Cadastro perante a SUSEP",
    category: "Informações Regulatórias",
    date: "14 de Agosto de 2026",
    summary: "Entenda como o cadastro e a conformidade perante os órgãos reguladores fortalecem a segurança institucional do mutualismo veicular no Brasil.",
    content: "O avanço do marco regulatório para o setor de proteção patrimonial mutualista representa uma vitória para a transparência e segurança jurídica de milhões de associados. A Harmony Clube de Benefícios atua de forma rigorosa em cumprimento às normas legais vigentes, mantendo seus dados cadastrais e estatutários atualizados perante a Superintendência de Seguros Privados — SUSEP...",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    author: "Diretoria Jurídica e de Compliance Harmony",
    readTime: "4 min de leitura"
  },
  {
    id: "cuidados-manutencao-preventiva",
    title: "Manutenção Preventiva: 7 Itens Essenciais para Verificar Antes de Pegar a Estrada",
    category: "Manutenção & Dicas",
    date: "02 de Setembro de 2026",
    summary: "Pneus, fluidos, freios e iluminação: pequenos cuidados evitam panes no meio da viagem e garantem a integridade da sua família.",
    content: "Antes de qualquer viagem, a revisão preventiva é a melhor companheira do motorista. Além de evitar paradas forçadas na rodovia, a manutenção em dia reduz o consumo de combustível e prolonga a vida útil dos componentes do seu automóvel...",
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    author: "Equipe Técnica de Assistência",
    readTime: "3 min de leitura"
  },
  {
    id: "como-agir-em-caso-de-colisao",
    title: "Guia Prático: O que Fazer Imediatamente Após um Acidente de Trânsito",
    category: "Sinistro & Segurança",
    date: "28 de Agosto de 2026",
    summary: "Mantenha a calma, sinalize a via com o triângulo e priorize o socorro médico antes de qualquer trâmite administrativo.",
    content: "Estar envolvido em um acidente é sempre uma situação estressante. Ter clareza dos passos imediatos faz toda a diferença: 1) Sinalize o local; 2) Verifique se há feridos e acione o 193/190; 3) Se não houver vítimas e os veículos puderem rodar, libere a via para evitar novos acidentes; 4) Registre fotos do local e posições dos carros...",
    imageUrl: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&w=1200&q=80",
    author: "Coordenação de Sinistro Harmony",
    readTime: "5 min de leitura"
  },
  {
    id: "vantagens-mutualismo-brasil",
    title: "Como a Economia Compartilhada e o Socorro Mútuo Transformaram a Proteção Veicular",
    category: "Educação Mutualista",
    date: "19 de Agosto de 2026",
    summary: "Conheça as origens do mutualismo moderno e por que milhares de proprietários escolhem associações de benefícios.",
    content: "O mutualismo é uma das formas mais antigas e nobres de solidariedade social. Em vez de contratar uma empresa terceira que lucra com o risco, os próprios participantes organizam-se para proteger o patrimônio de todos com custos reais e solidários...",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    author: "Comitê de Comunicação Institucional",
    readTime: "4 min de leitura"
  }
];
