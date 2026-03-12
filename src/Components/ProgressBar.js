import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text}) {
    const [animatedWidth, setAnimatedWidth] = useState('0%');

    useEffect(() => {
        const timer = setTimeout(() => setAnimatedWidth(width), 150);
        return () => clearTimeout(timer);
    }, [width]);

    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: animatedWidth}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1rem;
            min-width: 6.8rem;
            text-align: right;
            font-size: 0.78rem;
            opacity: 0.75;
            white-space: nowrap;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .45rem;
            background-color: var(--border-color);
            border-radius: 4px;
            overflow: hidden;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background: linear-gradient(90deg, var(--primary-color), var(--primary-color-2, var(--primary-color)));
                border-radius: 4px;
                transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    }
`;

export default ProgressBar;
