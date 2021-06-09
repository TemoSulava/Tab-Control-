import { useState, useEffect } from "react";

export const CustomFetchFn = (url) => {
  const [data, setData] = useState([]);
  const [appState, setAppState] = useState("idling");

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        setAppState("fetching data");
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setAppState("Info fetched!");
      } catch (error) {
        setAppState(error);
      }
    };
    fetchData();
  }, [url]);

  return { appState, data };
};
