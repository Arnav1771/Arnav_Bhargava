import React from 'react'
import styled from 'styled-components';
import {InnerLayoutSingle} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import SkillSphere from './SkillSphere';
import './styles.css'

const LANGUAGES  = ['Python', 'R', 'SQL', 'JavaScript', 'C++'];
const ML_AI      = ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'Stable Diffusion', 'NLP'];
const TOOLS      = ['Google Cloud', 'Docker', 'Flask', 'Git', 'MongoDB', 'MySQL', 'React', 'NPM', 'Adobe Premiere Pro', 'Adobe Photoshop'];

function Skills({theme}) {
    return (
        <SkillsStyled>
            <Title title={'Skills'} span={'skills'} />

            {/* Progress bars + 3D Sphere */}
            <div style={{display:'flex'}} className='skillMain'>
                <div style={{width:'40%'}} className="skillText">
                    <InnerLayoutSingle>
                        <div className='skillsSingle'>
                            <ProgressBar title={'PYTHON'}       width={'90%'} text={'Expert'} />
                            <ProgressBar title={'AI / ML'}      width={'85%'} text={'Expert'} />
                            <ProgressBar title={'SQL'}          width={'75%'} text={'Advanced'} />
                            <ProgressBar title={'R'}            width={'70%'} text={'Advanced'} />
                            <ProgressBar title={'GOOGLE CLOUD'} width={'65%'} text={'Intermediate'} />
                        </div>
                    </InnerLayoutSingle>
                </div>
                <SkillSphere theme={theme}/>
            </div>

            {/* Tech Stack chips */}
            <div className="tech-stack-section">
                <h3 className="section-sub-title">Tech Stack</h3>

                <div className="chip-group">
                    <span className="chip-label">Languages</span>
                    <div className="chips">
                        {LANGUAGES.map(s => <span key={s} className="skill-chip">{s}</span>)}
                    </div>
                </div>

                <div className="chip-group">
                    <span className="chip-label">ML / AI</span>
                    <div className="chips">
                        {ML_AI.map(s => <span key={s} className="skill-chip">{s}</span>)}
                    </div>
                </div>

                <div className="chip-group">
                    <span className="chip-label">Tools &amp; Platforms</span>
                    <div className="chips">
                        {TOOLS.map(s => <span key={s} className="skill-chip">{s}</span>)}
                    </div>
                </div>

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
            </div>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skillsSingle{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 2rem;
    }

    .tech-stack-section {
        margin-top: 3rem;
        padding: 1.8rem 2rem;
        border: 1px solid var(--border-color);
        border-radius: 12px;
    }

    .section-sub-title {
        font-size: 1.1rem;
        color: var(--primary-color);
        margin-bottom: 1.6rem;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        &::before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 1.1rem;
            background: var(--primary-color);
            border-radius: 2px;
        }
    }

    .chip-group {
        margin-bottom: 1.4rem;
        .chip-label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 0.6rem;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
    }

    .skill-chip {
        background: transparent;
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 4px 14px;
        font-size: 0.82rem;
        color: var(--font-color);
        cursor: default;
        transition: all 0.25s ease;
        &:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
            transform: translateY(-2px);
        }
    }

    .research-section {
        margin-top: 0.4rem;
        .paper-card {
            padding: 0.9rem 1rem;
            border-left: 3px solid var(--primary-color);
            margin-top: 0.5rem;
            .paper-title {
                color: var(--primary-color);
                font-weight: 500;
                font-size: 0.93rem;
                text-decoration: none;
                &:hover { text-decoration: underline; }
            }
            .paper-journal {
                font-size: 0.78rem;
                margin-top: 0.3rem;
                opacity: 0.65;
            }
        }
    }
`;

export default Skills;
