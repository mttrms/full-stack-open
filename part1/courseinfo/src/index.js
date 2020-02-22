import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
};

const Header = ({ name }) => (
  <h1>{name}</h1>
);


const Content = ({ course }) => (
  <>
    { course.parts.map((course, i) => <p key={i}>{course.name} {course.exercises}</p>) }
  </>
);

const Total = ({ course }) => {
  const sum = course.parts.reduce((exerciseCount, course) => exerciseCount + course.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

