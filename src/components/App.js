import React, { useState } from 'react';
import '../css/App.css';
import Button from './Button.js';
import { SolProvider } from '../context/SolutionContext.js';

const App = () => {
  const [equation, setEquation] = useState('');
  const [dispaly, setDisplay] = useState('0');

  const setEq = (exp) => {
    if (exp === '=') {
      let total = eval(equation);
      setEquation(total);
      setDisplay(total);
    } else if (exp === 'backspace') {
      let clean = equation.substring(0, equation.length-1);
      setEquation(clean);
    } else if (exp === 'clear') {
      setEquation('');
      setDisplay('0');
    } else {
      setEquation(prev => prev + exp);
    }
  };

  return (
    <div className="container">
      <div className="outline">
        <div className="equation">
          {equation}
        </div>
        <div className="display">
          {dispaly}
        </div>
        <SolProvider value={setEq}>
          <Button />
        </SolProvider>
      </div>
    </div>
  );
};

export default App;
