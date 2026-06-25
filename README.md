# ✨ Gisa Ateliê ✨

> Pixels que conectam, detalhes que encantam. Vitrine Digital e Sistema de Encomendas em Pixel Art (Hama Beads).

Este repositório contém o código-fonte completo da plataforma web do **Gisa Ateliê**. O projeto foi estruturado utilizando conceitos modernos de desenvolvimento de software para servir como um catálogo interativo de produtos e um captador de encomendas personalizadas com redirecionamento estratégico de conversão.

---

## 🎨 Identidade Visual & Paleta de Cores

O design foi elaborado buscando um visual acolhedor, artesanal e moderno, utilizando cores balanceadas para garantir excelente contraste e acessibilidade:

| Elemento | Código Cor | Aplicação Visual |
| :--- | :--- | :--- |
| **Texto Principal** | `#4A3E3D` | Garante uma leitura confortável, orgânica e robusta |
| **Fundo de Cards** | `#FFF9F4` | Concede um tom off-white suave e artesanal |
| **Detalhes e Bordas** | `#F8B8D0` | Usado em detalhes sutis, linhas finas e divisórias |
| **Destaque e Preços** | `#f274a4` | Focado nas chamadas de ação (`CTA`), botões e valores |
| **Tags e Categorias** | `#CDB4F6` | Destaca o nicho do produto (ex: Pets, Geek) de forma leve |

---

## 🖼️ Galeria da Vitrine (Assets do Site)

Abaixo estão referenciados os banners estruturais e caminhos de imagens utilizados na interface para compor o catálogo:

### Banner Principal de Destaques
![Banner Seção Pets](./public/pet-banner.png)

### Elementos de Identidade e Produtos
| Selo de Autenticidade | Amostra de Categoria (Ímãs / Chaveiros) |
| :---: | :---: |
| <img src="./public/selo.png" width="180" alt="Selo Gisa Ateliê"> | <img src="https://placehold.co/300x300/fff9f4/f274a4?text=Hama+Beads" width="180" alt="Exemplo de Produto"> |

> 📂 **Nota de Desenvolvimento:** As fotos reais e exclusivas de cada produto comercializado encontram-se centralizadas organizadamente dentro do diretório `public/produtos/`.

---

## 🚀 Tecnologias e Frameworks

* **Next.js 15 (App Router)** — Framework React focado em performance, renderização eficiente e SEO.
* **React 19** — Biblioteca base para a construção de interfaces reativas baseadas em componentes flexíveis.
* **Tailwind CSS** — Framework utilitário para estilização fluida, moderna e totalmente responsiva.
* **Dotenv & Environment Variables** — Camada de segurança essencial para o isolamento de chaves privadas.

---

## 🔐 Segurança e Boas Práticas (LGPD & Proteção Anti-Spam)

Para proteger a integridade de dados sensíveis e pessoais (como números de telefone privados, links diretos de comunicação corporativa e perfis sociais), o projeto utiliza estritamente **Variáveis de Ambiente**. Isso impede que robôs de varredura pública (*web scrapers*) capturem dados privados direto no histórico do GitHub.

### 📋 Configuração do Arquivo de Ambiente

Crie um arquivo `.env.local` na raiz do seu projeto local. Este arquivo está devidamente listado no `.gitignore` e **nunca** deve ser enviado para repositórios públicos:

'''env
# Configurações de Redirecionamento Seguro (Substitua pelos dados oficiais)
NEXT_PUBLIC_WHATSAPP_NUMBER=SEU_NUMERO_COM_DDD_AQUI
NEXT_PUBLIC_INSTAGRAM_URL=LINK_DO_SEU_PERFIL_AQUI

✨ Funcionalidades Avançadas Implementadas

Navegação Inteligente Inter-Abas: Links configurados com roteamento composto (href="/#encomenda"). Caso o usuário clique no menu a partir de páginas internas como /sobre, o Next.js gerencia o retorno à página principal e realiza o scroll suave automático até a seção desejada.

Imagens com Proteção de Fallback: Todos os componentes de exibição de imagens contam com gatilhos de captura de erro (onError). Caso uma imagem de produto seja removida ou mude de nome, o sistema injeta um placeholder limpo na paleta do site:

TypeScript
  onError={(e) => {
    (e.target as HTMLImageElement).src = '[https://placehold.co/300x300/fff9f4/4a3e3d?text=Foto+Em+Breve](https://placehold.co/300x300/fff9f4/4a3e3d?text=Foto+Em+Breve)';
  }}
Mensagens Pré-Configuradas Dinâmicas: Ao abrir a janela modal de detalhes e optar por encomendar via WhatsApp, o link monta uma string codificada em URL contendo o nome e o valor exato do produto escolhido, otimizando o fluxo de atendimento.

📦 Como Executar o Projeto Localmente

Clone o repositório público:

Bash
   git clone [https://github.com/seu-usuario/gisa-atelie.git](https://github.com/seu-usuario/gisa-atelie.git)
Instale as dependências do projeto:

Bash
   npm install
Configure as credenciais:
Duplique os exemplos de variáveis de ambiente configurando seu arquivo .env.local.

Inicialize o servidor de desenvolvimento:

Bash
   npm run dev
Acesse o ambiente local:
Abra o navegador em http://localhost:3000 e acompanhe as alterações em tempo real.
