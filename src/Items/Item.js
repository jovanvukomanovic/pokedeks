import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const fetchData = () => {
    axios.get(`https://pokeapi.co/api/v2/item/${id}`).then((res) => {
      console.log(res.data.name);
      setItem(res.data.name);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{item}</div>;
}

export default Item;
