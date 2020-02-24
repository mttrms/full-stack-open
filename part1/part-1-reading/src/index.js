import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = () => {
  const [ counter, setCounter ] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const setToValue = value => setCounter(value);

  return (
    <div>
      { counter }
      <br />
      <button onClick={() => setToValue(counter + 1)}>+1</button>
      <button onClick={() => setToValue(0)}>Reset</button>
    </div>
  )
}

const App = () => {
  const name = "Matt"
  const age = "100"
  return (
    <>
      <p>Hello there</p>
      <Hello name="You" age="0" />
      <Hello name={name} age={age} />
      <Counter />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
