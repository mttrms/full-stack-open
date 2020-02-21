import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half stack application development';
  const courseContents = {
    partOne: {
      name: 'Fundamentals of React',
      exercises: 10
    },
    partTwo: {
      name: 'Using props to pass data',
      exercises: 7 
    },
    partThree: {
      name: 'State of a component',
      exercises: 14
    }
  }

  return (
    <div>
      <Header name={course} />
      <Content courseContents={courseContents} />
      <Total courseContents={courseContents} />
    </div>
  )
};

const Header = ({ name }) => (
  <h1>{name}</h1>
);


const Content = ({ courseContents }) => (
  <>
    { Object.values(courseContents).map((course, i) => <p key={i}>{course.name} {course.exercises}</p>) }
  </>
);

const Total = ({ courseContents }) => {
  const sum = Object.values(courseContents).reduce((exerciseCount, course) =>
    exerciseCount + course.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

