import React, { useState } from 'react'
import propTypes from 'prop-types'

import '../styles/components/App.css'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);


    const handleAdd = () => {
        
        setCounter( counter +1)
    }

    return (
      <>
        
        <h1>Counter App</h1>
        
        <h2>{ counter }</h2>
      
        <button type="button" onClick={handleAdd}>+1</button>
      </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

export default CounterApp