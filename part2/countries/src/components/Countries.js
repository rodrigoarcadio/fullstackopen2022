import React from "react";

function Countries({ countries, handleClick }) {
  return (
    <div>
      {/*showCountries*/}
      {countries.map((country, index) => (
        <>
          <div>
            <span>{country.name.common}</span>
            <button onClick={handleClick} id={index}>
              Show
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default Countries;
