import React, { useState } from "react";
import './WeatherApp.css';
import clearicon from '../Assets/clear.png';
import cloudicon from '../Assets/cloud.png';
import drizzleicon from '../Assets/drizzle.png';
import humidityicon from '../Assets/humidity.png';
import rainicon from '../Assets/rain.png';
import searchicon from '../Assets/search.png';
import snowicon from '../Assets/snow.png';
import windicon from '../Assets/wind.png';


const WeatherApp = () => {

    let apikey="83c408043c7e06b7b5f77d16588ddbb9";
    const [icon,seticon]=useState(cloudicon);
    const search=async()=>{
        var element=document.getElementsByClassName("cityname");
        if(element[0].value===""){
            return 0;
        }
        var url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity=document.getElementsByClassName("humidpercent");
        const wind=document.getElementsByClassName("windspd");
        const temper=document.getElementsByClassName("weathertemp");
        const location=document.getElementsByClassName("weatherloc");

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" kmph";
        temper[0].innerHTML=data.main.temp+" °C";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            seticon(clearicon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            seticon(cloudicon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            seticon(drizzleicon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            seticon(rainicon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            seticon(rainicon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            seticon(snowicon);
        }
        else
        {
            seticon(clearicon);
        }


    }
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityname" placeholder="Enter City Name"/>
                <div className="searchicon" onClick={()=>{search()}}>
                    <img src={searchicon} alt=""/>
                </div>
            </div>
            <div className="weatherimage">
                <img src={icon} alt=""/>
            </div>
            <div className="weathertemp"></div>
            <div className="weatherloc"></div>
            <div className="datacont">
                <div className="element">
                    <img src={humidityicon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidpercent"></div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windicon} alt="" className="icon"/>
                    <div className="data">
                        <div className="windspd"></div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherApp;
