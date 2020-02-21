import React from 'react';
import ReactDOM from 'react-dom';

const Hello = props => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
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
