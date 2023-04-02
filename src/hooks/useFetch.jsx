import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [showData, setShowData] = useState();
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw "Error al conectar la API";
      }
      const data = await response.json();
      setData(data);
      setShowData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      setData([]);
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, showData, setShowData, loading };
};
