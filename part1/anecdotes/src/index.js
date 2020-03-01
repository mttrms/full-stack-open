import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [selected, setSelected] = useState(0);
  const randomNum = () => Math.floor(Math.random() * anecdotes.length);

  return (
    <div>
      {props.anecdotes[selected].text}
      <br />
      <button onClick={() => setSelected(randomNum)}>get random</button>
    </div>
  )
};

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
