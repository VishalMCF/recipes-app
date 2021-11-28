import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  console.log("Rerendering the comnponent");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      console.log("setIspending is set to true");
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const resData = await res.json();

        setData(resData);
        console.log("data is set to res.data() using setData() function");

        setIsPending(false);
        console.log(
          "setIspending is set to false using setIsPending function()"
        );

        setError(null);
        console.log("error is set to null using setError() function");
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          console.log("setIspending is set to true");
          setError("could not load the data");
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
}
