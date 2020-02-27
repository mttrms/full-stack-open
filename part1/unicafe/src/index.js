import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = {
    good,
    neutral,
    bad
  };


  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      <Stats feedback={feedback} />
    </>
  );
};

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
);

const Stats = ({feedback}) => {
  const feedbackTotal = Object.values(feedback).reduce((sum, count) => sum + count, 0);
  const feedbackAverage = (feedback.good - feedback.bad) / feedbackTotal;
  const positivePercentage = feedback.good / feedbackTotal * 100;

  return (
    <>
      <h2>Statistics</h2>
      {
        feedbackTotal > 0 ?
          <ul>
            <li>Good: { feedback.good }</li>
            <li>Neutral: { feedback.neutral }</li>
            <li>Bad: { feedback.bad }</li>
            <li>All: { feedbackTotal }</li>
            <li>Average: { feedbackAverage.toFixed(2) }</li>
            <li>Percent Positive: { `${positivePercentage.toFixed(2)}%` }</li>
          </ul>
          :
        "No feedback given"
      }
    </>
  )
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
