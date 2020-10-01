import "./CountrySelector.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function CountrySelector({ onCountryChange }) {
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

  const handleCountryChange = async (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    onCountryChange(countryCode);
  };

  return (
    <div className="countrySelector">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="countrySelector__form">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <MenuItem value="worldwide">Wolrdwide</MenuItem>
          {countries.map((country, idx) => (
            <MenuItem key={idx} value={country.value}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelector;
