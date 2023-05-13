import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, limitPerPAge) {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState();
  const [responseObj, setResponseObj] = useState();

  useEffect(() => {
    fetchPokemons(
      // `https://pokeapi.co/api/v2/pokemon/?limit=${limitPerPAge}&offset=0`
      url
    );
  }, [limitPerPAge]);

  const fetchPokemons = (url) => {
    setLoading(true);
    let cancel;
    axios
      .get(url, { cancelToken: new axios.CancelToken((c) => (cancel = c)) })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setData(res.data.results);
        setNumber(res.data.count);
        setResponseObj(res.data);
      })
      .catch((err) => console.log(err));
  };
  return {
    loading,
    nextPage,
    prevPage,
    data,
    number,
    fetchPokemons,
    responseObj,
  };
}

export default useFetch;
