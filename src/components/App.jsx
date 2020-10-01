import React from 'react';
import propTypes from 'prop-types'

import '../styles/components/App.css';

const App = ({saludo}) => {

    

    return (
      <>
        <h1> 
          {' '}
          { saludo }
        </h1>

        <p>Mi primera aplicasion</p>
      </>
    );
};

App.propTypes = {
    saludo: propTypes.string.isRequired
}

export default App;