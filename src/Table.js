import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {[...countries]
        .sort((a, b) => (a.cases > b.cases ? -1 : 1)) //sort by cases (desc)
        .map(({ countryName, cases }) => (
          <tr>
            <td>{countryName}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        ))}
    </div>
  );
}

export default Table;
