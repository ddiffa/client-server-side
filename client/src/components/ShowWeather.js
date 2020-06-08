import React from 'react';

const ShowWeather = ({data}) => {
    return (
        <div className="my-4 sm:w-1/4 md:w-1/5  mx-auto justify-center items-center">
            <h2 className="text-bold text-2xl text-blue-700">
                {data.name}
            </h2>
            <div className="my-4 mx-4  sm:w-1/4 md:w-1/5  mx-auto justify-center items-center">
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon"/>
                <span className="text-bold text-2xl" >{data.weather[0].main}</span> &nbsp;
                <span>{Math.floor(data.main.temp - 273.5)}&deg;C</span>
            </div>
        </div>
    )
}


export default ShowWeather;