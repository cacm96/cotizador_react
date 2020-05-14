import React from 'react';
import styled from '@emotion/styled';
import {primerMayus} from '../helpers';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;



const Summary = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;


    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primerMayus(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primerMayus(plan)}</li>
            </ul>
        </ContenedorResumen>
        
     );
}

Summary.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Summary;