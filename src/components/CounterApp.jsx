import React, { useState } from 'react'
import propTypes from 'prop-types'


const CounterApp = ({value = 10}) => {


    const [counter, setCounter] = useState(value);


    const handleAdd = () => {
        setCounter( counter +1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handleSubstract = () => {
        setCounter( counter -1)
    }

    return (
      <>
        
        <h1>Counter App</h1>
        
        <h2>{ counter }</h2>
      
        <button type="button" onClick={handleAdd}>+1</button>
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="button" onClick={handleSubstract}>-1</button>

      </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

export default CounterApp