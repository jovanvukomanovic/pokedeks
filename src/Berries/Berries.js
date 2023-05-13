import React from "react";
import { Link } from "react-router-dom";

function Berries({ berriesList }) {
  // console.log(berriesList);

  return (
    <div>
      {berriesList.map((b, index) => {
        return (
          <li key={b.name} index={index}>
            <Link to={`/eachberry/${b.name}`}> {b.name}</Link>
          </li>
        );
      })}
    </div>
  );
}

export default Berries;
