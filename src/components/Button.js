import React, { useContext } from 'react';
import '../css/Button.css';
import SolContext from '../context/SolutionContext';

const Button = () => {
  const setEq = useContext(SolContext);

  return (
    <div>
      <div>
        <button onClick={() => setEq('(')}>(</button>
        <button onClick={() => setEq(')')}>)</button>
        <button onClick={() => setEq('backspace')}>C</button>
        <button onClick={() => setEq('clear')}>AC</button>
      </div>
      <div>
        <button onClick={() => setEq(9)}>9</button>
        <button onClick={() => setEq(8)}>8</button>
        <button onClick={() => setEq(7)}>7</button>
        <button onClick={() => setEq('/')}>/</button>
      </div>
      <div>
        <button onClick={() => setEq(6)}>6</button>
        <button onClick={() => setEq(5)}>5</button>
        <button onClick={() => setEq(4)}>4</button>
        <button onClick={() => setEq('*')}>x</button>
      </div>
      <div>
        <button onClick={() => setEq(3)}>3</button>
        <button onClick={() => setEq(2)}>2</button>
        <button onClick={() => setEq(1)}>1</button>
        <button onClick={() => setEq('-')}>-</button>
      </div>
      <div>
        <button onClick={() => setEq('.')}>.</button>
        <button onClick={() => setEq(0)}>0</button>
        <button onClick={() => setEq('=')}>=</button>
        <button onClick={() => setEq('+')}>+</button>
      </div>
    </div>
  );
};

export default Button;
