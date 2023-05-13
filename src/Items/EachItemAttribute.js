import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EachItemAttribute() {
  const [itemsList, setItemsList] = useState([]);
  const { id } = useParams();

  const fetchData = () => {
    axios.get(`https://pokeapi.co/api/v2/item-attribute/${id}`).then((res) => {
      console.log(res.data.items);
      setItemsList(res.data.items);
    });
  };
  //   console.log(items[0].name);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {itemsList.map((item) => (
        <li key={item.name}>
          <Link to={`/item/${item.name}`}>{item.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default EachItemAttribute;
