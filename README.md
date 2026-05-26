##                                    🍂 FOLHA VIRTUAL ROBÔ 🍂
<div align="center">

> *"O agro brasileiro alimenta o mundo enquanto preserva mais de 60% de sua vegetação nativa."*
> — CNA Brasil

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/SVG)

</div>

---

## 📖 Sobre o Projeto

Site editorial desenvolvido para o **Projeto Agrinho**, abordando a sustentabilidade no agronegócio brasileiro através de três pilares fundamentais: ambiental, social e econômico.

O projeto foi construído com design inspirado em **revistas de alto padrão** — tipografia elegante, paleta de verdes nobres e dourado fosco — aliado a recursos interativos modernos de acessibilidade e gamificação.

---

## ✨ Funcionalidades

### 🎨 Design & Interface
- Layout editorial estilo revista com hero em tela cheia
- Tipografia premium com **Playfair Display** (serifada) e **Lato** (sans-serif)
- Paleta de cores: verde nobre `#1a3c34`, dourado `#c5a059` e creme `#f9f7f2`
- Animações suaves de entrada com **Scroll Reveal** (IntersectionObserver)
- Navegação rápida por âncoras:  `🌲 Paraná `. `📖 LER` · `🌱 JOGO` · `🔍  SABER MAIS`

### ♿ Acessibilidade
- **Modo Escuro** — alterna toda a paleta com transição suave; preferência salva no `localStorage`
- **Leitura em Voz Alta** — narra o conteúdo em português via Web Speech API; destaca o parágrafo atual e exibe barra de progresso
- Menu flutuante acessível com `aria-label`, `aria-expanded` e `aria-pressed`

### 🌱 Jogo — Plante sua Árvore
Clicker interativo desenhado inteiramente em **SVG**, com 4 fases progressivas:

| Fase | Ação | Cliques |
|------|------|---------|
| 🌰 Semente | Plantar no solo | 2 |
| 🌱 Broto | Regar | 50 |
| 🍁 Muda | Adubar | 50 |
| 🌳 Árvore | Crescer | 100 |

### 🌍 Jogo 2 — O Destino do Planeta

> *Cada escolha tem consequências. O futuro é seu.*

```
              MELHORAR PLANETA (+100 pts)
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
   [0 – 499 pts]              [500 – 999 pts]
   Planeta Neutro              Planeta Florescendo
   Continentes normais         Verde exuberante 🌿
          │                         │
          ▼                         ▼
   [500 pts piorar]           [1000 pts melhorar]
   Planeta Poluído            🏆 VITÓRIA — Planeta Vivo
   Prédios + fumaça           Florestas e esperança
          │
          ▼
   [1000 pts piorar]
   💀 DERROTA — Planeta Morto
   Desertos e cinzas
```

**5 estados visuais do planeta SVG:**
`Neutro` → `Verde` → `Poluído` → `Morto` → `Misto`
Cada fase inclui partículas animadas, barra de progresso, mensagem de conclusão e linha do tempo visual.

### 🕵️ Jogo Secreto 🕵️

 Feito ainda por **SVG**, mas precisa descobrir como achar esse jogo tentando interagir mais.
 
### 📱 Responsividade Total

| Dispositivo | Breakpoint | Adaptações |
|---|---|---|
| 📱 Celular | até 480px | Layout em coluna única, fontes compactas, parallax desativado |
| 📟 Tablet | 481px – 900px | Artigo centralizado, card estático, espaçamentos médios |
| 🖥 Desktop | 901px – 1400px | Layout padrão duas colunas, card sticky |
| 📺 TV / 4K | 1401px+ | Fonte 7rem no título, artigo até 1400px, tudo espaçoso |

---

## 🗂 Estrutura de Arquivos

```
agrinho-sustentabilidade/
│
├── index.html                          # Estrutura principal
├── style.css                           # Estilos, temas e responsividade
├── script.js                           # Interatividade e lógica dos jogos
│
├── premium_photo-1661963447711-...avif  # Imagem: plantação
├── photo-1563201515-adbe35c669c5.avif   # Imagem: economia
└── premium_photo-1664527305901-...avif  # Imagem: trator no campo
```

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica com tags `<header>`, `<main>`, `<section>`, `<footer>` |
| **CSS3** | Variáveis CSS, Grid, Flexbox, animações `@keyframes`, `position: sticky` |
| **JavaScript ES6+** | IntersectionObserver, Web Speech API, SVG DOM, localStorage |
| **SVG** | Todos os desenhos do jogo e easter egg (planta, regador, árvore, cena) |
| **Google Fonts** | Playfair Display, Lato, Material Symbols Outlined |

---

## 📚 Fontes & Referências

- [Imagens Unsplash]
- [Embrapa Meio Ambiente]
- [Cepea/USP]
- Dados: IBGE · CNA Brasil · Ministério da Agricultura · FGV

---

## 🎨 Paleta de Cores

```
Verde Nobre   #1a3c34   ████  Fundo do hero e cards
Verde Médio   #2F4F4F   ████  Títulos e destaques
Verde Botão   #556B2F   ████  Footer e hover
Ouro Velho    #c5a059   ████  Acentos e destaques dourados
Creme Papel   #f9f7f2   ████  Fundo claro da página
```

---

<div align="center">

Desenvolvido com 🌿 para o **Projeto Agrinho**

*Obeserve com atenção, segredos no ar. Conciliando tradição do campo com tecnologia e preservação.*

</div>
