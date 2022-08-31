import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [index, setIndex] = useState(0);

  const nextSelected = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const incrementVote = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 });
    findMax();
  };

  const findMax = () => {
    const values = Object.values(points);
    const max = Math.max(...values);
    const ind = values.indexOf(max);
    setIndex(ind);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button handleClick={incrementVote} text="vote" />
      <Button handleClick={nextSelected} text="next anecdote" />
      <h2>Anecdote with more votes</h2>
      <div>{anecdotes[index]}</div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
