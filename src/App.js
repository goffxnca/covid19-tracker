import React, { useEffect, useState } from "react";
import "./App.css";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

function App() {
  const [countryInfo, setcountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("worldwide");

  const fetchCountryInfo = (country) => {
    const suffixUrl = country === "worldwide" ? "all" : `countries/${country}`;
    const fullUrl = `https://disease.sh/v3/covid-19/${suffixUrl}`;

    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        setcountryInfo(data);
      });
  };

  useEffect(() => {
    //Show initial wordwide cases info
    fetchCountryInfo(selectedCountryCode);

    //List all country to dropdown
    const getCountries = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      setCountries(
        data.map((country) => ({
          countryCode: country.countryInfo.iso2,
          countryName: country.country,
          cases: country.cases,
        }))
      );
    };

    getCountries();
  }, []);

  const handleCountryChange = async (event) => {
    const countryCode = event.target.value;
    setSelectedCountryCode(countryCode);
    fetchCountryInfo(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID 19 TRACKER</h1>
          <FormControl className="countrySelector__form">
            <Select
              variant="outlined"
              value={selectedCountryCode}
              onChange={handleCountryChange}
            >
              <MenuItem value="worldwide">Wolrdwide</MenuItem>
              {countries.map((country, idx) => (
                <MenuItem key={idx} value={country.countryCode}>
                  {country.countryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>

        <Map />
      </div>

      <div className="app__right">
        <Card>
          <CardContent>
            <h2>Live Cases by Country</h2>
            <Table countries={countries} />
            <h2>Worldwide new cases</h2>
          </CardContent>
        </Card>

        {/* InfoTable */}
        {/* Graph */}
      </div>
    </div>
  );
}

export default App;
