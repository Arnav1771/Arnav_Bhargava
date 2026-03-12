import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'06/2025 - 09/2025'}
                        title={'Associate Software Engineer'}
                        subTitle={'Aligned Automation'}
                        text={'Contributed to software development and automation workflows as part of the engineering team.'}
                    />
                    <ResumeItem
                        year={'09/2023 - 01/2024'}
                        title={'Quality Engineer Intern'}
                        subTitle={'Naviwise'}
                        text={'Conducted thorough quality assurance testing on software products. Collaborated with development teams to identify and resolve bugs. Improved product quality by implementing automated testing procedures.'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'10/2025 - 03/2026'} 
                        title={'Research Student in Informatics and Data Science'} 
                        subTitle={'Hiroshima University, Japan'}
                        text={'Conducting research in the field of Informatics and Data Science as a Research Student.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2025'} 
                        title={'B.Tech in Computer Science Specialization in Artificial Intelligence and Machine Learning'} 
                        subTitle={'VIT Bhopal University India'}
                        link={'https://vit.ac.in/'}
                        text={'Completed B.Tech degree with CGPA - 7.91.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
