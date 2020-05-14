import React from 'react';
import './Spinner.css';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    display: inline-block;
`;

const Spinner = () => {
    return ( 
        <ContenedorResumen>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </ContenedorResumen>
        
     );
}
 
export default Spinner;