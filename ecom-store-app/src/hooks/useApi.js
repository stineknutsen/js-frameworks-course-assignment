import { useState, useEffect } from "react";

export default function useApi(url, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url);
        const json = await response.json();
        const data = json.data;
        setData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
