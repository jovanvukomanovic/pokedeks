import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EachBerrieType() {
  const { id } = useParams();
  const [berry, setBerry] = useState();

  const fetchData = () => {
    axios.get(`https://pokeapi.co/api/v2/berry/${id}`).then((res) => {
      console.log(res.data.name);
      setBerry(res.data.name);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{berry}</p>
    </div>
  );
}

export default EachBerrieType;
