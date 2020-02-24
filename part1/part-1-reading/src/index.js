import React from 'react';
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

const App = () => {
  const name = "Matt"
  const age = "100"
  return (
    <>
      <p>Hello there</p>
      <Hello name="You" age="0" />
      <Hello name={name} age={age} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
