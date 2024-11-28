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
    year={'07/2024 - 10/2024'} 
    title={'Data Science and Analytics Internship'}
    subTitle={'Zidio Developement'}
    text={`Built machine learning models using TensorFlow and Keras for predictive analytics.`} 
    />
      <ResumeItem 
        year={'09/2023 - 01/2024'} 
        title={'Quality Engineer Intern'}
        subTitle={'Naviwise'}
        text={`Conducted thorough quality assurance testing on software products. Collaborated with development teams to identify and resolve bugs. Improved product quality by implementing automated testing procedures.`} 
      />
      <ResumeItem 
        year={'2023'} 
        title={'MERN Full Stack Intern'}
        subTitle={'Ethnus'}
        text={`Developed full-stack web applications using MongoDB, Express.js, React, and Node.js. Implemented RESTful APIs and integrated front-end with back-end services. Gained hands-on experience in modern web development practices and tools.`} 
      />
      <ResumeItem 
        year={'2022 - 2023'} 
        title={'Virtual Job Simulation'}
        subTitle={['Walmart', 'Cognizant', 'Accenture', 'British Airways', 'Tata', 'Electronic Arts']}
        text={`Participated in virtual internship programs, gaining insights into corporate practices. Completed industry-specific projects and case studies. Enhanced problem-solving skills and business acumen through real-world scenarios.`} 
      />
      <ResumeItem 
        year={'2023'} 
        title={'Business Analyst Intern'}
        subTitle={'Qlik'}
        text={`Analyzed business data using Qlik's business intelligence tools. Created interactive dashboards and reports for data-driven decision making. Collaborated with stakeholders to identify key performance indicators and metrics.`} 
      />
      <ResumeItem 
        year={'08/2022 - 09/2022'} 
        title={'Marketing Intern'}
        subTitle={'Pregard Ltd'}
        text={`Assisted in developing marketing strategies for various products. Conducted market research and analyzed competitor activities. Contributed to social media content creation and management.`} 
      />
      
    </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - 2025'} 
                        title={'B.Tech in Computer Science Specialization in Artificial Intelligence and Machine Learning'} 
                        subTitle={'VIT Bhopal University India'}
                        link={'https://vit.ac.in/'}
                        text={'I had completed my B.Tech degree with CGPA - 7.74.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Maharaja Aggarsain Adarsh Public School'}
                        subTitle={'PitamPura, Delhi'}
                        link={'https://www.maaps.net.in/'}
                        text={'I had finished my High School with 76.8% in 12th CBSE.'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'High School'}
                        subTitle={'Maharaja Aggsain Adarsh Public School'}
                        link={'https://www.maaps.net.in/'}
                        text={'I had completed my Middle School with 80% in 10th CBSE.'} 
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
