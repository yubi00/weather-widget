import React from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherWidget from "./components/WeatherWidget";
import useRequest from "./hooks/useRequest";

const App = () => {
  const { response } = useRequest();

  return (
    <div className='app'>
      <div className='weather__widget'>
        <WeatherForm />
        {response ? (
          <WeatherWidget
            name={response.name}
            temp={response.main.temp}
            wind={{ deg: response.wind.deg, speed: response.wind.speed }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
