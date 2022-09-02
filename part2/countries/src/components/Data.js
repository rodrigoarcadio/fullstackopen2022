import React from "react";

function Data({ showData }) {
  return (
    <div>
      {/*showData*/}
      {showData.map((country) => (
        <>
          <h2>{country.name.common}</h2>
          <div>Capital : {country.capital}</div>
          <div>Population : {country.population}</div>
          <h3>Languages : </h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} />
        </>
      ))}
    </div>
  );
}

export default Data;
