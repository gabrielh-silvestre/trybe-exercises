import { useState, useEffect, useCallback } from 'react';

const DEFAULT_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function useFetch(url = DEFAULT_URL) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData.results);
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, [getData]);

  return { data, isLoading };
}
