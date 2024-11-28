import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import certificates from '../data/certification';
import {MainLayout, InnerLayout} from '../styles/Layouts';


function CertificationPage() {
    return (
            <MainLayout>
            <CertStyled>
            <Title title={'Certification'} span={'Certification'} />
                <InnerLayout className={'cert'}>
                    {
                        certificates.map((cert)=>{
                            return <div key={cert.id} className={'cert-item'}>
                                <div className="image">
                                    <img src={cert.image} alt={`certification_image_${cert.id}`}/>
                                </div>
                                <div className="title">
                                    <a href={cert.link} target="_blank" rel="noreferrer">
                                        {cert.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </CertStyled>
        </MainLayout>
    )
}
const CertStyled = styled.div`
    .cert{
        display: grid;
        grid-template-columns: repeat(2, 1fr); // Ensure two items per row
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        justify-items: center; // Center items within the grid
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr); // Adjust for smaller screens
        }
        .cert-item{
            background-color: var(--background-dark-grey);
            padding: 1rem; // Increased padding
            width: 500px; // Increased width
            height: 450px; // Increased height
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); // Added box shadow for better presentation
            border-radius: 10px; // Added border radius for rounded corners
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: 1rem; // Increased padding-bottom
            img{
                width: 100%;
                height: auto;
                max-height: 75%; // Adjusted max-height
                object-fit: contain;
                transition: all .3s ease-in-out; // Adjusted transition duration
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.05); // Adjusted scale
                }
            }
        }
        .title{
            a{
                font-size: 2rem; // Increased font size
                padding: 1.5rem 0; // Increased padding
                color: var(--white-color);
                cursor: pointer;
                transition: all .3s ease-in-out; // Adjusted transition duration
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default CertificationPage;