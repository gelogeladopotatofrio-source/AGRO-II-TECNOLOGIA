document.addEventListener('DOMContentLoaded', () => {

    /* ════════════════════════════════════════
       SCROLL REVEAL — anima elementos ao entrar na tela
    ════════════════════════════════════════ */
    const elementos = document.querySelectorAll('.topico, .btn-gourmet');

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
        link.addEventListener('click', function (e) {
            const alvo = document.querySelector(this.getAttribute('href'));
            if (alvo) {
                e.preventDefault();
                alvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ════════════════════════════════════════
       BRASIL EM NÚMEROS — clique para revelar quantidade
       Cada item da lista mostra o número real ao clicar
    ════════════════════════════════════════ */
    const itensClicaveis = document.querySelectorAll('.dado-clicavel');

    itensClicaveis.forEach(item => {
        const quantidadeEl = item.querySelector('.dado-quantidade');

        item.addEventListener('click', () => {
            const jaAtivo = item.classList.contains('ativo');

            // Fecha todos os outros antes de abrir o clicado
            itensClicaveis.forEach(outro => {
                if (outro !== item) {
                    outro.classList.remove('ativo');
                    const q = outro.querySelector('.dado-quantidade');
                    if (q) q.textContent = '';
                }
            });

            if (jaAtivo) {
                // Segundo clique = fecha
                item.classList.remove('ativo');
                if (quantidadeEl) quantidadeEl.textContent = '';
            } else {
                // Primeiro clique = abre e mostra número
                item.classList.add('ativo');
                if (quantidadeEl) quantidadeEl.textContent = item.dataset.numero;
            }
        });
    });

    /* ════════════════════════════════════════
       EASTER EGG — PLANTINHA (regador)
       Clique 100x para desbloquear jogo secreto
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
                                "você já regou a planta 25 vezes você está na metade!🌻",
                                "você já regou a planta 26 vezes 💧",
                                "você já regou a planta 27 vezes 🌱",
                                "você já regou a planta 28 vezes 💧",
                                "você já regou a planta 29 vezes 🌿",
                                "você já regou a planta 30 vezes 🎉",
                                "você já regou a planta 31 vezes 💧",
                                "você já regou a planta 32 vezes 🌱",
                                "você já regou a planta 33 vezes 💧",
                                "você já regou a planta 34 vezes 🌿",
                                "você já regou a planta 35 vezes quase lá! 🌳",
                                "você já regou a planta 36 vezes 💧",
                                "você já regou a planta 37 vezes 🌱",
                                "você já regou a planta 38 vezes 💧",
                                "você já regou a planta 39 vezes 🌿",
                                "você já regou a planta 40 vezes só mais 10!✨",
                                "você já regou a planta 41 vezes 💧",
                                "você já regou a planta 42 vezes 🌱",
                                "você já regou a planta 43 vezes 💧",
                                "você já regou a planta 44 vezes 🌿",
                                "você já regou a planta 45 vezes 🌻",
                                "você já regou a planta 46 vezes 💧",
                                "você já regou a planta 47 vezes 🌱",
                                "você já regou a planta 48 vezes 💧",
                                "você já regou a planta 49 vezes 🌿",
                                "🌳 50 vezes! Você é um jardineiro incrível! 🏆",
    ];

    let eggCount    = 0;
    let eggAnimando = false;
    let eggTimer    = null;

    // Revela o jogo secreto ao regar 50 vezes
    function revelarJogoSecreto() {
        const secao = document.getElementById('jogo-secreto');
        if (!secao || secao.style.display !== 'none') return;
        secao.style.display = '';
        secao.classList.add('revelada');
        setTimeout(() => {
            secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 800);
    }

    if (eggWrap) {
        eggWrap.addEventListener('click', () => {
            if (eggAnimando) return;
            if (eggCount >= 50) return;

            eggAnimando = true;

            eggRegador.style.opacity = '1';
            eggRegador.classList.remove('egg-regador-sai');
            eggRegador.classList.add('egg-regador-entra');

            setTimeout(() => {
                eggGotas.setAttribute('opacity', '1');
                eggGotas.classList.add('egg-gotas-anim');

                eggBalao.textContent = frases[eggCount];
                eggBalao.classList.add('visivel');
                eggCount++;

                if (eggCount === 50) {
                    setTimeout(() => revelarJogoSecreto(), 1800);
                }

                setTimeout(() => {
                    eggGotas.setAttribute('opacity', '0');
                    eggGotas.classList.remove('egg-gotas-anim');

                    eggRegador.classList.remove('egg-regador-entra');
                    eggRegador.classList.add('egg-regador-sai');

                    setTimeout(() => {
                        eggRegador.style.opacity = '0';
                        eggAnimando = false;
                    }, 400);

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
       Botão fixo no canto inferior direito
    ════════════════════════════════════════ */
    const html       = document.documentElement;
    const trigger    = document.getElementById('acc-trigger');
    const panel      = document.getElementById('acc-panel');
    const btnDark    = document.getElementById('btn-dark');
    const darkStatus = document.getElementById('dark-status');
    const btnRead    = document.getElementById('btn-read');
    const readStatus = document.getElementById('read-status');
    const readProg   = document.getElementById('read-progress');
    const readBar    = document.getElementById('read-bar');

    let menuOpen = false;

    if (trigger && panel) {
        trigger.addEventListener('click', () => {
            menuOpen = !menuOpen;
            panel.classList.toggle('open', menuOpen);
            trigger.setAttribute('aria-expanded', menuOpen);
            panel.setAttribute('aria-hidden', !menuOpen);
        });

        document.addEventListener('click', e => {
            const accMenu = document.getElementById('acc-menu');
            if (accMenu && !accMenu.contains(e.target) && menuOpen) {
                menuOpen = false;
                panel.classList.remove('open');
                trigger.setAttribute('aria-expanded', false);
                panel.setAttribute('aria-hidden', true);
            }
        });
    }

    /* ════════════════════════════════════════
       TEXTO GRANDE — acessibilidade
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

    if (btnFonte) {
        aplicarFonteGrande(localStorage.getItem(FONTE_KEY) === '1');
        btnFonte.addEventListener('click', () => {
            aplicarFonteGrande(!document.body.classList.contains('texto-grande'));
        });
    }

    /* ════════════════════════════════════════
       MODO ESCURO — salvo no localStorage
    ════════════════════════════════════════ */
    const DARK_KEY = 'agrinho-dark-mode';

    function aplicarDark(ativo) {
        html.setAttribute('data-theme', ativo ? 'dark' : 'light');
        btnDark.classList.toggle('active', ativo);
        btnDark.setAttribute('aria-pressed', ativo);
        darkStatus.textContent = ativo ? 'Ativado' : 'Desativado';
        localStorage.setItem(DARK_KEY, ativo ? '1' : '0');
    }

    if (btnDark) {
        aplicarDark(localStorage.getItem(DARK_KEY) === '1');
        btnDark.addEventListener('click', () => {
            aplicarDark(html.getAttribute('data-theme') !== 'dark');
        });
    }

    /* ════════════════════════════════════════
       LEITURA EM VOZ ALTA — Web Speech API
    ════════════════════════════════════════ */
    const synth = window.speechSynthesis;

    if (!synth) {
        if (btnRead) {
            btnRead.disabled = true;
            readStatus.textContent = 'Não suportado';
        }
    } else {
        let speaking = false;
        let leituraNodes = [];

        // Exclui elementos das seções de jogo (textos de interface)
        function getNodes() {
            const seletores = 'h1, h2, h3, p, li, cite';
            const excluirSecoes = ['#jogo', '#jogo-secreto', '#jogo-planeta'];
            const excluidos = new Set();

            excluirSecoes.forEach(sel => {
                const secao = document.querySelector(sel);
                if (secao) {
                    secao.querySelectorAll(seletores).forEach(el => excluidos.add(el));
                }
            });

            return Array.from(document.querySelectorAll(seletores)).filter(el =>
                el.textContent.trim().length > 0 && !excluidos.has(el)
            );
        }

        function limparDestaque() {
            leituraNodes.forEach(n => n.classList.remove('reading-highlight'));
        }

        function setEstadoLeitura(ativo) {
            btnRead.classList.toggle('speaking', ativo);
            btnRead.setAttribute('aria-pressed', ativo);
            readProg.classList.toggle('visible', ativo);
            readStatus.textContent = ativo ? 'Lendo…' : 'Parado';
        }

        function pararLeitura() {
            synth.cancel();
            limparDestaque();
            speaking = false;
            setEstadoLeitura(false);
            if (readBar) readBar.style.width = '0%';
        }

        function iniciarLeitura() {
            synth.cancel();
            leituraNodes = getNodes();
            if (!leituraNodes.length) return;

            speaking = true;
            setEstadoLeitura(true);

            leituraNodes.forEach((node, i) => {
                const u = new SpeechSynthesisUtterance(node.textContent.trim());
                u.lang  = 'pt-BR';
                u.rate  = 1;
                u.pitch = 1;

                u.onstart = () => {
                    limparDestaque();
                    node.classList.add('reading-highlight');
                    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    if (readBar) readBar.style.width = (((i + 1) / leituraNodes.length) * 100) + '%';
                };

                u.onend = () => {
                    if (i === leituraNodes.length - 1) pararLeitura();
                };

                u.onerror = () => {
                    if (i === leituraNodes.length - 1) pararLeitura();
                };

                synth.speak(u);
            });
        }

        if (btnRead) {
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
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && speaking) synth.pause();
        });
    }

    /* ════════════════════════════════════════
       JOGO PRINCIPAL — PLANTE SUA ÁRVORE
       4 fases: semente → broto → muda → árvore
    ════════════════════════════════════════ */
    const FASES = [
        { meta: 2,  nome: "🌍 Fase 1 — Plantar a Semente",  icone: "🌾", texto: "Clique para plantar!",  msg: "🌰 Semente plantada!"      },
        { meta: 25, nome: "💧 Fase 2 — Regar o Broto",      icone: "💧", texto: "Clique para regar!",    msg: "🌱 Broto crescendo!"        },
        { meta: 50, nome: "🌿 Fase 3 — Adubar a Muda",      icone: "🌿", texto: "Clique para adubar!",   msg: "🍁 Muda se desenvolvendo!"  },
        { meta: 75, nome: "☀️ Fase 4 — Crescer a Árvore",   icone: "☀️", texto: "Clique para crescer!",  msg: "🌳 Árvore plantada!"        },
    ];
    let faseAtual = 0;
    let cliques   = 0;

    const btnJogo     = document.getElementById('jogo-btn');
    const jogoMsg     = document.getElementById('jogo-msg');
    const jogoBarra   = document.getElementById('jogo-barra');
    const jogoCount   = document.getElementById('jogo-contagem');
    const jogoFase    = document.getElementById('jogo-fase-nome');
    const particulasG = document.getElementById('particulas');

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
            const b = document.querySelector('#tl-' + i + ' .fase-bolinha');
            if (!b) continue;
            b.classList.remove('ativa', 'concluida');
            if (i < fase)        b.classList.add('concluida');
            else if (i === fase) b.classList.add('ativa');
        }
    }

    function mostrarMensagem(texto) {
        if (!jogoMsg) return;
        jogoMsg.textContent = texto;
        jogoMsg.classList.add('visivel');
        setTimeout(() => jogoMsg.classList.remove('visivel'), 2200);
    }

    function spawnParticula(emoji) {
        if (!particulasG) return;
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
            txt.setAttribute('opacity', Math.max(0, op));
            if (op <= 0) { clearInterval(tick); txt.remove(); }
        }, 30);
    }

    function cliqueJogo() {
        if (faseAtual >= FASES.length) return;
        const fase = FASES[faseAtual];
        cliques++;

        const pct = Math.min((cliques / fase.meta) * 100, 100);
        if (jogoBarra)  jogoBarra.style.width = pct + '%';
        if (jogoCount)  jogoCount.textContent = cliques + ' / ' + fase.meta + ' cliques';

        const emojis = ['💧', '🌿', '✨', '🌱', '☀️', '🌾'];
        spawnParticula(emojis[Math.floor(Math.random() * emojis.length)]);

        if (cliques >= fase.meta) {
            cliques   = 0;
            faseAtual++;
            mostrarFaseSVG(faseAtual);
            atualizarTimeline(faseAtual);
            mostrarMensagem(fase.msg);

            if (faseAtual < FASES.length) {
                const prox = FASES[faseAtual];
                if (jogoBarra)  jogoBarra.style.width = '0%';
                if (jogoCount)  jogoCount.textContent = '0 / ' + prox.meta + ' cliques';
                if (jogoFase)   jogoFase.textContent  = prox.nome;
                const iconeEl = document.getElementById('jogo-btn-icone');
                const textoEl = document.getElementById('jogo-btn-texto');
                if (iconeEl) iconeEl.textContent = prox.icone;
                if (textoEl) textoEl.textContent = prox.texto;
            } else {
                if (jogoFase)  jogoFase.textContent  = '🎉 Parabéns! Sua árvore está plantada!';
                if (jogoBarra) jogoBarra.style.width  = '100%';
                if (jogoCount) jogoCount.textContent  = 'Completo! ✅';
                if (btnJogo)  {
                    btnJogo.innerHTML = '🌳 Árvore plantada!';
                    btnJogo.disabled  = true;
                }
                atualizarTimeline(4);
            }
        }
    }

    if (btnJogo) {
        btnJogo.addEventListener('click', cliqueJogo);
        mostrarFaseSVG(0);
        atualizarTimeline(0);
        if (jogoCount) jogoCount.textContent = '0 / ' + FASES[0].meta + ' cliques';
        if (jogoFase)  jogoFase.textContent  = FASES[0].nome;
    }

    /* ════════════════════════════════════════
       JOGO SECRETO — COLETA DE MAÇÃS
       Mova a cesta para pegar 50 maçãs (3 vidas)
    ════════════════════════════════════════ */
    const MACA_TOTAL  = 50;
    const MACA_VIDAS  = 3;
    const SVG_W       = 400;
    const SVG_H       = 320;

    let macaRodando    = false;
    let macaColetadas  = 0;
    let macaVidas      = MACA_VIDAS;
    let macaLoop       = null;
    let macaLista      = [];
    let cestaX         = 160;
    let cestaAlvo      = 160;
    let macaSpawnTimer = 0;
    let macaSpawnRate  = 120;
    let macaFrame      = 0;
    let macaIdCounter  = 0;

    const macaSvg        = document.getElementById('maca-svg');
    const macaGrupo      = document.getElementById('maca-macas');
    const cestaEl        = document.getElementById('maca-cesta');
    const personagemEl   = document.getElementById('maca-personagem');
    const macaDentroEl   = document.getElementById('maca-dentro');
    const macaOverlay    = document.getElementById('maca-overlay');
    const macaOverlayBox = document.getElementById('maca-overlay-box');
    const macaPlacar     = document.getElementById('maca-placar');
    const macaVidasEl    = document.getElementById('maca-vidas');
    const macaBtnIniciar = document.getElementById('maca-btn-iniciar');
    const macaCena       = document.getElementById('maca-cena');
    const macaInstrucao  = document.getElementById('maca-instrucao');

    // Converte posição do mouse/touch para coordenadas do viewBox SVG
    function posParaSVG(clientX) {
        if (!macaSvg) return cestaAlvo;
        const rect  = macaSvg.getBoundingClientRect();
        const ratio = SVG_W / rect.width;
        return (clientX - rect.left) * ratio;
    }

    function moverCesta(svgX) {
        cestaAlvo = Math.max(0, Math.min(SVG_W - 80, svgX - 40));
    }

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

    function spawnMaca() {
        if (!macaGrupo) return;
        const id = 'mc' + (macaIdCounter++);
        const x  = 40 + Math.random() * (SVG_W - 80);
        const vy = 1.4 + Math.random() * 1.2 + Math.min(macaFrame / 3000, 2.5);

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', id);
        g.setAttribute('class', 'maca-item');

        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('r', '10');
        c.setAttribute('fill', 'url(#maca-grad)');

        const r = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        r.setAttribute('cx', '-3'); r.setAttribute('cy', '-4');
        r.setAttribute('rx', '3.5'); r.setAttribute('ry', '2.5');
        r.setAttribute('fill', 'rgba(255,255,255,0.4)');

        const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        l.setAttribute('x1', '2'); l.setAttribute('y1', '-10');
        l.setAttribute('x2', '4'); l.setAttribute('y2', '-16');
        l.setAttribute('stroke', '#4caf50'); l.setAttribute('stroke-width', '2');
        l.setAttribute('stroke-linecap', 'round');

        const f = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        f.setAttribute('cx', '7'); f.setAttribute('cy', '-16');
        f.setAttribute('rx', '5'); f.setAttribute('ry', '3');
        f.setAttribute('fill', '#66bb6a');
        f.setAttribute('transform', 'rotate(-30 7 -16)');

        g.appendChild(l); g.appendChild(f); g.appendChild(c); g.appendChild(r);
        g.setAttribute('transform', 'translate(' + x + ', 15)');
        macaGrupo.appendChild(g);

        macaLista.push({ id, el: g, x, y: 15, vy });
    }

    function atualizarPlacar() {
        if (macaPlacar) macaPlacar.textContent = '🍎 ' + macaColetadas + ' / ' + MACA_TOTAL + ' maçãs';
        const vidas = macaVidas < 0 ? 0 : macaVidas;
        const coracoes = '❤️'.repeat(vidas) + '🖤'.repeat(MACA_VIDAS - vidas);
        if (macaVidasEl) macaVidasEl.textContent = coracoes + ' ' + vidas + (vidas === 1 ? ' vida' : ' vidas');
    }

    function adicionarMacaNaCesta() {
        if (!macaDentroEl) return;
        const colunas = [14, 24, 34, 44, 54, 64, 19, 29, 39, 49, 59];
        const linhas  = [272, 264, 256];
        const idx     = Math.min(macaColetadas - 1, colunas.length * linhas.length - 1);
        const col     = idx % colunas.length;
        const lin     = Math.floor(idx / colunas.length) % linhas.length;

        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', colunas[col]);
        c.setAttribute('cy', linhas[lin]);
        c.setAttribute('r', '5');
        c.setAttribute('fill', '#e53935');
        macaDentroEl.setAttribute('opacity', '1');
        macaDentroEl.appendChild(c);
    }

    function mostrarOverlay(vitoria) {
        macaRodando = false;
        cancelAnimationFrame(macaLoop);

        macaLista.forEach(m => { if (m.el && m.el.parentNode) m.el.remove(); });
        macaLista = [];

        if (!macaOverlay || !macaOverlayBox) return;

        if (vitoria) {
            macaOverlayBox.innerHTML =
                '<span class="overlay-emoji">🏆</span>' +
                '<div class="overlay-titulo">Colheita Completa!</div>' +
                '<div class="overlay-msg">Você coletou todas as 50 maçãs!</div>' +
                '<div class="overlay-final-msg">Parabéns meu<br><strong>AGRICULTOR FABULOSO</strong><br>você finalmente testou toda a nossa aventura juntos! 🌿</div>';
        } else {
            macaOverlayBox.innerHTML =
                '<span class="overlay-emoji">😢</span>' +
                '<div class="overlay-titulo">Colheita perdida!</div>' +
                '<div class="overlay-msg">Você coletou ' + macaColetadas + ' de ' + MACA_TOTAL + ' maçãs.<br>Tente de novo!</div>' +
                '<button class="overlay-btn" id="overlay-retry">🍎 Tentar Novamente</button>';

            setTimeout(() => {
                const btn = document.getElementById('overlay-retry');
                if (btn) {
                    btn.addEventListener('click', () => {
                        macaOverlay.style.display = 'none';
                        iniciarJogoMaca();
                    });
                }
            }, 50);
        }

        macaOverlay.style.display = 'flex';
    }

    function loopMaca() {
        if (!macaRodando) return;
        macaFrame++;

        // Suaviza movimento da cesta
        cestaX += (cestaAlvo - cestaX) * 0.18;
        const cestaXInt = Math.round(cestaX);
        if (cestaEl)      cestaEl.setAttribute('transform',      'translate(' + cestaXInt + ',0)');
        if (personagemEl) personagemEl.setAttribute('transform', 'translate(' + cestaXInt + ',0)');

        // Spawn de novas maçãs
        macaSpawnTimer++;
        const totalJaSpawnadas = macaColetadas + macaLista.length;
        if (macaSpawnTimer >= macaSpawnRate && totalJaSpawnadas < MACA_TOTAL) {
            macaSpawnTimer = 0;
            macaSpawnRate  = Math.max(45, 120 - macaFrame / 60);
            spawnMaca();
        }

        // Zona de coleta da cesta
        const cestaLeft  = cestaXInt + 8;
        const cestaRight = cestaXInt + 72;
        const cestaTop   = 253;
        const cestaBase  = 284;

        for (let i = macaLista.length - 1; i >= 0; i--) {
            const m = macaLista[i];
            m.y += m.vy;
            m.el.setAttribute('transform', 'translate(' + m.x + ',' + m.y + ')');

            // Coletou na cesta
            if (
                m.y + 10 >= cestaTop &&
                m.y - 10 <  cestaBase &&
                m.x      >= cestaLeft &&
                m.x      <= cestaRight
            ) {
                if (m.el.parentNode) m.el.remove();
                macaLista.splice(i, 1);
                macaColetadas++;
                adicionarMacaNaCesta();
                atualizarPlacar();
                if (macaColetadas >= MACA_TOTAL) { mostrarOverlay(true); return; }
                continue;
            }

            // Caiu no chão
            if (m.y > SVG_H + 20) {
                if (m.el.parentNode) m.el.remove();
                macaLista.splice(i, 1);
                macaVidas--;
                atualizarPlacar();
                if (macaVidas <= 0) { mostrarOverlay(false); return; }
            }
        }

        macaLoop = requestAnimationFrame(loopMaca);
    }

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

        if (macaGrupo)    macaGrupo.innerHTML   = '';
        if (macaDentroEl) {
            macaDentroEl.innerHTML = '';
            macaDentroEl.setAttribute('opacity', '0');
        }
        if (cestaEl)      cestaEl.setAttribute('transform', 'translate(160,0)');
        if (personagemEl) personagemEl.setAttribute('transform', 'translate(160,0)');
        if (macaOverlay)  macaOverlay.style.display = 'none';
        if (macaInstrucao) {
            macaInstrucao.style.opacity = '1';
            setTimeout(() => { macaInstrucao.style.opacity = '0'; }, 3000);
        }

        atualizarPlacar();
        macaRodando = true;
        macaLoop = requestAnimationFrame(loopMaca);

        if (macaBtnIniciar) macaBtnIniciar.disabled = true;
    }

    if (macaBtnIniciar) {
        macaBtnIniciar.addEventListener('click', iniciarJogoMaca);
    }

    /* ════════════════════════════════════════
   JOGO DO PLANETA
   Cole este bloco dentro do seu script.js,
   dentro do callback DOMContentLoaded
   (antes do último fechamento de parêntese).
════════════════════════════════════════ */

/* ── Jogo do Planeta — Variáveis de estado ── */
(function () {

    let ptsVerde      = 0;
    let ptsCinza      = 0;
    let jogoEncerrado = false;

    /* Elementos de placar e barra */
    const elPtsVerde   = document.getElementById('pl-pts-verde');
    const elPtsCinza   = document.getElementById('pl-pts-cinza');
    const elBarraVerde = document.getElementById('pl-barra-verde');
    const elBarraCinza = document.getElementById('pl-barra-cinza');
    const elFaseLbl    = document.getElementById('pl-fase-label');
    const elOverlay    = document.getElementById('pl-overlay');
    const elOverlayBox = document.getElementById('pl-overlay-box');
    const btnMelhorar  = document.getElementById('pl-btn-melhorar');
    const btnPiorar    = document.getElementById('pl-btn-piorar');
    const elCena       = document.getElementById('pl-cena');
    const partSvg      = document.getElementById('pl-particulas-svg');

    /* Camadas SVG do planeta */
    const layers = {
        contNeutro:    document.getElementById('pl-cont-neutro'),
        contVerde:     document.getElementById('pl-cont-verde'),
        contPoluido:   document.getElementById('pl-cont-poluido'),
        contMorto:     document.getElementById('pl-cont-morto'),
        contMisto:     document.getElementById('pl-cont-misto'),
        predios:       document.getElementById('pl-predios'),
        fumaca:        document.getElementById('pl-fumaca'),
        vegetacao:     document.getElementById('pl-vegetacao'),
        prediosExtras: document.getElementById('pl-predios-extras'),
        nuvensSaud:    document.getElementById('pl-nuvens-saudaveis'),
        atmosfera:     document.getElementById('pl-atmosfera'),
    };

    /* ── Helpers ── */
    function show(el) { if (el) el.setAttribute('display', ''); }
    function hide(el) { if (el) el.setAttribute('display', 'none'); }

    function animarValor(el) {
        el.classList.remove('placar-val-anim');
        void el.offsetWidth; // força reflow para reiniciar animação
        el.classList.add('placar-val-anim');
    }

    /* Partícula flutuante dentro do SVG */
    function spawnParticulaSVG(emoji, tipo) {
        if (!partSvg) return;
        const x = tipo === 'verde'
            ? 120 + Math.random() * 80
            : 300 + Math.random() * 80;
        const y = 220 + Math.random() * 40;

        const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        txt.setAttribute('x', x);
        txt.setAttribute('y', y);
        txt.setAttribute('font-size', '18');
        txt.setAttribute('opacity', '1');
        txt.textContent = emoji;
        partSvg.appendChild(txt);

        let vy = -1.8 - Math.random() * 1.5;
        let op = 1;
        const tick = setInterval(() => {
            const cy = parseFloat(txt.getAttribute('y')) + vy;
            op -= 0.032;
            txt.setAttribute('y', cy);
            txt.setAttribute('opacity', Math.max(0, op));
            if (op <= 0) { clearInterval(tick); txt.remove(); }
        }, 28);
    }

    /* Partícula DOM flutuante (sobre o botão clicado) */
    function spawnParticulaDOM(e, tipo) {
        if (!elCena) return;
        const cenaRect = elCena.getBoundingClientRect();
        const px = e.clientX - cenaRect.left;
        const py = e.clientY - cenaRect.top;

        const emojisVerde = ['🌱','🌿','🍃','🌳','💚','✨','🌺'];
        const emojisCinza = ['🏭','💨','🔥','🏗️','⚫','💀','🌫️'];
        const lista = tipo === 'verde' ? emojisVerde : emojisCinza;

        const el = document.createElement('div');
        el.className  = 'planeta-particula';
        el.textContent = lista[Math.floor(Math.random() * lista.length)];
        el.style.left = px + 'px';
        el.style.top  = py + 'px';
        elCena.appendChild(el);
        setTimeout(() => el.remove(), 950);
    }

    /* ── Atualizar visual do planeta conforme pontuação ── */
    function atualizarPlaneta() {
        const total = ptsVerde + ptsCinza;

        /* Barras — cada lado vai de 0 a 50% da largura total */
        elBarraVerde.style.width = Math.min((ptsVerde / 1000) * 100, 50) + '%';
        elBarraCinza.style.width = Math.min((ptsCinza / 1000) * 100, 50) + '%';

        /* Cor da atmosfera */
        if (ptsVerde > ptsCinza) {
            layers.atmosfera.setAttribute('stroke', '#52b788');
            layers.atmosfera.setAttribute('opacity', '0.28');
        } else if (ptsCinza > ptsVerde) {
            layers.atmosfera.setAttribute('stroke', '#9e8060');
            layers.atmosfera.setAttribute('opacity', '0.22');
        } else {
            layers.atmosfera.setAttribute('stroke', '#4a9eff');
            layers.atmosfera.setAttribute('opacity', '0.18');
        }

        /* Esconde todas as camadas antes de escolher a correta */
        const todas = [
            layers.contNeutro, layers.contVerde, layers.contPoluido,
            layers.contMorto,  layers.contMisto,
            layers.predios,    layers.fumaca,    layers.vegetacao,
            layers.prediosExtras, layers.nuvensSaud
        ];
        todas.forEach(hide);

        /* ─ Fase inicial: nenhum lado chegou a 500 ─ */
        if (ptsVerde < 500 && ptsCinza < 500) {
            show(layers.contNeutro);
            if (ptsCinza >= 200) show(layers.predios);
            if (ptsVerde >= 200) show(layers.vegetacao);

            elFaseLbl.textContent =
                total === 0         ? '🌍 Fase Inicial — O planeta aguarda sua decisão' :
                ptsVerde > ptsCinza ? '🌱 O planeta está melhorando...'                 :
                ptsCinza > ptsVerde ? '⚠️ O planeta está sofrendo...'                   :
                                      '⚖️ O planeta está em equilíbrio instável';
            return;
        }

        /* ─ Intermediário: ≥500 melhorar ─ */
        if (ptsVerde >= 500 && ptsCinza < 500) {
            show(layers.contVerde);
            show(layers.vegetacao);
            show(layers.nuvensSaud);
            elFaseLbl.textContent = '🌿 O planeta está florescendo — continue assim!';
            return;
        }

        /* ─ Intermediário: ≥500 piorar ─ */
        if (ptsCinza >= 500 && ptsVerde < 500) {
            show(layers.contPoluido);
            show(layers.predios);
            show(layers.fumaca);
            elFaseLbl.textContent = '🏭 O planeta está sendo destruído — reflita!';
            return;
        }

        /* ─ Ambos ≥500 mas total < 1000 ─ */
        if (ptsVerde >= 500 && ptsCinza >= 500 && total < 1000) {
            show(layers.contMisto);
            show(layers.predios);
            elFaseLbl.textContent = '⚖️ Conflito ambiental — o futuro é incerto...';
        }
    }

    /* ── Exibir mensagem de fim de jogo ── */
    function mostrarFinal() {
        jogoEncerrado = true;
        if (btnMelhorar) { btnMelhorar.disabled = true; btnMelhorar.style.opacity = '.45'; }
        if (btnPiorar)   { btnPiorar.disabled   = true; btnPiorar.style.opacity   = '.45'; }

        /* Esconde todas as camadas para redesenhar */
        const todas = [
            layers.contNeutro, layers.contVerde, layers.contPoluido,
            layers.contMorto,  layers.contMisto,
            layers.predios,    layers.fumaca,    layers.vegetacao,
            layers.prediosExtras, layers.nuvensSaud
        ];
        todas.forEach(hide);

        let emoji, titulo, msg, camadas = [];

        /* ─ VITÓRIA VERDE: 1000 pts melhorar ─ */
        if (ptsVerde >= 1000 && ptsCinza < 500) {
            emoji   = '💚🌳💚';
            titulo  = 'Parabéns meu caro agricultor, você foi uma pessoa que cuidou tanto do nosso planeta 🥰';
            msg     = 'O planeta está cheio de vida, florestas e esperança. Você é um exemplo para o mundo!';
            camadas = [layers.contVerde, layers.vegetacao, layers.nuvensSaud];
            elFaseLbl.textContent = '🌳 Planeta Vivo — Missão cumprida!';
            layers.atmosfera.setAttribute('stroke', '#52b788');
            layers.atmosfera.setAttribute('opacity', '0.4');
        }
        /* ─ DERROTA CINZA: 1000 pts piorar ─ */
        else if (ptsCinza >= 1000 && ptsVerde < 500) {
            emoji   = '💔🏭💔';
            titulo  = 'Que coisa feia de se fazer meu caro agricultor 😢, pensava que você era uma boa pessoa';
            msg     = 'O planeta perdeu sua vida. Desertos, fumaça e silêncio tomaram conta de tudo.';
            camadas = [layers.contMorto, layers.predios, layers.fumaca, layers.prediosExtras];
            elFaseLbl.textContent = '💀 Planeta Morto — Missão fracassada.';
            layers.atmosfera.setAttribute('stroke', '#8b4a2a');
            layers.atmosfera.setAttribute('opacity', '0.15');
        }
        /* ─ FINAL MISTO ─ */
        else {
            emoji   = '😨🌍😨';
            titulo  = 'Bem. Esse é o nosso planeta sem futuro ecológico quase acabou com tudo 😨';
            msg     = 'Desenvolvimento sem consciência. O planeta sobreviveu, mas mal. A natureza está exausta.';
            camadas = [layers.contMisto, layers.predios, layers.prediosExtras];
            elFaseLbl.textContent = '⚠️ Planeta Exausto — Futuro incerto.';
            layers.atmosfera.setAttribute('stroke', '#9e7850');
            layers.atmosfera.setAttribute('opacity', '0.2');
        }

        camadas.forEach(show);

        elOverlayBox.innerHTML =
            '<span class="overlay-emoji-pl">'  + emoji  + '</span>' +
            '<div class="overlay-titulo-pl">'  + titulo + '</div>'  +
            '<div class="overlay-msg-pl">'      + msg    + '</div>'  +
            '<button class="overlay-btn-pl" id="pl-retry">🌍 Jogar Novamente</button>';

        elOverlay.style.display = 'flex';

        setTimeout(() => {
            const btnRetry = document.getElementById('pl-retry');
            if (btnRetry) btnRetry.addEventListener('click', reiniciar);
        }, 50);
    }

    /* ── Reiniciar jogo ── */
    function reiniciar() {
        ptsVerde      = 0;
        ptsCinza      = 0;
        jogoEncerrado = false;

        if (elPtsVerde) elPtsVerde.textContent = '0';
        if (elPtsCinza) elPtsCinza.textContent = '0';
        if (elBarraVerde) elBarraVerde.style.width = '0%';
        if (elBarraCinza) elBarraCinza.style.width = '0%';
        if (elOverlay)    elOverlay.style.display   = 'none';
        if (elFaseLbl)    elFaseLbl.textContent      = '🌍 Fase Inicial — O planeta aguarda sua decisão';

        if (btnMelhorar) { btnMelhorar.disabled = false; btnMelhorar.style.opacity = '1'; }
        if (btnPiorar)   { btnPiorar.disabled   = false; btnPiorar.style.opacity   = '1'; }

        layers.atmosfera.setAttribute('stroke', '#4a9eff');
        layers.atmosfera.setAttribute('opacity', '0.18');

        const todas = [
            layers.contNeutro, layers.contVerde, layers.contPoluido,
            layers.contMorto,  layers.contMisto,
            layers.predios,    layers.fumaca,    layers.vegetacao,
            layers.prediosExtras, layers.nuvensSaud
        ];
        todas.forEach(hide);
        show(layers.contNeutro);

        if (partSvg) partSvg.innerHTML = '';
    }

    /* ── Clique em "Melhorar Planeta" ── */
    if (btnMelhorar) {
        btnMelhorar.addEventListener('click', (e) => {
            if (jogoEncerrado) return;
            ptsVerde += 100;

            if (elPtsVerde) { elPtsVerde.textContent = ptsVerde; animarValor(elPtsVerde); }

            const emojis = ['🌱','🌿','🍃','🌳','💚'];
            spawnParticulaSVG(emojis[Math.floor(Math.random() * emojis.length)], 'verde');
            spawnParticulaDOM(e, 'verde');

            atualizarPlaneta();

            if (ptsVerde + ptsCinza >= 1000) setTimeout(mostrarFinal, 400);
        });
    }

    /* ── Clique em "Piorar Planeta" ── */
    if (btnPiorar) {
        btnPiorar.addEventListener('click', (e) => {
            if (jogoEncerrado) return;
            ptsCinza += 100;

            if (elPtsCinza) { elPtsCinza.textContent = ptsCinza; animarValor(elPtsCinza); }

            const emojis = ['💨','🏭','🔥','⚫','💀'];
            spawnParticulaSVG(emojis[Math.floor(Math.random() * emojis.length)], 'cinza');
            spawnParticulaDOM(e, 'cinza');

            atualizarPlaneta();

            if (ptsVerde + ptsCinza >= 1000) setTimeout(mostrarFinal, 400);
        });
    }

    /* ── Inicialização ── */
    show(layers.contNeutro);

})();
});