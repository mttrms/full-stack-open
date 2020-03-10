import React from 'react';

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

export default Course;
