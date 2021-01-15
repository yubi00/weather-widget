import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherWidget from "./components/WeatherWidget";
import useRequest from "./hooks/useRequest";

const App = () => {
  const [title, setTitle] = useState("Title of Widget");
  const [unit, setUnit] = useState("metric");
  const [toggleWind, setToggleWind] = useState("On");
  const { response } = useRequest(unit);

  const setWidgetTitle = (title) => {
    setTitle(title);
  };

  const setTempUnit = (unit) => {
    setUnit(unit);
  };

  const setWindToggle = (value) => {
    setToggleWind(value);
  };

  return (
    <div className='app'>
      <div className='weather__widget'>
        <WeatherForm
          setWidgetTitle={setWidgetTitle}
          setTempUnit={setTempUnit}
          setWindToggle={setWindToggle}
          toggleWind={toggleWind}
          unit={unit}
        />
        {response ? (
          <WeatherWidget
            name={response.name}
            temp={response.main.temp}
            wind={{ deg: response.wind.deg, speed: response.wind.speed }}
            img={`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`}
            title={title}
            toggleWind={toggleWind === "On" ? true : false}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
