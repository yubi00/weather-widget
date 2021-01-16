import { useState, useEffect } from "react";

const useRequest = (unit) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`;
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
        } catch (err) {
          setError(err.message);
        }
      });
    };
    fetchData();
  }, [unit]);

  return { response, error };
};

export default useRequest;
