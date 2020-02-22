import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7 
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
};

const Header = ({ name }) => (
  <h1>{name}</h1>
);


const Content = ({ parts }) => (
  <>
    { parts.map((course, i) => <p key={i}>{course.name} {course.exercises}</p>) }
  </>
);

const Total = ({ parts }) => {
  const sum = parts.reduce((exerciseCount, course) => exerciseCount + course.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

