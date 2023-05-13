import { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const { api } = useSelector((state) => state);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (
      path,
      method = "GET",
      body = null,
      headers = {},
      navigate = false
    ) => {
      setLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(`${api}${path}`, {
          method,
          headers,
          body,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        setLoading(false);
        return responseData;
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { loading, sendRequest };
};
