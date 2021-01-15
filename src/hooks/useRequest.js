import { useState, useEffect } from "react";

const useRequest = (unit) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setResponse(data);
          })
          .catch((err) => setError(err));
      });
    };
    fetchData();
  }, [unit]);

  return { response, error };
};

export default useRequest;
