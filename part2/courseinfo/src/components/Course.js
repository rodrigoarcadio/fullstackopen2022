import React from "react";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  const parts = course.parts;

  return (
    <>
      <div>
        {parts.map((part) => (
          <Part name={part.name} exercises={part.exercises} />
        ))}
      </div>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      {name} {exercises}
    </div>
  );
};

const Total = ({ course }) => {
  const parts = course.parts;

  const total = parts
    .map((part) => part.exercises)
    .reduce((s, p) => {
      return s + p;
    });

  return (
    <div>
      <strong>Total of {total} exercises</strong>
    </div>
  );
};

function Course({ course }) {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default Course;
