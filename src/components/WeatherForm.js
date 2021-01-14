import React from "react";

const WeatherForm = () => {
  return (
    <div className='weather__form'>
      <div className='widget__title__container'>
        <h3>Title</h3>
        <input
          type='text'
          className='widget__title__input'
          placeholder='Title of widget'
        />
      </div>
      <div className='weather__temp'>
        <h3>Temperature</h3>
        <div className='temp__options'>
          <div className='temp__celsius'>
            <input type='radio' className='radio__option' />
            <label>°C</label>
          </div>
          <div className='temp__fahrenheit'>
            <input type='radio' className='radio__option' />
            <label>°F</label>
          </div>
        </div>
      </div>
      <div className='weather__wind'>
        <h3>Wind</h3>
        <div className='wind__options'>
          <div className='wind__on'>
            <input type='radio' className='radio__option' />
            <label>On</label>
          </div>
          <div className='wind__off'>
            <input type='radio' className='radio__option' />
            <label>Off</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;
