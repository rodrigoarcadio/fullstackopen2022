import React from "react";
import Person from "../components/Person";

function Persons({ persons, filter }) {
  return (
    <div>
      {persons.map((person) => {
        if (person.name.includes(filter))
          return <Person name={person.name} number={person.number} />;
      })}
    </div>
  );
}

export default Persons;
