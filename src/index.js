import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';



ReactDOM.render(<CounterApp value={10} />, document.getElementById('app'));