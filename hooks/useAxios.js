"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useAxios = (url, options = {}) => {
  const { method = "GET", body = null, autoFetch = true } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (overrideUrl, overrideBody) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios({
          url: overrideUrl || url,
          method,
          data: overrideBody || body,
        });
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [url, method, body],
  );

  useEffect(() => {
    if (autoFetch && url) {
      fetchData();
    }
  }, [autoFetch, url, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useAxios;
