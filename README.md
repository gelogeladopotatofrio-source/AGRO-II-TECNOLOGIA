<div align="center">

```
🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂

  ███████╗ ██████╗ ██╗     ██╗  ██╗ █████╗     ██╗   ██╗██╗██████╗ ████████╗██╗   ██╗ █████╗ ██╗
  ██╔════╝██╔═══██╗██║     ██║  ██║██╔══██╗    ██║   ██║██║██╔══██╗╚══██╔══╝██║   ██║██╔══██╗██║
  █████╗  ██║   ██║██║     ███████║███████║    ██║   ██║██║██████╔╝   ██║   ██║   ██║███████║██║
  ██╔══╝  ██║   ██║██║     ██╔══██║██╔══██║    ╚██╗ ██╔╝██║██╔══██╗   ██║   ██║   ██║██╔══██║██║
  ██║     ╚██████╔╝███████╗██║  ██║██║  ██║     ╚████╔╝ ██║██║  ██║   ██║   ╚██████╔╝██║  ██║███████╗
  ╚═╝      ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝      ╚═══╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝

            ██████╗  ██████╗ ██████╗  ██████╗
            ██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗
            ██████╔╝██║   ██║██████╔╝██║   ██║
            ██╔══██╗██║   ██║██╔══██╗██║   ██║
            ██║  ██║╚██████╔╝██████╔╝╚██████╔╝
            ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝

🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂
```

### Projeto Agrinho 2026 — Sustentabilidade no Agronegócio Brasileiro

> *"O agro brasileiro alimenta o mundo enquanto preserva mais de 60% de sua vegetação nativa."*
> — CNA Brasil / Embrapa

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/SVG)

</div>

---

## 📖 Sobre o Projeto

Site editorial interativo desenvolvido para o **Projeto Agrinho 2026**, com foco na sustentabilidade do agronegócio brasileiro. O projeto explora três pilares fundamentais — ambiental, social e econômico — por meio de conteúdo informativo embasado em fontes oficiais (Embrapa, IBGE, Cepea/USP, IDR-Paraná) e uma experiência visual imersiva com jogos educativos em SVG.

O design une estética **tech editorial** — tipografia precisa, paleta em verdes nobres e dourado fosco, grid sutil e efeitos de glow — a recursos modernos de acessibilidade e gamificação.

---

## ✨ Funcionalidades

### 🎨 Design & Interface
- Hero em tela cheia com parallax e overlay de scan-line
- Tipografia premium: **Chivo** (títulos), **Plus Jakarta Sans** (corpo), **JetBrains Mono** (labels e código)
- Paleta: verde nobre `#0d2b22`, ciano tech `#00e5c3`, dourado `#c8a84b` e creme `#f4f1eb`
- Modo claro e escuro com variáveis CSS e transições suaves
- Grid tech animado como textura de fundo
- Scroll Reveal com IntersectionObserver em todos os cards

### ♿ Acessibilidade
- **Texto Grande** — aumenta fontes para leitura facilitada; preferência salva no `localStorage`
- **Modo Escuro** — troca toda a paleta com transição suave; salvo no `localStorage`
- **Leitura em Voz Alta** — narra o conteúdo em português via Web Speech API, destaca o parágrafo atual e exibe barra de progresso
- Menu flutuante acessível com `aria-label`, `aria-expanded` e `aria-pressed`

### 📰 Conteúdo Editorial
- **A Tríade da Sustentabilidade** — artigo com 3 pilares (Ambiental, Social, Econômico) com dados oficiais
- **Brasil em Números** — lista clicável que revela estatísticas reais ao toque
- **Seção Paraná** — 6 cards temáticos + galeria de fotos oficiais da AEN (CC0) + mapa SVG interativo
- **Galeria Oficial** — 6 fotografias da Agência de Notícias do Paraná, licença Creative Commons CC0

### 🌱 Jogo 1 — Plante sua Árvore

Clicker interativo desenhado inteiramente em SVG com 4 fases progressivas:

| Fase | Ação | Cliques |
|------|------|---------|
| 🌰 Semente | Plantar no solo | 2 |
| 🌱 Broto | Regar | 25 |
| 🍁 Muda | Adubar | 50 |
| 🌳 Árvore | Crescer | 75 |

Cada fase exibe animação SVG única, partículas flutuantes e linha do tempo visual interativa.

### 🌍 Jogo 2 — O Destino do Planeta

Simulador de impacto ambiental com 5 estados visuais do planeta desenhados em SVG:

| Pontuação | Estado | Visual |
|---|---|---|
| 0–499 (ambos) | Neutro | Continentes padrão |
| ≥500 verde | Florescendo | Florestas exuberantes + nuvens |
| ≥500 cinza | Poluído | Prédios + fumaça |
| 1000 verde | 🏆 Planeta Vivo | Vitória total |
| 1000 cinza | 💀 Planeta Morto | Fim distópico |
| Misto | Exausto | Coexistência tensa |

Inclui partículas animadas SVG, barra de progresso dupla, placar em tempo real e mensagem de conclusão personalizada.

### 🕵️ Jogo Secreto — Colheita das Maçãs

Desbloqueado após **50 interações** com o easter egg da plantinha (card de citação). Jogo de reflexo em SVG onde o jogador move uma cesta para coletar 50 maçãs antes que caiam no chão, com 3 vidas. Suporta mouse e toque (mobile).

### 🥚 Easter Egg — Plantinha

Clique na plantinha SVG no card de citação para "regá-la". A cada clique aparece um balão com mensagem e animação de regador. Ao completar **50 cliques**, o jogo secreto é desbloqueado com animação de entrada.

---

## 📱 Responsividade

| Dispositivo | Breakpoint | Adaptações principais |
|---|---|---|
| 📱 Celular | até 480px | Layout em coluna única, parallax desativado, nav compacto |
| 📟 Tablet | 481–900px | Artigo centralizado, galeria em 2 colunas |
| 🖥 Desktop | 901–1400px | Layout padrão duas colunas, card lateral visível |
| 📺 TV / 4K | 1401px+ | Artigo até 1400px, espaçamentos generosos |

---

## 🗂 Estrutura de Arquivos

```
agrinho-2026/
│
├── index.html      # Estrutura HTML semântica completa
├── style.css       # Estilos, temas claro/escuro e responsividade
└── script.js       # Interatividade, acessibilidade e lógica dos jogos
```

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura semântica (`<header>`, `<main>`, `<section>`, `<figure>`, `<footer>`) |
| **CSS3** | Variáveis CSS, Grid, Flexbox, `@keyframes`, `position: sticky`, temas com `data-theme` |
| **JavaScript ES6+** | IntersectionObserver, Web Speech API, SVG DOM, `localStorage`, `requestAnimationFrame` |
| **SVG inline** | Todos os jogos, easter egg, mapa do Paraná e animações desenhados em SVG puro |
| **Google Fonts** | Chivo, Plus Jakarta Sans, JetBrains Mono, Material Symbols Outlined |

---

## 📚 Fontes e Referências

| Fonte | Uso |
|---|---|
| [Embrapa](https://www.embrapa.br) | Dados sobre produção agrícola e preservação ambiental |
| [IBGE](https://www.ibge.gov.br) | Indicadores do PIB agropecuário |
| [Cepea/USP](https://cepea.org.br) | PIB do agronegócio brasileiro |
| [IDR-Paraná](https://www.idrparana.pr.gov.br) | Dados regionais e tecnologia agrícola |
| [AEN — Governo do Paraná](https://www.parana.pr.gov.br/aen) | Fotografias CC0 da galeria |
| [Unsplash](https://unsplash.com) | Imagens ilustrativas do artigo |
| [FAEP Agrinho](https://www.sistemafaep.org.br/agrinho/) | Programa do projeto |

---

## 🎨 Paleta de Cores

```
Verde Nobre    #0d2b22   ████  Fundo hero, cards escuros, botões
Ciano Tech     #00e5c3   ████  Acentos, bordas, glows interativos
Dourado Fosco  #c8a84b   ████  Labels, citações, destaques
Creme Papel    #f4f1eb   ████  Fundo claro da página
Verde Médio    #1d5c3e   ████  Valores numéricos, títulos
```

---

## 🔐 Licenças de Imagens

Todas as fotografias da seção **Galeria Paranaense** são de autoria da **Agência de Notícias do Estado do Paraná (AEN)**, licenciadas sob **Creative Commons CC0 (Domínio Público)** — uso livre para fins educativos, jornalísticos ou comerciais, sem necessidade de autorização prévia.

As imagens da seção de artigo são provenientes do **Unsplash**, sob licença gratuita para uso não comercial e educacional.

---

<div align="center">

Desenvolvido com 🌿 para o **Projeto Agrinho 2026** — Paraná, Brasil

*Campo + Tecnologia + Sustentabilidade = Futuro*

*Observe com atenção — há segredos escondidos esperando por você.*

</div>
