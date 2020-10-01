import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      setCountries(
        data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }))
      );
    };

    getCountries();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__form">
          <Select
            variant="outlined"
            value={selectedCountry}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Wolrdwide</MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* Map */}
      {/* InfoTable */}
      {/* Graph */}
    </div>
  );
}

export default App;
