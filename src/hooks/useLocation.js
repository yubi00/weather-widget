import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // if geolocation is not supported by the browser
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (err) => {
      console.log(err.message);
      setError(err.message);
    };

    //if the browser supports navigator.geolocation
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
};

export default useLocation;
