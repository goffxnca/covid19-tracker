import { Card, CardContent, Table } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import CountrySelector from "./CountrySelector";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countryInfo, setcountryInfo] = useState({});
  const [tableData, setTableData] = useState(initialState);

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
    fetchCountryInfo("worldwide");
  }, []);

  return (
    <div className="app">
      {/* <h2>{country}</h2> */}
      <div className="app__left">
        <CountrySelector onCountryChange={fetchCountryInfo} />

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
