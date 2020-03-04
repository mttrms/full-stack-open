import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const randomNum = () => Math.floor(Math.random() * anecdotes.length);
  const highestVoteCount = Math.max(...votes);
  const highestVoteCountIdx = votes.indexOf(Math.max(...votes));
  const topVotedAnecdote = anecdotes[highestVoteCountIdx];

  const upvote = id => {
    const copy = [...votes];
    copy[id] += 1;
    setVotes(copy);
  }

  return (
    <div>
      {props.anecdotes[selected].text}
      <br />
      Votes: {votes[selected]}
      <br />
      <button onClick={() => setSelected(randomNum)}>get random</button>
      <button onClick={() => upvote(selected)}>Vote</button>
      <h2>Anecdote with most votes</h2>
      {
        highestVoteCount === 0 ?
          <p>No votes yet</p> :
          <>
            <p>{topVotedAnecdote.text}</p>
            <p>has {highestVoteCount} votes</p>
          </>
      }
    </div>
  )
};

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  },
  {
    text: 'Premature optimization is the root of all evil.',
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  }
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
