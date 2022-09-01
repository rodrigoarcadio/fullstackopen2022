import React from "react";

function PersonForm({ submit, name, handleName, number, handleNumber }) {
  return (
    <>
      <form onSubmit={submit}>
        <div>
          name: <input value={name} onChange={handleName} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default PersonForm;
