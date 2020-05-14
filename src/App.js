import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
  align-items: center;
  text-align: center;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);
  
  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de seguros'
      />

      <ContenedorFormulario>
        <Form 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}

        <Summary 
          datos={datos}
        />

        {!cargando
          ?
            <Result 
              cotizacion={cotizacion}
            />
          : null
        }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
