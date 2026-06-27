import React from 'react';
import styled from 'styled-components';
import formalPhoto from '../img/Arnav_formal.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection({ theme }) {
    const age = (() => {
        const birth = new Date('2003-10-01');
        const today = new Date();
        let a = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--;
        return a;
    })();

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <div className="photo-wrapper">
                    <img src={formalPhoto} alt="Arnav Bhargava" />
                    <div className="photo-badge">
                        <span className="dot-green" />
                        <span>Available for Consulting</span>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <div className="role-tag">Associate Consultant @ Aligned Automation</div>
                <h4>I am <span>Arnav Bhargava</span></h4>
                <h2>AI/ML Engineer · LLM &amp; Agentic Systems</h2>
                <p className="paragraph">
                    Building production-grade AI systems for over 3 years — from fine-tuning large language models
                    to orchestrating multi-agent pipelines with n8n, LangChain, and custom toolchains.
                    Arch Linux daily driver. Research student at Hiroshima University (Japan).
                    Currently designing intelligent automation workflows at <strong>Aligned Automation</strong>.
                </p>

                <div className="expertise-pills">
                    <span>LLM Engineering</span>
                    <span>Agentic Workflows</span>
                    <span>Linux / Shell</span>
                    <span>MLOps</span>
                    <span>Computer Vision</span>
                    <span>n8n / Jenkins</span>
                </div>

                <div className="about-info">
                    <div className="info-item"><span className="label">Role</span><span className="value">: Associate Consultant, Aligned Automation</span></div>
                    <div className="info-item"><span className="label">Age</span><span className="value">: {age}</span></div>
                    <div className="info-item"><span className="label">Education</span><span className="value">: B.Tech AI/ML — VIT Bhopal (CGPA 7.91) · Hiroshima Univ. (Research)</span></div>
                    <div className="info-item"><span className="label">Languages</span><span className="value">: English, Hindi, Japanese (Daily Conversation)</span></div>
                    <div className="info-item"><span className="label">OS</span><span className="value">: Arch Linux (btw) 🐧</span></div>
                    <div className="info-item"><span className="label">Location</span><span className="value">: India</span></div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 2rem;
    }

    .left-content {
        width: 100%;
        flex-shrink: 0;

        .photo-wrapper {
            position: relative;
            display: inline-block;
            width: 95%;

            img {
                width: 100%;
                height: 480px;
                object-fit: cover;
                object-position: center top;
                border-radius: 12px;
                display: block;
            }

            .photo-badge {
                position: absolute;
                bottom: 12px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                gap: 6px;
                background: rgba(13,15,23,0.9);
                border: 1px solid rgba(40,202,65,0.35);
                border-radius: 20px;
                padding: 5px 14px;
                white-space: nowrap;
                font-size: 0.78rem;
                color: #28ca41;
                backdrop-filter: blur(6px);

                .dot-green {
                    width: 7px;
                    height: 7px;
                    background: #28ca41;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
            }
        }
    }

    .right-content {
        width: 100%;

        .role-tag {
            display: inline-block;
            background: rgba(0,123,255,0.12);
            border: 1px solid rgba(0,123,255,0.3);
            color: var(--primary-color);
            border-radius: 6px;
            padding: 4px 12px;
            font-size: 0.78rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
            font-family: 'Source Code Pro', monospace;
        }

        h4 {
            font-size: 1.8rem;
            color: var(--white-color);
            margin-bottom: 0.2rem;
            span { font-size: 1.8rem; }
        }

        h2 {
            font-size: 1.05rem;
            color: var(--font-light-color);
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .paragraph {
            padding: 0.8rem 0 1rem;
            text-align: left;
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .expertise-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 1.2rem;

            span {
                background: rgba(0,123,255,0.08);
                border: 1px solid rgba(0,123,255,0.25);
                color: var(--primary-color);
                border-radius: 4px;
                padding: 3px 10px;
                font-size: 0.75rem;
                font-weight: 600;
            }
        }

        .about-info {
            display: flex;
            flex-direction: column;
            padding-bottom: 1.4rem;

            .info-item {
                display: flex;
                align-items: baseline;
                padding: 0.28rem 0;

                .label {
                    font-weight: 700;
                    min-width: 120px;
                    flex-shrink: 0;
                    font-size: 0.85rem;
                    color: var(--font-light-color);
                }
                .value {
                    color: var(--font-light-color);
                    font-size: 0.85rem;
                    opacity: 0.8;
                }
            }
        }
    }

    @keyframes pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(40,202,65,0.4); }
        50% { box-shadow: 0 0 0 5px rgba(40,202,65,0); }
    }
`;

export default ImageSection;
