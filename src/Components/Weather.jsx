import React, { useEffect,useRef,useState } from 'react'
import './Weather.css'

import searchs from '../assets/search.png'
import cloudy from '../assets/cloudy-day.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import sun from '../assets/sun.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'

const Weather = () => {
    const inputRef= useRef()
    const [weatherData, setWeatherData] = useState(false);
    const allIcons={'01d':sun,'01n':sun,'02d':cloudy,'02n':cloudy,'03d':cloudy,'03n':cloudy,'04d':drizzle,'04n':drizzle,
        '09d':rain,'09n':rain,'10d':rain,'10n':rain,'13d':snow,'13n':snow,
    }
    const search= async (city)=>{
        if(city == '')
            {
            alert("Enter city name");
            return;
           }
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
          const response= await fetch(url);
          const data = await response.json();
          if (!response.ok)
            {
            alert(data.message);
            return;
          }
          console.log(data);
          const icon=allIcons[data.weather[0].icon] || sun;
          setWeatherData({
            humidity: data.main.humidity,
            windSpeed:data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon:icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching the data");
        }
    }
    useEffect(()=>{search("London");},[])
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search '></input>
            <img src={searchs} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        {weatherData?<>
            <img src={weatherData.icon} alt="" className='weather-icon'></img>
        <p classname='temperature'>{weatherData.temperature}°C</p>
        <p classname='location'>{weatherData.location}</p>
        <div className='weather-data'>
            <div className='col'>
                <img src={humidity} alt=''/>
            <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
            </div>
            </div>
            <div className='col'>
                <img src={wind} alt=''/>
            <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
            </div>
            </div>
        </div>
        </>:<></>}
        
    </div>
  )
}

export default Weather