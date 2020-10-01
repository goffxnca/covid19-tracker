import { Card, CardContent } from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./Header";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <Header />

        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases="950" total="20000" />
          <InfoBox title="Recovered" cases="750" total="25400" />
          <InfoBox title="Deaths" cases="200" total="686300" />
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
