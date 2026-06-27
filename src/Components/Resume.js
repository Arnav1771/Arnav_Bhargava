import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />;
    const school = <SchoolIcon />;
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'06/2025 – Present'}
                        title={'Associate Consultant'}
                        subTitle={'Aligned Automation'}
                        text={'Designing and deploying production-grade agentic AI workflows for enterprise clients. Building LLM-powered automation pipelines using n8n, LangChain, and custom Python toolchains. Responsible for end-to-end architecture of intelligent process automation solutions.'}
                    />
                    <ResumeItem
                        year={'09/2023 – 01/2024'}
                        title={'Quality Engineer Intern'}
                        subTitle={'Naviwise'}
                        text={'Implemented automated testing procedures using Python and Selenium. Identified and resolved critical regression bugs across multiple product releases. Collaborated with the engineering team to improve test coverage by 40%.'}
                    />
                </div>

                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'10/2025 – 03/2026'}
                        title={'Research Student — Informatics & Data Science'}
                        subTitle={'Hiroshima University, Japan'}
                        text={'Conducting research in AI/ML applied to complex data systems. Collaborated with faculty on multi-modal deep learning and data science methodologies in a Japanese-language research environment.'}
                    />
                    <ResumeItem
                        year={'2021 – 2025'}
                        title={'B.Tech — Computer Science, Specialization in AI & ML'}
                        subTitle={'VIT Bhopal University, India'}
                        link={'https://vit.ac.in/'}
                        text={'CGPA: 7.91. Published research on CNN-based image classification (IJSRET · Springer). Led hackathon teams, completed CS50x, CS50 AI, and CS50 R certifications from Harvard.'}
                    />
                </div>

                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={'Certifications & Achievements'} />
                </div>
                <div className="cert-grid">
                    {[
                        { label: 'CS50x — Introduction to Computer Science', org: 'Harvard University', href: 'https://cs50.harvard.edu/certificates/1657453c-63ae-4895-a1f2-31b6c19387d8' },
                        { label: 'CS50 AI with Python', org: 'Harvard University', href: 'https://cs50.harvard.edu/certificates/b335b1f7-89a6-41c5-88aa-e41429c0ff8c' },
                        { label: 'CS50 R Programming', org: 'Harvard University', href: 'https://cs50.harvard.edu/certificates/56b1e036-36c0-4e81-b457-d3de8591fb5d' },
                        { label: 'Cognizant AI Virtual Internship', org: 'Forage / Cognizant', href: 'https://github.com/Arnav1771/Cognizant_Ai_Virtual_Internship' },
                        { label: 'British Airways Data Science', org: 'Forage / British Airways', href: 'https://github.com/Arnav1771/British_Airways_Virtual_Internship' },
                        { label: 'TATA Data Visualisation', org: 'Forage / Tata Group', href: 'https://github.com/Arnav1771/TATA_Forage_Virtual_Internship' },
                        { label: 'Published Research — CNN Image Classification', org: 'IJSRET · Springer', href: 'https://ijsret.com/wp-content/uploads/2023/03/IJSRET_V9_issuue2_132.pdf' },
                    ].map((cert) => (
                        <a
                            key={cert.label}
                            href={cert.href}
                            className="cert-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="cert-label">{cert.label}</span>
                            <span className="cert-org">{cert.org}</span>
                        </a>
                    ))}
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title { padding-bottom: 3rem; }
    .u-small-title-margin { margin-top: 4rem; }
    .resume-content { border-left: 2px solid var(--border-color); }

    .cert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 0.8rem;
        margin-top: 1rem;
    }

    .cert-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0.9rem 1.1rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background: var(--background-dark-grey);
        transition: all 0.2s ease;
        text-decoration: none;

        &:hover {
            border-color: var(--primary-color);
            background: rgba(0,123,255,0.06);
            transform: translateY(-2px);
        }

        .cert-label {
            color: var(--white-color);
            font-size: 0.84rem;
            font-weight: 600;
            line-height: 1.3;
        }

        .cert-org {
            color: var(--primary-color);
            font-size: 0.72rem;
            opacity: 0.85;
        }
    }
`;

export default Resume;
