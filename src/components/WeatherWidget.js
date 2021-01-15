import React from "react";

const WeatherWidget = ({ temp, name, wind }) => {
  return (
    <div className='widget card'>
      <h3 className='widget__title'>Title of Widget</h3>
      <div className='widget__info'>
        <img src='/weather.png' height='100' className='widget__img' alt='' />
        <div className='widget__stats'>
          <h3 className='widget__city'>{name}</h3>
          <div className='widget__temp'>{temp}</div>
          <div className='widget__wind'>
            <strong>{wind.deg}</strong> {wind.speed}km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
