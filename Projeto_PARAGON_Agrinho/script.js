document.addEventListener('DOMContentLoaded', () => {

    /* ════════════════════════════════════════
       SCROLL REVEAL
    ════════════════════════════════════════ */
    const elementos = document.querySelectorAll('.topico, .card-citacao, .btn-gourmet');

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observador.observe(el);
    });

    // Scroll suave para todos os links internos (#)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const alvo = document.querySelector(this.getAttribute('href'));
            if (alvo) {
                e.preventDefault();
                alvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ════════════════════════════════════════
       EASTER EGG — PLANTINHA
    ════════════════════════════════════════ */
    const eggWrap    = document.getElementById('egg-wrap');
    const eggRegador = document.getElementById('egg-regador');
    const eggGotas   = document.getElementById('egg-gotas');
    const eggBalao   = document.getElementById('egg-balao');

    const frases = [
        "você já regou a planta 1 vez 💧",
        "você já regou a planta 2 vezes 💧",
        "você já regou a planta 3 vezes 🌱",
        "você já regou a planta 4 vezes 💧",
        "você já regou a planta 5 vezes 🌿",
        "você já regou a planta 6 vezes 💧",
        "você já regou a planta 7 vezes 🌱",
        "você já regou a planta 8 vezes 💧",
        "você já regou a planta 9 vezes 🌿",
        "você já regou a planta 10 vezes 🎉",
        "você já regou a planta 11 vezes 💧",
        "você já regou a planta 12 vezes 🌱",
        "você já regou a planta 13 vezes 💧",
        "você já regou a planta 14 vezes 🌿",
        "você já regou a planta 15 vezes ✨",
        "você já regou a planta 16 vezes 💧",
        "você já regou a planta 17 vezes 🌱",
        "você já regou a planta 18 vezes 💧",
        "você já regou a planta 19 vezes 🌿",
        "você já regou a planta 20 vezes 🎊",
        "você já regou a planta 21 vezes 💧",
        "você já regou a planta 22 vezes 🌱",
        "você já regou a planta 23 vezes 💧",
        "você já regou a planta 24 vezes 🌿",
        "você já regou a planta 25 vezes 🌻",
        "você já regou a planta 26 vezes 💧",
        "você já regou a planta 27 vezes 🌱",
        "você já regou a planta 28 vezes 💧",
        "você já regou a planta 29 vezes 🌿",
        "você já regou a planta 30 vezes 🎉",
        "você já regou a planta 31 vezes 💧",
        "você já regou a planta 32 vezes 🌱",
        "você já regou a planta 33 vezes 💧",
        "você já regou a planta 34 vezes 🌿",
        "você já regou a planta 35 vezes 🌳",
        "você já regou a planta 36 vezes 💧",
        "você já regou a planta 37 vezes 🌱",
        "você já regou a planta 38 vezes 💧",
        "você já regou a planta 39 vezes 🌿",
        "você já regou a planta 40 vezes ✨",
        "você já regou a planta 41 vezes 💧",
        "você já regou a planta 42 vezes 🌱",
        "você já regou a planta 43 vezes 💧",
        "você já regou a planta 44 vezes 🌿",
        "você já regou a planta 45 vezes 🌻",
        "você já regou a planta 46 vezes 💧",
        "você já regou a planta 47 vezes 🌱",
        "você já regou a planta 48 vezes 💧",
        "você já regou a planta 49 vezes 🌿",
        "você já regou a planta 50 vezes 🏆 metade lá!",
        "você já regou a planta 51 vezes 💧",
        "você já regou a planta 52 vezes 🌱",
        "você já regou a planta 53 vezes 💧",
        "você já regou a planta 54 vezes 🌿",
        "você já regou a planta 55 vezes ✨",
        "você já regou a planta 56 vezes 💧",
        "você já regou a planta 57 vezes 🌱",
        "você já regou a planta 58 vezes 💧",
        "você já regou a planta 59 vezes 🌿",
        "você já regou a planta 60 vezes 🎊",
        "você já regou a planta 61 vezes 💧",
        "você já regou a planta 62 vezes 🌱",
        "você já regou a planta 63 vezes 💧",
        "você já regou a planta 64 vezes 🌿",
        "você já regou a planta 65 vezes 🌳",
        "você já regou a planta 66 vezes 💧",
        "você já regou a planta 67 vezes 🌱",
        "você já regou a planta 68 vezes 💧",
        "você já regou a planta 69 vezes 🌿",
        "você já regou a planta 70 vezes ✨",
        "você já regou a planta 71 vezes 💧",
        "você já regou a planta 72 vezes 🌱",
        "você já regou a planta 73 vezes 💧",
        "você já regou a planta 74 vezes 🌿",
        "você já regou a planta 75 vezes 🌻 quase lá!",
        "você já regou a planta 76 vezes 💧",
        "você já regou a planta 77 vezes 🌱",
        "você já regou a planta 78 vezes 💧",
        "você já regou a planta 79 vezes 🌿",
        "você já regou a planta 80 vezes 🎉",
        "você já regou a planta 81 vezes 💧",
        "você já regou a planta 82 vezes 🌱",
        "você já regou a planta 83 vezes 💧",
        "você já regou a planta 84 vezes 🌿",
        "você já regou a planta 85 vezes 🌳",
        "você já regou a planta 86 vezes 💧",
        "você já regou a planta 87 vezes 🌱",
        "você já regou a planta 88 vezes 💧",
        "você já regou a planta 89 vezes 🌿",
        "você já regou a planta 90 vezes ✨ só mais 10!",
        "você já regou a planta 91 vezes 💧",
        "você já regou a planta 92 vezes 🌱",
        "você já regou a planta 93 vezes 💧",
        "você já regou a planta 94 vezes 🌿",
        "você já regou a planta 95 vezes 🌻",
        "você já regou a planta 96 vezes 💧",
        "você já regou a planta 97 vezes 🌱",
        "você já regou a planta 98 vezes 💧",
        "você já regou a planta 99 vezes 🌿 última chance!",
        "🌳 100 vezes! Você é um jardineiro incrível! 🏆",
    ];

    let eggCount    = 0;
    let eggAnimando = false;
    let eggTimer    = null;

    if (eggWrap) {
        eggWrap.addEventListener('click', () => {
            if (eggAnimando) return;
            if (eggCount >= 100) return;

            eggAnimando = true;

            // Mostra regador
            eggRegador.style.opacity = '1';
            eggRegador.classList.remove('egg-regador-sai');
            eggRegador.classList.add('egg-regador-entra');

            // Mostra gotas após 300ms
            setTimeout(() => {
                eggGotas.setAttribute('opacity', '1');
                eggGotas.classList.add('egg-gotas-anim');

                // Balão de fala
                eggBalao.textContent = frases[eggCount];
                eggBalao.classList.add('visivel');
                eggCount++;

                // Ao chegar em 100 — revela o jogo secreto!
                if (eggCount === 100) {
                    setTimeout(() => {
                        const secao = document.getElementById('jogo-secreto');
                        if (secao && secao.style.display === 'none') {
                            secao.style.display = '';
                            secao.classList.add('revelada');
                            setTimeout(() => secao.scrollIntoView({ behavior: 'smooth', block: 'start' }), 800);
                        }
                    }, 1800);
                }

                // Esconde gotas e regador
                setTimeout(() => {
                    eggGotas.setAttribute('opacity', '0');
                    eggGotas.classList.remove('egg-gotas-anim');

                    eggRegador.classList.remove('egg-regador-entra');
                    eggRegador.classList.add('egg-regador-sai');

                    setTimeout(() => {
                        eggRegador.style.opacity = '0';
                        eggAnimando = false;
                    }, 400);

                    // Esconde balão depois de 2.5s
                    clearTimeout(eggTimer);
                    eggTimer = setTimeout(() => {
                        eggBalao.classList.remove('visivel');
                    }, 2500);

                }, 600);
            }, 300);
        });
    }

    /* ════════════════════════════════════════
       MENU DE ACESSIBILIDADE
    ════════════════════════════════════════ */
    const html      = document.documentElement;
    const trigger   = document.getElementById('acc-trigger');
    const panel     = document.getElementById('acc-panel');
    const btnDark   = document.getElementById('btn-dark');
    const darkStatus= document.getElementById('dark-status');
    const btnRead   = document.getElementById('btn-read');
    const readStatus= document.getElementById('read-status');
    const readProg  = document.getElementById('read-progress');
    const readBar   = document.getElementById('read-bar');

    // ── Abrir / fechar painel ──
    let menuOpen = false;

    trigger.addEventListener('click', () => {
        menuOpen = !menuOpen;
        panel.classList.toggle('open', menuOpen);
        trigger.setAttribute('aria-expanded', menuOpen);
        panel.setAttribute('aria-hidden', !menuOpen);
    });

    document.addEventListener('click', e => {
        if (!document.getElementById('acc-menu').contains(e.target) && menuOpen) {
            menuOpen = false;
            panel.classList.remove('open');
            trigger.setAttribute('aria-expanded', false);
            panel.setAttribute('aria-hidden', true);
        }
    });

    /* ════════════════════════════════════════
       TEXTO GRANDE
    ════════════════════════════════════════ */
    const btnFonte    = document.getElementById('btn-fonte');
    const fonteStatus = document.getElementById('fonte-status');
    const FONTE_KEY   = 'agrinho-texto-grande';

    function aplicarFonteGrande(ativo) {
        document.body.classList.toggle('texto-grande', ativo);
        btnFonte.classList.toggle('active', ativo);
        btnFonte.setAttribute('aria-pressed', ativo);
        fonteStatus.textContent = ativo ? 'Ativado' : 'Desativado';
        localStorage.setItem(FONTE_KEY, ativo ? '1' : '0');
    }

    aplicarFonteGrande(localStorage.getItem(FONTE_KEY) === '1');

    btnFonte.addEventListener('click', () => {
        aplicarFonteGrande(!document.body.classList.contains('texto-grande'));
    });

    /* ════════════════════════════════════════
       MODO ESCURO
    ════════════════════════════════════════ */
    const DARK_KEY = 'agrinho-dark-mode';

    function aplicarDark(ativo) {
        html.setAttribute('data-theme', ativo ? 'dark' : 'light');
        btnDark.classList.toggle('active', ativo);
        btnDark.setAttribute('aria-pressed', ativo);
        darkStatus.textContent = ativo ? 'Ativado' : 'Desativado';
        localStorage.setItem(DARK_KEY, ativo ? '1' : '0');
    }

    // Restaura preferência salva
    aplicarDark(localStorage.getItem(DARK_KEY) === '1');

    btnDark.addEventListener('click', () => {
        aplicarDark(html.getAttribute('data-theme') !== 'dark');
    });

    /* ════════════════════════════════════════
       LEITURA EM VOZ ALTA
    ════════════════════════════════════════ */
    const synth = window.speechSynthesis;

    if (!synth) {
        btnRead.disabled = true;
        readStatus.textContent = 'Não suportado';
        return;
    }

    let speaking = false;
    let nodes    = [];

    function getNodes() {
        const container = document.getElementById('conteudo') || document.body;
        return Array.from(
            container.querySelectorAll('h2, h3, p, li, cite')
        ).filter(el => el.textContent.trim().length > 0);
    }

    function limparDestaque() {
        nodes.forEach(n => n.classList.remove('reading-highlight'));
    }

    function iniciarLeitura() {
        synth.cancel();
        nodes = getNodes();
        if (!nodes.length) return;

        speaking = true;
        setEstadoLeitura(true);

        nodes.forEach((node, i) => {
            const u = new SpeechSynthesisUtterance(node.textContent.trim());
            u.lang  = 'pt-BR';
            u.rate  = 1;
            u.pitch = 1;

            u.onstart = () => {
                limparDestaque();
                node.classList.add('reading-highlight');
                node.scrollIntoView({ behavior: 'smooth', block: 'center' });
                readBar.style.width = ((i / nodes.length) * 100) + '%';
            };

            u.onend = () => {
                if (i === nodes.length - 1) pararLeitura();
            };

            synth.speak(u);
        });
    }

    function pararLeitura() {
        synth.cancel();
        limparDestaque();
        speaking = false;
        setEstadoLeitura(false);
        readBar.style.width = '0%';
    }

    function setEstadoLeitura(ativo) {
        btnRead.classList.toggle('speaking', ativo);
        btnRead.setAttribute('aria-pressed', ativo);
        readProg.classList.toggle('visible', ativo);
        readStatus.textContent = ativo ? 'Lendo…' : 'Parado';
    }

    btnRead.addEventListener('click', () => {
        if (!speaking) {
            iniciarLeitura();
        } else if (synth.paused) {
            synth.resume();
            readStatus.textContent = 'Lendo…';
        } else {
            synth.pause();
            readStatus.textContent = 'Pausado';
        }
    });

    // Pausa ao esconder a aba
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && speaking) synth.pause();
    });

    /* ════════════════════════════════════════
       JOGO — PLANTE SUA ÁRVORE
    ════════════════════════════════════════ */
    const FASES = [
        { meta: 2,   nome: "🌍 Fase 1 — Plantar a Semente",  icone: "🌾", texto: "Clique para plantar!",  msg: "🌰 Semente plantada!"      },
        { meta: 50,  nome: "💧 Fase 2 — Regar o Broto",      icone: "💧", texto: "Clique para regar!",    msg: "🌱 Broto crescendo!"        },
        { meta: 50,  nome: "🌿 Fase 3 — Adubar a Muda",      icone: "🌿", texto: "Clique para adubar!",   msg: "🪴 Muda se desenvolvendo!"  },
        { meta: 100, nome: "☀️ Fase 4 — Crescer a Árvore",   icone: "☀️", texto: "Clique para crescer!",  msg: "🌳 Árvore plantada!"        },
    ];

    let faseAtual = 0;
    let cliques   = 0;

    const btnJogo      = document.getElementById('jogo-btn');
    const jogoMsg      = document.getElementById('jogo-msg');
    const jogoBarra    = document.getElementById('jogo-barra');
    const jogoCount    = document.getElementById('jogo-contagem');
    const jogoFase     = document.getElementById('jogo-fase-nome');
    const particulasG  = document.getElementById('particulas');

    const svgFases = {
        0: document.getElementById('fase-0'),
        1: document.getElementById('fase-1'),
        2: document.getElementById('fase-2'),
        3: document.getElementById('fase-3'),
        4: document.getElementById('fase-4'),
    };

    function mostrarFaseSVG(n) {
        Object.values(svgFases).forEach(g => { if (g) g.setAttribute('display', 'none'); });
        if (svgFases[n]) svgFases[n].setAttribute('display', '');
    }

    function atualizarTimeline(fase) {
        for (let i = 0; i <= 4; i++) {
            const b = document.querySelector(`#tl-${i} .fase-bolinha`);
            if (!b) continue;
            b.classList.remove('ativa', 'concluida');
            if (i < fase)       b.classList.add('concluida');
            else if (i === fase) b.classList.add('ativa');
        }
    }

    function mostrarMensagem(texto) {
        jogoMsg.textContent = texto;
        jogoMsg.classList.add('visivel');
        setTimeout(() => jogoMsg.classList.remove('visivel'), 2200);
    }

    function spawnParticula(emoji) {
        const x   = 160 + Math.random() * 80;
        const y   = 170 + Math.random() * 40;
        const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        txt.setAttribute('x', x);
        txt.setAttribute('y', y);
        txt.setAttribute('font-size', '20');
        txt.setAttribute('opacity', '1');
        txt.textContent = emoji;
        particulasG.appendChild(txt);
        let vy = -1.5 - Math.random() * 2;
        let op = 1;
        const tick = setInterval(() => {
            const cy = parseFloat(txt.getAttribute('y')) + vy;
            op -= 0.035;
            txt.setAttribute('y', cy);
            txt.setAttribute('opacity', op);
            if (op <= 0) { clearInterval(tick); txt.remove(); }
        }, 30);
    }

    function cliqueJogo() {
        if (faseAtual >= FASES.length) return;
        const fase = FASES[faseAtual];
        cliques++;

        const pct = Math.min((cliques / fase.meta) * 100, 100);
        jogoBarra.style.width  = pct + '%';
        jogoCount.textContent  = `${cliques} / ${fase.meta} cliques`;

        const emojis = ['💧','🌿','✨','🌱','☀️','🌾'];
        spawnParticula(emojis[Math.floor(Math.random() * emojis.length)]);

        if (cliques >= fase.meta) {
            cliques   = 0;
            faseAtual++;
            mostrarFaseSVG(faseAtual);
            atualizarTimeline(faseAtual);
            mostrarMensagem(fase.msg);

            if (faseAtual < FASES.length) {
                const prox = FASES[faseAtual];
                jogoBarra.style.width  = '0%';
                jogoCount.textContent  = `0 / ${prox.meta} cliques`;
                jogoFase.textContent   = prox.nome;
                document.getElementById('jogo-btn-icone').textContent = prox.icone;
                document.getElementById('jogo-btn-texto').textContent = prox.texto;
            } else {
                jogoFase.textContent   = '🎉 Parabéns! Sua árvore está plantada!';
                jogoBarra.style.width  = '100%';
                jogoCount.textContent  = 'Completo! ✅';
                btnJogo.innerHTML      = '🌳 Árvore plantada!';
                btnJogo.disabled       = true;
                atualizarTimeline(4);
            }
        }
    }

    if (btnJogo) {
        btnJogo.addEventListener('click', cliqueJogo);
        mostrarFaseSVG(0);
        atualizarTimeline(0);
    }

    /* ════════════════════════════════════════
       JOGO SECRETO — COLETA DE MAÇÃS
       (revelado ao regar 100x a plantinha)
    ════════════════════════════════════════ */

    // ── Revelar seção ao completar easter egg ──
    function revelarJogoSecreto() {
        const secao = document.getElementById('jogo-secreto');
        if (!secao || secao.style.display !== 'none') return;
        secao.style.display = '';
        secao.classList.add('revelada');
        setTimeout(() => {
            secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
    }

    // ── Estado do jogo de maçãs ──
    const MACA_TOTAL   = 50;
    const MACA_VIDAS   = 3;
    const SVG_W        = 400;
    const SVG_H        = 320;

    let macaRodando    = false;
    let macaColetadas  = 0;
    let macaVidas      = MACA_VIDAS;
    let macaLoop       = null;
    let macaLista      = [];   // { el, x, y, vy, id }
    let cestaX         = 160;  // translate X da cesta
    let cestaAlvo      = 160;
    let macaSpawnTimer = 0;
    let macaSpawnRate  = 120;  // frames entre spawns (diminui com tempo)
    let macaFrame      = 0;
    let macaSpawnadas  = 0;

    const macaSvg      = document.getElementById('maca-svg');
    const macaGrupo    = document.getElementById('maca-macas');
    const cestaEl      = document.getElementById('maca-cesta');
    const personagemEl = document.getElementById('maca-personagem');
    const macaDentroEl = document.getElementById('maca-dentro');
    const macaOverlay  = document.getElementById('maca-overlay');
    const macaOverlayBox = document.getElementById('maca-overlay-box');
    const macaPlacar   = document.getElementById('maca-placar');
    const macaVidasEl  = document.getElementById('maca-vidas');
    const macaBtnIniciar = document.getElementById('maca-btn-iniciar');
    const macaCena     = document.getElementById('maca-cena');
    const macaInstrucao = document.getElementById('maca-instrucao');

    // Converte posição do mouse/touch para coordenadas SVG
    function posParaSVG(clientX) {
        if (!macaSvg) return cestaX;
        const rect  = macaSvg.getBoundingClientRect();
        const ratio = SVG_W / rect.width;
        return (clientX - rect.left) * ratio;
    }

    // Move cesta e personagem
    function moverCesta(svgX) {
        // Centro da cesta fica em svgX; largura da cesta = 80
        cestaAlvo = Math.max(0, Math.min(SVG_W - 80, svgX - 40));
    }

    // Escuta mouse e touch sobre toda a cena
    if (macaCena) {
        macaCena.addEventListener('mousemove', e => {
            if (!macaRodando) return;
            moverCesta(posParaSVG(e.clientX));
        });
        macaCena.addEventListener('touchmove', e => {
            if (!macaRodando) return;
            e.preventDefault();
            moverCesta(posParaSVG(e.touches[0].clientX));
        }, { passive: false });
    }

    // Spawn de uma maçã
    let macaIdCounter = 0;
    function spawnMaca() {
        if (!macaGrupo) return;
        const id  = 'mc' + (macaIdCounter++);
        const x   = 40 + Math.random() * (SVG_W - 80);
        const vy  = 1.4 + Math.random() * 1.2 + macaFrame / 3000;

        const g   = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', id);
        g.setAttribute('class', 'maca-item');

        // Corpo da maçã
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('r', '10');
        c.setAttribute('fill', 'url(#maca-grad)');

        // Reflexo
        const r = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        r.setAttribute('cx', '-3'); r.setAttribute('cy', '-4');
        r.setAttribute('rx', '3.5'); r.setAttribute('ry', '2.5');
        r.setAttribute('fill', 'rgba(255,255,255,0.4)');

        // Cabinho
        const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        l.setAttribute('x1', '2'); l.setAttribute('y1', '-10');
        l.setAttribute('x2', '4'); l.setAttribute('y2', '-16');
        l.setAttribute('stroke', '#4caf50'); l.setAttribute('stroke-width', '2');
        l.setAttribute('stroke-linecap', 'round');

        // Folhinha
        const f = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        f.setAttribute('cx', '7'); f.setAttribute('cy', '-16');
        f.setAttribute('rx', '5'); f.setAttribute('ry', '3');
        f.setAttribute('fill', '#66bb6a');
        f.setAttribute('transform', 'rotate(-30 7 -16)');

        g.appendChild(l); g.appendChild(f); g.appendChild(c); g.appendChild(r);
        g.setAttribute('transform', `translate(${x}, 20)`);
        macaGrupo.appendChild(g);

        macaLista.push({ id, el: g, x, y: 20, vy });
        macaSpawnadas++;
    }

    // Atualiza placar
    function atualizarPlacar() {
        if (macaPlacar) macaPlacar.textContent = `🍎 ${macaColetadas} / ${MACA_TOTAL} maçãs`;
        const corações = '❤️'.repeat(macaVidas) + '🖤'.repeat(MACA_VIDAS - macaVidas);
        if (macaVidasEl) macaVidasEl.textContent = corações + ` ${macaVidas} ${macaVidas === 1 ? 'vida' : 'vidas'}`;
    }

    // Maçãs na cesta (visual)
    function adicionarMacaNaCesta() {
        if (!macaDentroEl) return;
        const cols  = [18, 30, 42, 54, 24, 36, 48];
        const rows  = [270, 262, 270];
        const idx   = macaColetadas - 1;
        const cx    = cols[idx % cols.length];
        const cy    = rows[Math.floor(idx / cols.length) % rows.length];
        const c     = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', '5');
        c.setAttribute('fill', '#e53935');
        macaDentroEl.setAttribute('opacity', '1');
        macaDentroEl.appendChild(c);
    }

    // Mostrar overlay
    function mostrarOverlay(vitoria) {
        macaRodando = false;
        cancelAnimationFrame(macaLoop);
        macaLista.forEach(m => m.el.remove());
        macaLista = [];

        if (!macaOverlay || !macaOverlayBox) return;

        if (vitoria) {
            macaOverlayBox.innerHTML = `
                <span class="overlay-emoji">🏆</span>
                <div class="overlay-titulo">Colheita Completa!</div>
                <div class="overlay-msg">Você coletou todas as 50 maçãs!</div>
                <div class="overlay-final-msg">
                    Parabéns meu<br>
                    <strong>AGRICULTOR FABULOSO</strong><br>
                    você finalmente testou toda a nossa aventura juntos! 🌿
                </div>
            `;
        } else {
            macaOverlayBox.innerHTML = `
                <span class="overlay-emoji">😢</span>
                <div class="overlay-titulo">Colheita perdida!</div>
                <div class="overlay-msg">Você coletou ${macaColetadas} de ${MACA_TOTAL} maçãs.<br>Tente de novo!</div>
                <button class="overlay-btn" id="overlay-retry">🍎 Tentar Novamente</button>
            `;
            setTimeout(() => {
                const btn = document.getElementById('overlay-retry');
                if (btn) btn.addEventListener('click', () => {
                    macaOverlay.style.display = 'none';
                    iniciarJogoMaca();
                });
            }, 50);
        }

        macaOverlay.style.display = 'flex';
    }

    // Loop principal do jogo
    function loopMaca() {
        if (!macaRodando) return;
        macaFrame++;

        // Suavizar movimento da cesta
        cestaX += (cestaAlvo - cestaX) * 0.18;
        if (cestaEl)      cestaEl.setAttribute('transform',      `translate(${cestaX},0)`);
        if (personagemEl) personagemEl.setAttribute('transform', `translate(${cestaX},0)`);

        // Spawn de novas maçãs
        macaSpawnTimer++;
        const totalSpawnadas = macaColetadas + macaLista.length;
        if (macaSpawnTimer >= macaSpawnRate && totalSpawnadas < MACA_TOTAL) {
            macaSpawnTimer = 0;
            macaSpawnRate  = Math.max(45, 120 - macaFrame / 60);
            spawnMaca();
        }

        // Mover maçãs
        const cestaLeft  = cestaX + 8;
        const cestaRight = cestaX + 72;
        const cestaTop   = 253; // topo da borda da cesta em coords SVG

        for (let i = macaLista.length - 1; i >= 0; i--) {
            const m = macaLista[i];
            m.y += m.vy;
            m.el.setAttribute('transform', `translate(${m.x},${m.y})`);

            // Coletou na cesta?
            if (m.y + 10 >= cestaTop && m.y - 10 < cestaTop + 30 &&
                m.x >= cestaLeft && m.x <= cestaRight) {
                m.el.remove();
                macaLista.splice(i, 1);
                macaColetadas++;
                adicionarMacaNaCesta();
                atualizarPlacar();
                if (macaColetadas >= MACA_TOTAL) { mostrarOverlay(true); return; }
                continue;
            }

            // Caiu no chão?
            if (m.y > SVG_H + 20) {
                m.el.remove();
                macaLista.splice(i, 1);
                macaVidas--;
                atualizarPlacar();
                if (macaVidas <= 0) { mostrarOverlay(false); return; }
            }
        }

        macaLoop = requestAnimationFrame(loopMaca);
    }

    // Iniciar jogo
    function iniciarJogoMaca() {
        macaColetadas  = 0;
        macaVidas      = MACA_VIDAS;
        macaFrame      = 0;
        macaSpawnTimer = 0;
        macaSpawnRate  = 120;
        macaLista      = [];
        cestaX         = 160;
        cestaAlvo      = 160;
        macaIdCounter  = 0;

        if (macaGrupo)   macaGrupo.innerHTML   = '';
        if (macaDentroEl) { macaDentroEl.innerHTML = ''; macaDentroEl.setAttribute('opacity','0'); }
        if (cestaEl)     cestaEl.setAttribute('transform', 'translate(160,0)');
        if (personagemEl) personagemEl.setAttribute('transform', 'translate(160,0)');
        if (macaOverlay) macaOverlay.style.display = 'none';
        if (macaInstrucao) setTimeout(() => { macaInstrucao.style.opacity = '0'; }, 3000);

        atualizarPlacar();
        macaRodando = true;
        macaLoop = requestAnimationFrame(loopMaca);

        if (macaBtnIniciar) macaBtnIniciar.disabled = true;
    }

    if (macaBtnIniciar) {
        macaBtnIniciar.addEventListener('click', iniciarJogoMaca);
    }

});