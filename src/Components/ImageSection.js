import React from 'react'
import styled from 'styled-components';
import formalPhoto from '../img/Arnav_formal.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection({theme}) {
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
                <img src={formalPhoto} alt="profile_photo"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Arnav Bhargava</span></h4>
                <h2>Python Programmer | 3+ Years of Experience</h2>
                <p className="paragraph">
                    I am Arnav Bhargava, A dedicated  Developer with over 3 years of valuable experience in Machine Learning and Data Science. Presently, I'm Currently Making Projects based on Stable Diffusion and Learning New Technologies.
                </p>
                
                <div className="about-info">
                    <div className="info-item"><span className="label">Full Name</span><span className="value">: Arnav Bhargava</span></div>
                    <div className="info-item"><span className="label">Age</span><span className="value">: {age}</span></div>
                    <div className="info-item"><span className="label">Nationality</span><span className="value">: Indian</span></div>
                    <div className="info-item"><span className="label">Languages</span><span className="value">: English, Hindi, Japanese (Daily Conversation)</span></div>
                    <div className="info-item"><span className="label">Location</span><span className="value">: India</span></div>
                    <div className="info-item"><span className="label">Profile</span><span className="value">: Python/ML Developer, AI Developer, Game Tester, QA Engineer</span></div>
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
            height: 480px;
            object-fit: cover;
            object-position: center;
            border-radius: 8px;
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
            flex-direction: column;
            padding-bottom: 1.4rem;
            .info-item{
                display: flex;
                align-items: baseline;
                padding: .3rem 0;
                .label{
                    font-weight: 600;
                    min-width: 130px;
                    flex-shrink: 0;
                }
                .value{
                    color: var(--font-light-color);
                }
            }
        }
    }
`;
export default ImageSection;
