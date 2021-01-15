import React from "react";

const WeatherForm = ({
  setWidgetTitle,
  setWindToggle,
  toggleWind,
  unit,
  setTempUnit
}) => {
  const onValueChange = (e) => {
    setWindToggle(e.target.value);
  };

  const onUnitChange = (e) => {
    setTempUnit(e.target.value);
  };

  return (
    <div className='weather__form'>
      <div className='widget__title__container'>
        <h3>Title</h3>
        <input
          type='text'
          className='widget__title__input'
          placeholder='Title of widget'
          onChange={(e) => setWidgetTitle(e.target.value)}
        />
      </div>
      <div className='weather__temp'>
        <h3>Temperature</h3>
        <div className='temp__options'>
          <div className='temp__celsius'>
            <input
              type='radio'
              className='radio__option'
              value='metric'
              checked={unit === "metric"}
              onChange={onUnitChange}
            />
            <label>°C</label>
          </div>
          <div className='temp__fahrenheit'>
            <input
              type='radio'
              className='radio__option'
              value='imperial'
              checked={unit === "imperial"}
              onChange={onUnitChange}
            />
            <label>°F</label>
          </div>
        </div>
      </div>
      <div className='weather__wind'>
        <h3>Wind</h3>
        <div className='wind__options'>
          <div className='wind__on'>
            <input
              type='radio'
              className='radio__option'
              value='On'
              checked={toggleWind === "On"}
              onChange={onValueChange}
            />
            <label>On</label>
          </div>
          <div className='wind__off'>
            <input
              type='radio'
              className='radio__option'
              value='Off'
              checked={toggleWind === "Off"}
              onChange={onValueChange}
            />
            <label>Off</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;
