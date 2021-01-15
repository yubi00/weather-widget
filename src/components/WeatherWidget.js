import React from "react";
import { getWindDirection } from "../utils/getWindDirection";

const WeatherWidget = ({ temp, name, wind, img, title, toggleWind }) => {
  return (
    <div className='widget card'>
      <h3 className='widget__title'>{title}</h3>
      <div className='widget__info'>
        <img src={img} height='120' className='widget__img' alt='' />
        <div className='widget__stats'>
          <h3 className='widget__city'>{name}</h3>
          <div className='widget__temp'>{Math.round(temp)}°</div>
          {toggleWind && (
            <div className='widget__wind'>
              <strong>Wind</strong> {getWindDirection(wind.deg)}{" "}
              {`${wind.speed}km/hr`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
