import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const getData = async (url) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com" + url
      );
      const data = await response.json();
      setData(data.splice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data];
};

export default useFetch;
