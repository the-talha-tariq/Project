import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenereResponse {
  count: number;
  results: Genre[];
}
const useGeneres = () => {
  const [isLoading, setLoading] = useState(false);
  const [geners, setGeners] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenereResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeners(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return {
    geners,
    error,
    isLoading,
  };
};

export default useGeneres;
