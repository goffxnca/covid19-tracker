import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__form">
          <Select variant="outlined" value="Test">
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Netherland">Netherland</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Dropwdown Country */}

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
