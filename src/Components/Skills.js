import React from 'react';
import styled from 'styled-components';
import { InnerLayoutSingle } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import SkillSphere from './SkillSphere';

const SKILL_GROUPS = [
    {
        icon: '⚡',
        title: 'ML / AI / LLM',
        badges: [
            { label: 'PyTorch',      color: '#ee4b2b', bg: 'rgba(238,75,43,0.15)' },
            { label: 'TensorFlow',   color: '#ff6f00', bg: 'rgba(255,111,0,0.15)' },
            { label: 'HuggingFace', color: '#FFD21E', bg: 'rgba(255,210,30,0.15)' },
            { label: 'GPT-4o',      color: '#10a37f', bg: 'rgba(16,163,127,0.15)' },
            { label: 'Gemini 2.0',  color: '#4285f4', bg: 'rgba(66,133,244,0.15)' },
            { label: 'Ollama',      color: '#a4acc4', bg: 'rgba(164,172,196,0.1)' },
        ],
        tags: ['RAG', 'LLM Fine-tuning', 'Multi-Modal AI', 'Prompt Engineering', 'Stable Diffusion'],
    },
    {
        icon: '🌐',
        title: 'Backend & Web',
        badges: [
            { label: 'Python',     color: '#3776ab', bg: 'rgba(55,118,171,0.15)' },
            { label: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.15)' },
            { label: 'FastAPI',    color: '#009688', bg: 'rgba(0,150,136,0.15)'  },
            { label: 'Flask',      color: '#a4acc4', bg: 'rgba(164,172,196,0.1)' },
            { label: 'Next.js 14', color: '#fff',    bg: 'rgba(255,255,255,0.08)'},
            { label: 'n8n',        color: '#ea4b71', bg: 'rgba(234,75,113,0.15)' },
        ],
        tags: ['JavaScript', 'SQL', 'R', 'Web Scraping', 'REST APIs'],
    },
    {
        icon: '💾',
        title: 'Databases & Cloud',
        badges: [
            { label: 'PostgreSQL', color: '#4169e1', bg: 'rgba(65,105,225,0.15)' },
            { label: 'MySQL',      color: '#f29111', bg: 'rgba(242,145,17,0.15)' },
            { label: 'Prisma',     color: '#2d3748', bg: 'rgba(45,55,72,0.4)'    },
            { label: 'GCP',        color: '#4285f4', bg: 'rgba(66,133,244,0.15)' },
            { label: 'Vercel',     color: '#fff',    bg: 'rgba(255,255,255,0.08)'},
            { label: 'MongoDB',    color: '#47a248', bg: 'rgba(71,162,72,0.15)'  },
        ],
        tags: ['Vector DBs', 'Redis', 'Firebase'],
    },
    {
        icon: '🔧',
        title: 'DevOps & Linux',
        badges: [
            { label: 'Docker',     color: '#2496ed', bg: 'rgba(36,150,237,0.15)' },
            { label: 'Git',        color: '#f05032', bg: 'rgba(240,80,50,0.15)'  },
            { label: 'Linux',      color: '#fcc624', bg: 'rgba(252,198,36,0.15)' },
            { label: 'Arch Linux', color: '#1793d1', bg: 'rgba(23,147,209,0.15)' },
            { label: 'Jupyter',    color: '#f37626', bg: 'rgba(243,118,38,0.15)' },
            { label: 'Jenkins',    color: '#d33833', bg: 'rgba(211,56,51,0.15)'  },
        ],
        tags: ['Shell Scripting', 'Neovim', 'i3wm', 'Hyprland', 'Dotfiles'],
    },
];

function Skills({ theme }) {
    return (
        <SkillsStyled>
            <Title title={'Skills'} span={'skills'} />

            <div className="skillMain">
                <div className="skillText">
                    <InnerLayoutSingle>
                        <div className="skillsSingle">
                            <ProgressBar title={'PYTHON / ML'}   width={'92%'} text={'Expert'}       />
                            <ProgressBar title={'LLM / AGENTS'}  width={'88%'} text={'Expert'}       />
                            <ProgressBar title={'LINUX / SHELL'} width={'85%'} text={'Expert'}       />
                            <ProgressBar title={'SQL / DATA'}    width={'78%'} text={'Advanced'}     />
                            <ProgressBar title={'CLOUD / DEVOPS'} width={'72%'} text={'Advanced'}   />
                        </div>
                    </InnerLayoutSingle>
                </div>
                <SkillSphere theme={theme} />
            </div>

            <TerminalCard>
                <TerminalHeader>
                    <span className="dot r" /><span className="dot y" /><span className="dot g" />
                    <span className="prompt">
                        <span className="user">arnav</span>
                        <span className="at">@</span>
                        <span className="host">arch</span>
                        <span className="sep">:</span>
                        <span className="tilde">~</span>
                        <span className="cmd"> $ cat skills.json</span>
                    </span>
                </TerminalHeader>

                <div className="skill-grid">
                    {SKILL_GROUPS.map((group) => (
                        <div key={group.title} className="skill-quad">
                            <h3 className="quad-title">
                                <span className="quad-icon">{group.icon}</span>
                                {group.title}
                            </h3>
                            <div className="badge-row">
                                {group.badges.map(b => (
                                    <span
                                        key={b.label}
                                        className="skill-badge"
                                        style={{ color: b.color, background: b.bg, borderColor: b.color + '44' }}
                                    >
                                        {b.label}
                                    </span>
                                ))}
                            </div>
                            <div className="tag-row">
                                {group.tags.map(t => (
                                    <span key={t} className="plain-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </TerminalCard>

            <div className="research-section">
                <span className="chip-label">Published Research</span>
                <div className="paper-card">
                    <a
                        href="https://ijsret.com/wp-content/uploads/2023/03/IJSRET_V9_issuue2_132.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="paper-title"
                    >
                        Image Classification for Dogs and Cats Using CNN
                    </a>
                    <p className="paper-journal">IJSRET &bull; Springer Natural Applied Sciences</p>
                </div>
            </div>
        </SkillsStyled>
    );
}

const TerminalCard = styled.div`
    margin-top: 3rem;
    background: #0d0f17;
    border: 1px solid #2e344e;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03);

    .skill-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        @media (max-width: 700px) { grid-template-columns: 1fr; }
    }

    .skill-quad {
        padding: 1.4rem 1.6rem;
        border-right: 1px solid #2e344e;
        border-bottom: 1px solid #2e344e;
        &:nth-child(even) { border-right: none; }
        &:nth-last-child(-n+2) { border-bottom: none; }
        @media (max-width: 700px) {
            border-right: none;
            &:last-child { border-bottom: none; }
        }
    }

    .quad-title {
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        .quad-icon { font-size: 1rem; }
    }

    .badge-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 0.8rem;
    }

    .skill-badge {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 6px;
        font-size: 0.73rem;
        font-weight: 600;
        border: 1px solid;
        cursor: default;
        transition: transform 0.15s;
        &:hover { transform: translateY(-1px); }
    }

    .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .plain-tag {
        color: #6b7fad;
        font-size: 0.73rem;
        background: transparent;
        &:not(:last-child)::after { content: '·'; margin-left: 6px; color: #3a4060; }
    }
`;

const TerminalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1rem;
    background: #161925;
    border-bottom: 1px solid #2e344e;

    .dot {
        width: 12px; height: 12px;
        border-radius: 50%;
        &.r { background: #ff5f57; }
        &.y { background: #ffbd2e; }
        &.g { background: #28ca41; }
    }
    .prompt {
        margin-left: 0.4rem;
        font-family: 'Source Code Pro', monospace;
        font-size: 0.8rem;
        .user  { color: #28ca41; }
        .at    { color: #a4acc4; }
        .host  { color: #007bff; }
        .sep   { color: #a4acc4; }
        .tilde { color: #ffbd2e; }
        .cmd   { color: #fff; }
    }
`;

const SkillsStyled = styled.section`
    .skillMain {
        display: flex;
    }
    .skillText {
        width: 40%;
        @media (max-width: 900px) { width: 100%; }
    }
    .skillsSingle {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
    }

    .research-section {
        margin-top: 2rem;
        padding: 1.2rem 1.4rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;

        .chip-label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 0.6rem;
        }
        .paper-card {
            padding: 0.7rem 1rem;
            border-left: 3px solid var(--primary-color);
            .paper-title {
                color: var(--primary-color);
                font-weight: 500;
                font-size: 0.9rem;
                text-decoration: none;
                &:hover { text-decoration: underline; }
            }
            .paper-journal {
                font-size: 0.76rem;
                margin-top: 0.25rem;
                opacity: 0.6;
            }
        }
    }
`;

export default Skills;
