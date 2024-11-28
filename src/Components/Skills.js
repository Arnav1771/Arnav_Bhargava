import React from 'react'
import styled from 'styled-components';
import {InnerLayout, InnerLayoutSingle} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import SkillSphere from './SkillSphere';
import './styles.css'
function Skills({theme}) {
    return (
        <SkillsStyled>
            <Title title={'Skills'} span={'skills'} />
            <div style={{display:'flex'}} className='skillMain'>
                <div style={{width:'40%'}} className="skillText">
                    <InnerLayoutSingle>
                        <div className='skillsSingle'>
                            <ProgressBar 
                                title={'PYTHON'}
                                width={'90%'}
                                text={'90%'}
                            />
                            <ProgressBar 
                                title={'AI/ML'}
                                width={'85%'}
                                text={'85%'}
                            />
                            <ProgressBar 
                                title={'R'}
                                width={'70%'}
                                text={'70%'}
                            />
                            <ProgressBar 
                                title={'GOOGLE CLOUD'}
                                width={'65%'}
                                text={'65%'}
                            />
                            <ProgressBar 
                                title={'SQL'}
                                width={'75%'}
                                text={'75%'}
                            />
                        </div>
                    </InnerLayoutSingle>
                </div>
                <SkillSphere theme={theme}/>
            </div>
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'Python'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'R'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'HTML'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'70%'}
                        text={'70%'}
                    />
                </div>
                <div>
                    <br/> <br/>
                    <div>
                        <span className="seo-heading">Other Skills:</span><br/>
                        <p className="seo-link"><br/>
                            MongoDB, Docker, Artificial Intelligence / Machine Learning, MySQL, R, Adobe Premeire Pro, Adobe Photoshop, Flask, NPM, Git
                        </p><br/>
                        <span className="seo-heading">Third Party Libraries:</span><br/><br/>
                        <p className="seo-link">
                            Tensorflow , keras , matplotlib , seaborn , pandas , numpy
                        </p><br/>
                        <div>

                            <p className="seo-heading">Published Research Paper:</p><br/>
                            <p>
                                <a href="https://ijsret.com/wp-content/uploads/2023/03/IJSRET_V9_issuue2_132.pdf" className="seo-link">
                                    Image Classification for Dogs and Cats Using CNN
                                </a>
                                <br />
                                <i className="seo-note seo-link">
                                    Springer Natural Applied Sciences, Switzerland AG 2020 |{' '}
                                    <a href="https://doi.org/10.1007/s42452-020-2815-z" className="seo-note seo-link">
                                        https://doi.org/10.1007/s42452-020-2815-z
                                    </a>
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}



const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .skillsSingle{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
