import React from 'react';
import propTypes from 'prop-types';


const App = ({saludo, subtitulo}) => {

    

    return (
      <>
        <h1> 
          {' '}
          { saludo }
        </h1>

        <p>{ subtitulo }</p>
      </>
    );
};

App.propTypes = {
    saludo: propTypes.string.isRequired
}
App.defaultProps = {
  subtitulo: 'Soy un Subtitulo'
}

export default App;