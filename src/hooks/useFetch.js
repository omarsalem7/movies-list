import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
