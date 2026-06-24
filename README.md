# ✨ Gisa Ateliê ✨
> Pixels que conectam, detalhes que encantam. Vitrine Digital e Sistema de Encomendas em Pixel Art (Hama Beads).

Este repositório contém o código-fonte completo da plataforma web do **gisa ateliê**. O projeto foi estruturado utilizando conceitos modernos de desenvolvimento de software para servir como um catálogo interativo de produtos e um captador de encomendas personalizadas com redirecionamento estratégico de conversão.

---

## 🎨 Identidade Visual & Paleta de Cores

O design foi elaborado buscando um visual acolhedor, artesanal e moderno, utilizando cores balanceadas para garantir excelente contraste e acessibilidade:

* **Texto Principal:** `#4A3E3D` (Marrom Escuro) — Garante uma leitura confortável e orgânica.
* **Fundo de Cards:** `#FFF9F4` (Off-White Warm) — Concede um tom suave e artesanal.
* **Detalhes e Bordas:** `#F8B8D0` (Rosa Pastel) — Usado em detalhes sutis e divisórias.
* **Destaque e Preços:** `#f274a4` (Rosa Vibrante) — Focado nas chamadas de ação (`CTA`) e destaques de valores.
* **Tags e Categorias:** `#CDB4F6` (Lavanda Soft) — Destaca o tipo de produto de forma leve.

---

## 🚀 Tecnologias e Frameworks

* **Next.js 15** (App Router) — Framework React focado em performance e SEO.
* **React 19** — Biblioteca base para a construção de interfaces reativas baseadas em componentes.
* **Tailwind CSS** — Framework utilitário para estilização fluida, moderna e totalmente responsiva.
* **Dotenv & Environment Variables** — Camada de segurança para gerenciamento de dados privados.

---

## 🔐 Segurança e Boas Práticas (LGPD & Anti-Spam)

Para proteger a integridade de dados sensíveis e pessoais (como números de telefone, links diretos de comunicação e perfis sociais), o projeto utiliza **Variáveis de Ambiente**. Isso impede que robôs de varredura pública (*web scrapers*) capturem dados sensíveis direto no histórico do GitHub.

### Configuração Obrigatória Locais:
Crie um arquivo `.env.local` na raiz do projeto (este arquivo já se encontra blindado dentro do `.gitignore`):

No código, as chamadas são feitas dinamicamente:

TypeScript
href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
📂 Estrutura de Pastas Estratégica
Plaintext
├── app/
│   ├── page.tsx                 # Home (Hero, Destaques, Formulário de Encomenda)
│   ├── sobre/
│   │   └── page.tsx             # Storytelling do Ateliê e dos Mascotes
│   ├── politica-de-privacidade/
│   │   └── page.tsx             # Termos de conformidade legal e LGPD
│   └── trocas-e-devolucoes/
│       └── page.tsx             # Políticas institucionais de e-commerce
├── components/
│   ├── Header.tsx               # Menu de navegação com âncoras inteligentes
│   ├── Hero.tsx                 # Banner de boas-vindas com chamada principal
│   ├── ProductCatalog.tsx       # Catálogo resumido de mais procurados na Home
│   ├── AllProducts.tsx          # Vitrine completa com filtros de busca por tags
│   └── CustomOrderForm.tsx      # Formulário estruturado de pedidos sob medida
└── public/
    ├── pet-banner.png           # Banner oficial da seção Pet
    ├── selo.png                 # Selo de autenticidade Gisa Ateliê
    └── produtos/                # Diretório contendo as fotos originais das peças

  
✨ Funcionalidades Avançadas Implementadas
Navegação Inteligente Inter-Abas: Links configurados com roteamento composto (href="/#encomenda"). Caso o usuário clique no botão a partir de páginas internas como /sobre ou /produtos, o Next.js gerencia o retorno à Home e realiza o scroll suave automático até a seção do formulário.

Imagens com Proteção de Fallback: Todos os componentes de exibição de imagens contam com gatilhos de captura de erro (onError). Caso uma foto original ainda não tenha sido upada na pasta public/, o sistema injeta automaticamente um placeholder limpo, impedindo que o site exiba ícones quebrados:

TypeScript
onError={(e) => {
  (e.target as HTMLImageElement).src = '[https://placehold.co/300x300/fff9f4/4a3e3d?text=Foto+Em+Breve](https://placehold.co/300x300/fff9f4/4a3e3d?text=Foto+Em+Breve)';
}}
Mensagens Pré-Configuradas Dinâmicas: Ao abrir o modal e optar por encomendar via WhatsApp, o link monta uma string codificada em URL contendo o nome e o valor exato do produto escolhido, otimizando o atendimento comercial do ateliê.

📦 Como Executar o Projeto Localmente
Clone o repositório público:

Bash
git clone [https://github.com/seu-usuario/gisa-atelie.git](https://github.com/seu-usuario/gisa-atelie.git)
Instale as dependências do projeto:

Bash
npm install
Configure o arquivo .env.local na raiz com os valores correspondentes.

Inicialize o servidor de desenvolvimento:

Bash
npm run dev
Abra o navegador em http://localhost:3000 e acompanhe em tempo real.
