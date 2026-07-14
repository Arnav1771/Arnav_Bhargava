import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import GithubIcon from '@mui/icons-material/GitHub';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css';

/* ── Game-title-screen hero ──
   The home page is a game main menu: key-art ronin, logo-style title,
   class-rotation subtitle, menu items, HUD, and a PRESS ENTER prompt. */

function HomePage() {
    const navigate = useNavigate();

    const displayText = (text) => {
        let el = document.querySelector('#typewriter-effect');
        if (el) el.innerHTML = text || '';
    };

    useEffect(() => {
        const messages = [
            'CLASS: AI / LLM ENGINEER',
            'GUILD: ALIGNED AUTOMATION',
            'SPEC: AGENTIC WORKFLOWS',
            'PASSIVE: LINUX POWERUSER',
        ];
        let textIndex = 0;
        let lettersToShow = 0;
        const id = setInterval(() => {
            const msg = messages[textIndex];
            if (lettersToShow <= msg.length) {
                lettersToShow++;
                displayText(msg.substring(0, lettersToShow));
            } else {
                textIndex = (textIndex + 1) % messages.length;
                lettersToShow = 0;
            }
        }, 70);
        return () => clearInterval(id);
    }, []);

    /* PRESS ENTER starts the game (projects) */
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Enter') navigate('/portfolios'); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [navigate]);

    return (
        <HomePageStyled>
            {/* ── stage ── */}
            <div className="stage" aria-hidden="true">
                <div className="neon-sun" />
                <div className="grid-floor" />
                <div className="stars" />
                {/* key-art ronin */}
                <svg className="ronin" viewBox="0 0 260 340" role="img" aria-label="Neon cyber-ronin key art.">
                    <defs>
                        <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#ff2d95" />
                        </linearGradient>
                        <linearGradient id="blade" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0" stopColor="#22d3ee" stopOpacity="0" /><stop offset="1" stopColor="#eafcff" />
                        </linearGradient>
                        <filter id="rglow" x="-60%" y="-60%" width="220%" height="220%">
                            <feGaussianBlur stdDeviation="3.2" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    <g className="katana" filter="url(#rglow)">
                        <line x1="196" y1="300" x2="92" y2="34" stroke="url(#blade)" strokeWidth="3.4" strokeLinecap="round" />
                        <line x1="200" y1="306" x2="188" y2="290" stroke="#c79a3a" strokeWidth="5" strokeLinecap="round" />
                    </g>
                    <path d="M130 150 C104 150 96 168 90 196 L74 322 C96 312 116 316 130 316 C144 316 164 312 186 322 L170 196 C164 168 156 150 130 150 Z" fill="#080b14" stroke="url(#neon)" strokeWidth="2.2" />
                    <path d="M92 176 C74 168 60 176 58 192 C74 186 86 190 96 200 Z" fill="#0b1020" stroke="url(#neon)" strokeWidth="1.6" />
                    <path d="M168 176 C186 168 200 176 202 192 C186 186 174 190 164 200 Z" fill="#0b1020" stroke="url(#neon)" strokeWidth="1.6" />
                    <path d="M104 168 L150 300" stroke="url(#neon)" strokeWidth="2" opacity=".5" fill="none" />
                    <path d="M130 60 C106 60 94 82 96 112 L100 132 C104 150 116 158 130 158 C144 158 156 150 160 132 L164 112 C166 82 154 60 130 60 Z" fill="#080b14" stroke="url(#neon)" strokeWidth="2.2" />
                    <path d="M86 96 C106 84 154 84 174 96 C154 92 106 92 86 96 Z" fill="url(#neon)" opacity=".85" />
                    <path d="M130 40 C118 44 112 56 116 70 C112 58 120 48 132 48 C126 46 122 44 130 40 Z" fill="#c79a3a" filter="url(#rglow)" />
                    <rect className="visor" x="108" y="112" width="44" height="7" rx="3.5" fill="#22d3ee" filter="url(#rglow)" />
                </svg>
                <div className="scanlines" />
                <div className="vignette" />
            </div>

            {/* ── HUD ── */}
            <div className="hud hud-top" aria-hidden="true">
                <span className="hud-chip">PLAYER 1</span>
                <span className="hud-chip lv">LV. 24 — CONSULTANT</span>
                <div className="xp"><span className="xp-fill" /><span className="xp-label">XP → NEXT ROLE</span></div>
            </div>

            {/* ── title block ── */}
            <div className="title-block">
                <p className="kicker">— A PORTFOLIO PRODUCTION —</p>
                <h1 className="game-logo">
                    <span className="line-1">ARNAV</span>
                    <span className="line-2">BHARGAVA</span>
                </h1>
                <p className="class-line"><span id="typewriter-effect" /><span className="cursor">▌</span></p>

                <nav className="menu" aria-label="Start menu">
                    <Link className="menu-item" to="/portfolios"><i>▶</i> NEW GAME <em>— view projects</em></Link>
                    <Link className="menu-item" to="/resume"><i>▶</i> CONTINUE <em>— resume / experience</em></Link>
                    <Link className="menu-item" to="/certification"><i>▶</i> TROPHIES <em>— certifications</em></Link>
                    <Link className="menu-item" to="/contact"><i>▶</i> MULTIPLAYER <em>— contact me</em></Link>
                </nav>

                <p className="press-start">PRESS <b>ENTER</b> TO START</p>

                <div className="icons">
                    <a href="https://github.com/Arnav1771" className="icon" target="_blank" rel="noopener noreferrer" title="GitHub"><GithubIcon /></a>
                    <a href="https://www.linkedin.com/in/arnav-bhargava-845457280/" className="icon" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInIcon /></a>
                    <a href="https://www.youtube.com/@arnavplays4468" className="icon" target="_blank" rel="noopener noreferrer" title="YouTube"><YoutubeIcon /></a>
                    <a href="https://www.kaggle.com/arnavbhargava03" className="icon txt" target="_blank" rel="noopener noreferrer" title="Kaggle">K</a>
                    <a href="https://leetcode.com/u/Arnav1771/" className="icon txt" target="_blank" rel="noopener noreferrer" title="LeetCode">LC</a>
                </div>
            </div>

            {/* ── footer ticker ── */}
            <div className="hud hud-bottom" aria-hidden="true">
                <span>© 2026 ARNAV BHARGAVA</span>
                <span className="coin">🪙 INSERT COIN — OR JUST SCROLL</span>
                <span>BUILD v2026.07</span>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: radial-gradient(120% 90% at 78% 8%, #0c1122 0%, #05070d 58%, #03040a 100%);
    font-family: 'Source Code Pro', monospace;

    .stage { position: absolute; inset: 0; z-index: 0; }
    .neon-sun {
        position: absolute; top: 6%; right: 8%;
        width: 36vw; height: 36vw; max-width: 500px; max-height: 500px; border-radius: 50%;
        background: radial-gradient(circle at 50% 55%, #ff2d95 0%, #b31666 40%, transparent 72%);
        filter: blur(2px); box-shadow: 0 0 130px 24px rgba(255,45,149,.35);
        animation: sun-breathe 7s ease-in-out infinite;
    }
    .grid-floor {
        position: absolute; left: -20%; right: -20%; bottom: 0; height: 44%;
        background-image: linear-gradient(rgba(34,211,238,.35) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(34,211,238,.35) 1px, transparent 1px);
        background-size: 46px 46px;
        transform: perspective(340px) rotateX(66deg); transform-origin: bottom center;
        mask-image: linear-gradient(transparent, #000 70%);
        -webkit-mask-image: linear-gradient(transparent, #000 70%);
        opacity: .55;
        animation: grid-scroll 3.2s linear infinite;
    }
    .stars {
        position: absolute; inset: 0;
        background-image: radial-gradient(1.5px 1.5px at 12% 22%, rgba(234,252,255,.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 32% 12%, rgba(234,252,255,.6) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 56% 30%, rgba(234,252,255,.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 74% 18%, rgba(234,252,255,.6) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 88% 38%, rgba(234,252,255,.5) 50%, transparent 51%),
            radial-gradient(1px 1px at 44% 46%, rgba(234,252,255,.45) 50%, transparent 51%);
        animation: twinkle 5s ease-in-out infinite;
    }
    .ronin {
        position: absolute; right: 13%; top: 52%; transform: translateY(-50%);
        width: 32vw; max-width: 400px; height: auto;
        filter: drop-shadow(0 0 28px rgba(34,211,238,.45));
        animation: ronin-float 6s ease-in-out infinite;
    }
    .visor { animation: visor-flicker 4s steps(1) infinite; }
    .katana { animation: blade-pulse 3.4s ease-in-out infinite; }
    .scanlines { position: absolute; inset: 0; pointer-events: none; opacity: .35;
        background: repeating-linear-gradient(180deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,.28) 2px 3px); }
    .vignette { position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(0,0,0,.65) 100%); }

    /* HUD */
    .hud { position: absolute; left: 0; right: 0; z-index: 3; display: flex; align-items: center;
        gap: 1rem; padding: .8rem clamp(1rem, 3vw, 2.4rem); color: #7f9ab5; font-size: .72rem; letter-spacing: .14em; }
    .hud-top { top: 0; }
    .hud-bottom { bottom: 0; justify-content: space-between; border-top: 1px solid rgba(34,211,238,.15); }
    .hud-chip { border: 1px solid rgba(34,211,238,.35); color: #22d3ee; padding: .2rem .6rem; border-radius: 4px; font-size: .68rem; }
    .hud-chip.lv { color: #ffd166; border-color: rgba(255,209,102,.35); }
    .xp { position: relative; flex: 0 1 240px; height: 8px; border: 1px solid rgba(34,211,238,.35); border-radius: 4px; overflow: hidden; }
    .xp-fill { position: absolute; inset: 0; width: 72%; background: linear-gradient(90deg, #22d3ee, #ff2d95); animation: xp-charge 4s ease-in-out infinite; }
    .xp-label { position: absolute; left: 8px; top: -1.05rem; font-size: .58rem; color: #55708c; }
    .coin { animation: blink-soft 2.4s steps(1) infinite; }

    /* title block */
    .title-block {
        position: relative; z-index: 2;
        margin-left: clamp(1.2rem, 6vw, 6rem);
        max-width: 620px; padding: 4.5rem 0;
    }
    .kicker { color: #7f9ab5; font-size: .72rem; letter-spacing: .5em; margin-bottom: 1rem; }
    .game-logo {
        display: flex; flex-direction: column; line-height: .92; margin: 0 0 1.1rem;
        font-family: 'Nunito', sans-serif; font-weight: 900; text-transform: uppercase;
        span { display: block; }
        .line-1 {
            font-size: clamp(3rem, 7.2vw, 5.6rem); color: #eafcff; letter-spacing: .04em;
            text-shadow: 0 0 24px rgba(34,211,238,.5), 4px 0 0 rgba(255,45,149,.45), -4px 0 0 rgba(34,211,238,.45);
        }
        .line-2 {
            font-size: clamp(2.2rem, 5.4vw, 4.2rem); letter-spacing: .14em;
            color: transparent; -webkit-text-stroke: 2px #ff2d95;
            text-shadow: 0 0 30px rgba(255,45,149,.35);
        }
        animation: neon-flicker 6s ease-in-out infinite;
    }
    .class-line {
        min-height: 1.4rem; margin: 0 0 1.8rem; font-size: .95rem; letter-spacing: .22em; color: #ffd166;
        .cursor { color: #ff2d95; animation: blink 1s step-start infinite; }
        #typewriter-effect { font-size: inherit; color: inherit; }
    }

    /* game menu */
    .menu { display: flex; flex-direction: column; gap: .35rem; margin-bottom: 1.6rem; }
    .menu-item {
        display: flex; align-items: baseline; gap: .7rem;
        font-size: 1.02rem; letter-spacing: .18em; color: #cfe9ff; text-decoration: none;
        padding: .45rem .8rem; border-left: 3px solid transparent;
        transition: all .18s ease;
        i { font-style: normal; color: transparent; transition: color .18s ease; font-size: .8rem; }
        em { font-style: normal; color: #55708c; font-size: .72rem; letter-spacing: .1em; }
        &:hover, &:focus-visible {
            color: #22d3ee; border-left-color: #ff2d95; background: rgba(34,211,238,.06);
            padding-left: 1.2rem; outline: none;
            i { color: #ff2d95; }
            em { color: #7f9ab5; }
        }
    }
    .press-start {
        margin: 0 0 1.6rem; font-size: .85rem; letter-spacing: .34em; color: #eafcff;
        animation: blink-soft 1.6s steps(1) infinite;
        b { color: #ffd166; }
    }
    .icons {
        display: flex; gap: .7rem;
        .icon {
            width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center;
            border: 2px solid rgba(34,211,238,.35); border-radius: 8px; color: #cfe9ff;
            text-decoration: none; font-weight: 800; font-size: .8rem; letter-spacing: .05em;
            transition: all .25s ease;
            svg { font-size: 1.3rem; }
            &:hover { border-color: #ff2d95; color: #ff2d95; box-shadow: 0 0 16px rgba(255,45,149,.4); transform: translateY(-3px); }
        }
    }

    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
    @keyframes blink-soft { 0%,100% { opacity: 1; } 55% { opacity: .25; } }
    @keyframes sun-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
    @keyframes grid-scroll { from { background-position: 0 0, 0 0; } to { background-position: 0 46px, 0 0; } }
    @keyframes twinkle { 0%,100% { opacity: .9; } 50% { opacity: .5; } }
    @keyframes ronin-float { 0%,100% { transform: translateY(-50%); } 50% { transform: translateY(calc(-50% - 10px)); } }
    @keyframes blade-pulse { 0%,100% { opacity: .8; } 50% { opacity: 1; } }
    @keyframes visor-flicker { 0%,88%,100% { opacity: 1; } 90% { opacity: .3; } 94% { opacity: 1; } 96% { opacity: .4; } }
    @keyframes neon-flicker { 0%,92%,100% { opacity: 1; } 93% { opacity: .85; } 95% { opacity: 1; } 97% { opacity: .9; } }
    @keyframes xp-charge { 0%,100% { width: 70%; } 50% { width: 74%; } }

    @media screen and (max-width: 900px) {
        .ronin { opacity: .25; right: 50%; transform: translate(50%, -50%); }
        @keyframes ronin-float { 0%,100% { transform: translate(50%, -50%); } 50% { transform: translate(50%, calc(-50% - 10px)); } }
        .neon-sun { right: 50%; transform: translateX(50%); opacity: .55; }
        .title-block { margin-inline: auto; text-align: center; padding-inline: 1rem;
            .menu { align-items: center; } .icons { justify-content: center; } }
        .hud-top .xp { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
        .neon-sun, .grid-floor, .stars, .ronin, .visor, .katana, .game-logo,
        .press-start, .coin, .xp-fill, .cursor { animation: none !important; }
    }
`;

export default HomePage;
