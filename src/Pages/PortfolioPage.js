import React, { useState } from 'react';
import Title from '../Components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolios from '../data/portfolios';  // Add this import

const CertificationPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to render links
    const renderLinks = (link1, link2, link3) => {
        return (
            <div className="item-links">
                {link1 && (
                    <a href={link1} target="_blank" rel="noreferrer" title="GitHub">
                        GitHub
                    </a>
                )}
                {link2 && (
                    <a href={link2} target="_blank" rel="noreferrer" title="YouTube">
                        YouTube
                    </a>
                )}
                {link3 && (
                    <a href={link3} target="_blank" rel="noreferrer" title="Live Demo">
                        Live Demo
                    </a>
                )}
            </div>
        );
    };

    return (
        <MainLayout>
            <div className="portfolio-page">
                <Title title={'Portfolio'} span={'& Certifications'} />
                <InnerLayout>
                    <div className="portfolio-grid">
                        {portfolios.map((item) => (
                            <div key={item.id} className="portfolio-item">
                                <div 
                                    className="image-container"
                                    onClick={() => setSelectedImage(item.image)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="portfolio-image"
                                    />
                                </div>
                                <div className="item-content">
                                    <span className="category">{item.category}</span>
                                    <h3 className="item-title">{item.title}</h3>
                                    <p className="item-text">{item.text}</p>
                                    {renderLinks(item.link1, item.link2, item.link3)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                            <div className="modal-content">
                                <img
                                    src={selectedImage}
                                    alt="Large Preview"
                                    className="modal-image"
                                />
                            </div>
                        </div>
                    )}
                </InnerLayout>
            </div>

            <style jsx>{`
                .portfolio-page {
                    padding: 2rem;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    padding: 2rem 0;
                }

                .portfolio-item {
                    background-color: var(--background-dark-grey);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }

                .portfolio-item:hover {
                    transform: translateY(-5px);
                }

                .image-container {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 Aspect Ratio */
                    cursor: pointer;
                    overflow: hidden;
                }

                .portfolio-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .image-container:hover .portfolio-image {
                    transform: scale(1.05);
                }

                .item-content {
                    padding: 1.5rem;
                }

                .category {
                    background-color: var(--primary-color);
                    color: white;
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.8rem;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .item-title {
                    font-size: 1.2rem;
                    color: var(--white-color);
                    margin-bottom: 0.5rem;
                }

                .item-text {
                    color: var(--font-light-color);
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                }

                .item-links {
                    display: flex;
                    gap: 1rem;
                }

                .item-links a {
                    color: var(--font-light-color);
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                    padding: 0.3rem 0.8rem;
                    border: 1px solid var(--font-light-color);
                    border-radius: 4px;
                }

                .item-links a:hover {
                    color: var(--primary-color);
                    border-color: var(--primary-color);
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    max-width: 90vw;
                    max-height: 90vh;
                    position: relative;
                }

                .modal-image {
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                }

                @media screen and (max-width: 768px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </MainLayout>
    );
};

export default CertificationPage;