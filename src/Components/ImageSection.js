import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import resumeLight from '../img/Arnavphoto.png';
import PrimaryButton from './PrimaryButton';

function ImageSection({theme}) {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={theme === 'light-theme' ? resumeLight : resume} alt="profile_photo"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Arnav Bhargava</span></h4>
                <h2>Python Programmer | 3+ Years of Experience</h2>
                <p className="paragraph">
                    I am Arnav Bhargava, A dedicated  Developer with over 3 years of valuable experience in Machine Learning and Data Science. Presently, I'm Currently Making Projects based on Stable Diffusion and Learning New Technologies.
                </p>
                
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Profile</p>
                    </div>
                    <div className="info">
                        <p>: Arnav Bhargava</p>
                        <p>: 21</p>
                        <p>: Indian </p>
                        <p>: English, Hindi </p>
                        <p>: New Delhi, India</p>
                        <p>: Python/ML Devloper </p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .right-content{
            .paragraph{
                text-align:left;
            }
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
            text-align:justify;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
