import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: 'london',
    humidity: 10,
    speed: 2
  })
  const [name, setName] =useState('');
  const handleClick = () => {
      if(name !== "") {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=19379dce9750bbe125d9752749191237&units=metric`;
        axios.get(apiUrl)
          .then(res => {
            setData({ ...data, celcius: res.data.main.temp, name: res.data.name,
               humidity: res.data.main.humidity, speed: res.data.wind.speed })
          })
          .catch(err => console.log(err));
      }
  }
  return (
    <div className='container'>
      <div className='Weather'>
        <div className='Search'>
          <input type='text' placeholder='Enter City Name' onChange={e =>setName(e.target.value)}/>
          <button><img src='/images/Search.png' onClick={handleClick} alt='Search icon' /></button>
        </div>
        <div className='winfo'>
          <img src='/images/cloud.png' alt='' />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div className='details'>
            <div className='col'>
              <img src='/images/humidity.png' alt='' />
              <div className='humidity'>
                <p>{Math.round(data.humidity)}%</p>
                <p>humidity</p>
              </div>
            </div>
            <div className='col'>
              <img src='/images/wind.png' alt='' />
              <div className='wind'>
                <p>{Math.round(data.speed)} km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

