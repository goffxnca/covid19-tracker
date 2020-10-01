import React from "react";
import "./App.css";
import Header from "./Header";
import InfoBox from "./InfoBox";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases="950" total="20000" />
        <InfoBox title="Recovered" cases="750" total="25400" />
        <InfoBox title="Deaths" cases="200" total="686300" />
      </div>

      {/* Map */}
      {/* InfoTable */}
      {/* Graph */}
    </div>
  );
}

export default App;
