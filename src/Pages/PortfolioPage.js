import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import portfolios from '../data/portfolios';

const CATEGORIES = ['All', 'Agentic AI', 'AI / LLM', 'Computer Vision', 'DevTools', 'Linux', 'ML / RL', 'SaaS', 'Systems', 'Web'];

const CertificationPage = () => {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? portfolios : portfolios.filter(p => p.category === active);

    return (
        <MainLayout>
            <PortfolioStyled>
                <Title title={'Projects'} span={'ls projects/'} />

                <FilterBar>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={active === cat ? 'active' : ''}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </FilterBar>

                <TerminalWindow>
                    <TerminalHeader>
                        <span className="dot r" />
                        <span className="dot y" />
                        <span className="dot g" />
                        <span className="prompt">
                            <span className="user">arnav</span>
                            <span className="at">@</span>
                            <span className="host">arch</span>
                            <span className="sep">:</span>
                            <span className="tilde">~</span>
                            <span className="cmd"> $ ls projects/</span>
                        </span>
                    </TerminalHeader>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Stack</th>
                                    <th>Highlight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(p => (
                                    <tr key={p.id}>
                                        <td className="project-name">
                                            <span className="icon">{p.icon}</span>
                                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                                {p.title}
                                            </a>
                                            <span className="cat-badge">{p.category}</span>
                                        </td>
                                        <td className="stack-cell">
                                            {p.stack.split(' · ').map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </td>
                                        <td className="highlight-cell">{p.highlight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </TerminalWindow>
            </PortfolioStyled>
        </MainLayout>
    );
};

const FilterBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.8rem;

    button {
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--font-light-color);
        border-radius: 20px;
        padding: 4px 14px;
        font-size: 0.78rem;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: 'Nunito', sans-serif;

        &:hover, &.active {
            background: var(--primary-color);
            border-color: var(--primary-color);
            color: #fff;
        }
    }
`;

const PortfolioStyled = styled.div`
    padding: 2rem 2rem 4rem;
`;

const TerminalWindow = styled.div`
    background: #0d0f17;
    border: 1px solid #2e344e;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04);

    .table-wrap {
        overflow-x: auto;
        padding: 0 0 1rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.88rem;
    }

    thead tr {
        border-bottom: 1px solid #2e344e;
    }

    th {
        padding: 0.8rem 1.2rem;
        text-align: left;
        color: #6b7fad;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
    }

    tbody tr {
        border-bottom: 1px solid rgba(46,52,78,0.5);
        transition: background 0.2s ease;

        &:last-child { border-bottom: none; }
        &:hover { background: rgba(0,123,255,0.05); }
    }

    td {
        padding: 0.9rem 1.2rem;
        vertical-align: top;
    }

    .project-name {
        min-width: 200px;
        .icon {
            font-size: 1rem;
            margin-right: 0.5rem;
        }
        a {
            color: #fff;
            font-weight: 600;
            font-size: 0.88rem;
            transition: color 0.2s;
            &:hover { color: var(--primary-color); }
        }
        .cat-badge {
            display: inline-block;
            margin-left: 0.6rem;
            font-size: 0.65rem;
            padding: 2px 8px;
            border-radius: 20px;
            background: rgba(0,123,255,0.15);
            color: var(--primary-color);
            border: 1px solid rgba(0,123,255,0.3);
            vertical-align: middle;
        }
    }

    .stack-cell {
        min-width: 220px;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        .tech-tag {
            display: inline-block;
            background: rgba(255,255,255,0.05);
            border: 1px solid #2e344e;
            border-radius: 4px;
            padding: 2px 8px;
            font-size: 0.72rem;
            color: #a4acc4;
            white-space: nowrap;
        }
    }

    .highlight-cell {
        color: #a4acc4;
        font-size: 0.83rem;
        line-height: 1.5;
        max-width: 340px;
    }

    @media screen and (max-width: 768px) {
        .highlight-cell { display: none; }
    }
`;

const TerminalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1rem;
    background: #161925;
    border-bottom: 1px solid #2e344e;

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        &.r { background: #ff5f57; }
        &.y { background: #ffbd2e; }
        &.g { background: #28ca41; }
    }

    .prompt {
        margin-left: 0.5rem;
        font-family: 'Source Code Pro', monospace;
        font-size: 0.82rem;
        .user  { color: #28ca41; }
        .at    { color: #a4acc4; }
        .host  { color: #007bff; }
        .sep   { color: #a4acc4; }
        .tilde { color: #ffbd2e; }
        .cmd   { color: #fff; }
    }
`;

export default CertificationPage;
