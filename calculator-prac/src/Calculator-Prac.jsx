import React, { useState } from 'react';
import './app.css';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      if (input.trim() === "") return;
      
      const sanitizedResult = new Function(`return ${input}`)();
      setResult(sanitizedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display-screen">
        <div className="input-value">{input || "0"}</div>
        <div className="result-value">{result}</div>
      </div>
      
      <div className="keypad">
        <button onClick={handleClear} className="btn logic-btn">C</button>
        <button onClick={handleDelete} className="btn logic-btn">DEL</button>
        <button onClick={() => handleClick('/')} className="btn op-btn">/</button>
        <button onClick={() => handleClick('*')} className="btn op-btn">*</button>

        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('-')} className="btn op-btn">-</button>

        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('+')} className="btn op-btn">+</button>

        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={handleCalculate} className="btn equal-btn">=</button>

        <button onClick={() => handleClick('0')} className="btn zero-btn">0</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
      </div>
    </div>
  );
};

export default Calculator;