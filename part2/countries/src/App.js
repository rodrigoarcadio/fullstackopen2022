import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Countries from "./components/Countries";
import Data from "./components/Data";

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");
  const [showData, setShowData] = useState([]);
  const [capital, setCapital] = useState("");

  const url = "https://restcountries.com/v3.1/all";

  const hook1 = () => {
    //console.log("effect");
    axios.get(url).then((response) => {
      //console.log("promise fulfilled");
      setCountries(response.data);
    });
  };

  useEffect(hook1, []);

  const handleFilterChange = (event) => {
    let newFilter = event.target.value;
    setFilter(newFilter);
    let newError = "";

    let array = [];

    if (newFilter.length > 0) {
      for (const country of countries) {
        if (country.name.common.includes(newFilter)) array.push(country);
      }
    } else {
      setShowCountries([]);
      setError("");
      setShowData([]);
      setCapital("");
    }

    if (array.length < 10) {
      setShowCountries(array);
      setError("");
      if (array.length == 1) {
        setShowData(array);
        setShowCountries([]);

        const newCapital = array[0].capital[0];
        setCapital(newCapital);
      }
    } else {
      setShowCountries([]);
      setShowData([]);
      newError = "too many countries to show";
      setError(newError);
      setCapital("");
    }
  };

  const handleClick = (event) => {
    let index = event.target.id;

    const item = showCountries[index];

    setCapital(item.capital[0]);

    setShowData([].concat(item));
  };

  return (
    <>
      <div>
        Filter Countries :
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <Countries countries={showCountries} handleClick={handleClick} />
      <div>{error}</div>
      <Data showData={showData} />
      <Weather capital={capital} />
    </>
  );
}

export default App;
