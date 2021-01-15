import { useState, useEffect } from "react";

const useRequest = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        const API_KEY = "00dbe002cb21b123ffb5f00cf564a7d4";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
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
  }, []);

  return { response, error };
};

export default useRequest;
