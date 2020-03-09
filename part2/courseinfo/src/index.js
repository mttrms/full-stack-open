import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
};

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content course={course} />
    <Total course={course} />
  </>
);

const Header = ({ name }) => (
  <h1>{name}</h1>
);


const Content = ({ course }) => (
  <>
    { course.parts.map((course) => <p key={course.id}>{course.name} {course.exercises}</p>) }
  </>
);

const Total = ({ course }) => {
  const sum = course.parts.reduce((exerciseCount, course) => exerciseCount + course.exercises, 0)
  return (
    <p><strong>total of {sum} exercises</strong></p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

