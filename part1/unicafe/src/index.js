import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return <h1>Give feedback</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0)
    return <h2>No feedback given</h2>;
  else
    return (
      <>
        <h1>statistics</h1>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />

        <div>all {props.good + props.neutral + props.bad}</div>
        <div>
          average {props.good / (props.good + props.neutral + props.bad)}
        </div>
        <div>
          positive{" "}
          {(100 * props.good) / (props.good + props.neutral + props.bad)} %
        </div>
      </>
    );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Title />
      <Button text="good" handleClick={increaseGood} />
      <Button text="neutral" handleClick={increaseNeutral} />
      <Button text="bad" handleClick={increaseBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
