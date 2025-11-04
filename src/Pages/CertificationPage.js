import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import certificates from '../data/certification';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';

function CertificationPage() {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedCert, setSelectedCert] = useState(null);
    const [loading, setLoading] = useState(true);

    const categories = ['all', ...new Set(certificates.map(cert => cert.by.split(' - ')[0].toLowerCase()))];

    useEffect(() => {
        // Simulate loading of images
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSort = (certs) => {
        switch(sortBy) {
            case 'newest':
                return [...certs].sort((a, b) => new Date(`${b.month} ${b.date}`) - new Date(`${a.month} ${a.date}`));
            case 'oldest':
                return [...certs].sort((a, b) => new Date(`${a.month} ${a.date}`) - new Date(`${b.month} ${b.date}`));
            case 'a-z':
                return [...certs].sort((a, b) => a.title.localeCompare(b.title));
            case 'z-a':
                return [...certs].sort((a, b) => b.title.localeCompare(a.title));
            default:
                return certs;
        }
    };

    const filteredCertificates = handleSort(
        certificates.filter(cert => 
            (filter === 'all' || cert.by.toLowerCase().includes(filter)) &&
            (cert.title.toLowerCase().includes(search.toLowerCase()) ||
             cert.by.toLowerCase().includes(search.toLowerCase()))
        )
    );

    const sortOptions = [
        { value: 'newest', label: 'Newest First' },
        { value: 'oldest', label: 'Oldest First' },
        { value: 'a-z', label: 'A-Z' },
        { value: 'z-a', label: 'Z-A' }
    ];

    return (
        <MainLayout>
            <CertStyled>
                <Title title={'Certifications'} span={'Achievements'} />
                
                <div className="controls">
                    <div className="search-box">
                        <SearchIcon />
                        <input 
                            type="text" 
                            placeholder="Search certificates..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button className="clear-search" onClick={() => setSearch('')}>
                                <CloseIcon />
                            </button>
                        )}
                    </div>

                    <div className="view-controls">
                        <select 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="" disabled>Sort by</option>
                            {sortOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <div className="view-toggle">
                            <button 
                                className={viewMode === 'grid' ? 'active' : ''} 
                                onClick={() => setViewMode('grid')}
                            >
                                <GridViewIcon />
                            </button>
                            <button 
                                className={viewMode === 'list' ? 'active' : ''} 
                                onClick={() => setViewMode('list')}
                            >
                                <ViewListIcon />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="filter-container">
                    {categories.map((category) => (
                        <button 
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <InnerLayout className={`cert ${viewMode}`}>
                    {loading ? (
                        <div className="loading-grid">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="cert-item skeleton"></div>
                            ))}
                        </div>
                    ) : filteredCertificates.length === 0 ? (
                        <div className="no-results">
                            <h3>No certificates found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        filteredCertificates.map((cert) => (
                            <div key={cert.id} className={'cert-item'} onClick={() => setSelectedCert(cert)}>
                                <div className="image">
                                    <img 
                                        src={cert.image} 
                                        alt={`certification_image_${cert.id}`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="cert-content">
                                    <h3 className="title">
                                        <a href={cert.link} target="_blank" rel="noreferrer">
                                            {cert.title}
                                        </a>
                                    </h3>
                                    <div className="meta">
                                        <span className="issuer">{cert.by}</span>
                                        <span className="date">{cert.month} {cert.date}</span>
                                    </div>
                                    <div className="view-cert">
                                        <a href={cert.link} target="_blank" rel="noreferrer" className="view-btn">
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </InnerLayout>

                {selectedCert && (
                    <div className="modal" onClick={() => setSelectedCert(null)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setSelectedCert(null)}>
                                <CloseIcon />
                            </button>
                            <img src={selectedCert.image} alt={selectedCert.title} />
                            <h2>{selectedCert.title}</h2>
                            <p className="issuer">{selectedCert.by}</p>
                            <p className="date">Completed: {selectedCert.month} {selectedCert.date}</p>
                            <a 
                                href={selectedCert.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="view-btn"
                            >
                                Verify Certificate
                            </a>
                        </div>
                    </div>
                )}
            </CertStyled>
        </MainLayout>
    )
}
const CertStyled = styled.div`
    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
        padding: 0 1rem;
        flex-wrap: wrap;
        gap: 1rem;

        .search-box {
            flex: 1;
            max-width: 400px;
            display: flex;
            align-items: center;
            background: var(--background-dark-grey);
            border-radius: 25px;
            padding: 0.5rem 1rem;
            border: 1px solid var(--border-color);

            svg {
                color: var(--font-light-color);
                margin-right: 0.5rem;
            }

            input {
                flex: 1;
                background: none;
                border: none;
                color: var(--font-light-color);
                font-size: 0.9rem;
                outline: none;

                &::placeholder {
                    color: var(--font-light-color);
                    opacity: 0.7;
                }
            }

            .clear-search {
                background: none;
                border: none;
                color: var(--font-light-color);
                cursor: pointer;
                padding: 0;
                display: flex;
                align-items: center;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }

        .view-controls {
            display: flex;
            align-items: center;
            gap: 1rem;

            .sort-select {
                background: var(--background-dark-grey);
                color: var(--font-light-color);
                border: 1px solid var(--border-color);
                padding: 0.5rem 1rem;
                border-radius: 25px;
                cursor: pointer;
                font-size: 0.9rem;
                outline: none;

                option {
                    background: var(--background-dark-grey);
                }
            }

            .view-toggle {
                display: flex;
                gap: 0.5rem;

                button {
                    background: var(--background-dark-grey);
                    border: 1px solid var(--border-color);
                    padding: 0.5rem;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--font-light-color);
                    transition: all 0.3s ease;

                    &:hover, &.active {
                        background: var(--primary-color);
                        border-color: var(--primary-color);
                        color: white;
                    }
                }
            }
        }
    }
    .filter-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem 0;
        padding: 0 1rem;

        .filter-btn {
            background: var(--background-dark-grey);
            color: var(--white-color);
            border: 1px solid var(--border-color);
            padding: 0.5rem 1rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: capitalize;
            font-size: 0.9rem;

            &:hover {
                background: var(--primary-color);
                border-color: var(--primary-color);
            }

            &.active {
                background: var(--primary-color);
                border-color: var(--primary-color);
            }
        }
    }

    .cert {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1rem;

        .cert-item {
            background: var(--background-dark-grey);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border-color);

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

                .image img {
                    transform: scale(1.05);
                }
            }

            .image {
                width: 100%;
                height: 200px;
                overflow: hidden;
                border-bottom: 1px solid var(--border-color);

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
            }

            .cert-content {
                padding: 1.5rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .title {
                    margin: 0 0 1rem 0;
                    
                    a {
                        color: var(--white-color);
                        font-size: 1.2rem;
                        text-decoration: none;
                        line-height: 1.4;
                        transition: color 0.3s ease;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;

                        &:hover {
                            color: var(--primary-color);
                        }
                    }
                }

                .meta {
                    margin-bottom: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    .issuer {
                        color: var(--font-light-color);
                        font-size: 0.9rem;
                    }

                    .date {
                        color: var(--font-light-color);
                        font-size: 0.8rem;
                    }
                }

                .view-cert {
                    .view-btn {
                        display: inline-block;
                        padding: 0.5rem 1rem;
                        background: var(--primary-color);
                        color: white;
                        border-radius: 25px;
                        text-decoration: none;
                        font-size: 0.9rem;
                        transition: all 0.3s ease;
                        text-align: center;

                        &:hover {
                            background: var(--white-color);
                            color: var(--primary-color);
                        }
                    }
                }
            }
        }
    }

    .loading-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1rem;

        .skeleton {
            background: var(--background-dark-grey);
            border-radius: 15px;
            height: 400px;
            position: relative;
            overflow: hidden;

            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                transform: translateX(-100%);
                background-image: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0) 0,
                    rgba(255, 255, 255, 0.05) 20%,
                    rgba(255, 255, 255, 0.1) 60%,
                    rgba(255, 255, 255, 0)
                );
                animation: shimmer 2s infinite;
            }
        }
    }

    .no-results {
        text-align: center;
        padding: 3rem;
        color: var(--font-light-color);

        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        p {
            opacity: 0.7;
        }
    }

    .cert.list {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .cert-item {
            display: grid;
            grid-template-columns: 200px 1fr;
            height: auto;
            max-height: 200px;

            .image {
                height: 100%;
            }

            .cert-content {
                display: grid;
                grid-template-rows: auto auto 1fr;
            }
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 2rem;

        .modal-content {
            background: var(--background-dark-grey);
            padding: 2rem;
            border-radius: 15px;
            max-width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;

            .close-modal {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: var(--font-light-color);
                cursor: pointer;
                padding: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--primary-color);
                }
            }

            img {
                max-width: 100%;
                height: auto;
                margin-bottom: 1.5rem;
                border-radius: 10px;
            }

            h2 {
                color: var(--white-color);
                margin-bottom: 1rem;
            }

            .issuer {
                color: var(--font-light-color);
                margin-bottom: 0.5rem;
            }

            .date {
                color: var(--font-light-color);
                margin-bottom: 1.5rem;
                font-size: 0.9rem;
            }

            .view-btn {
                display: inline-block;
                padding: 0.8rem 1.5rem;
                background: var(--primary-color);
                color: white;
                border-radius: 25px;
                text-decoration: none;
                font-size: 1rem;
                transition: all 0.3s ease;
                text-align: center;

                &:hover {
                    background: var(--white-color);
                    color: var(--primary-color);
                }
            }
        }
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }

    @media screen and (max-width: 768px) {
        .cert {
            grid-template-columns: 1fr;
        }

        .filter-container {
            .filter-btn {
                font-size: 0.8rem;
                padding: 0.4rem 0.8rem;
            }
        }

        .controls {
            flex-direction: column;
            align-items: stretch;

            .search-box {
                max-width: 100%;
            }
        }

        .cert.list .cert-item {
            grid-template-columns: 1fr;
            max-height: none;

            .image {
                height: 200px;
            }
        }

        .modal .modal-content {
            padding: 1rem;
        }
    }
`;

export default CertificationPage;