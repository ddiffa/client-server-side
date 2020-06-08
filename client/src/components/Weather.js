import React from 'react';

const Weather = ({cities, handleSelectCity}) => {
    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <h2 className=" mx-2 font-bold text-2xl text-gray-800">
                Check current weather :
            </h2>
            
            <select onChange={handleSelectCity} className="appearance-none sm:w-1/4 md:w-1/5 bg-white border border-blue-500 hover:border-blue-700  text-gray-darker text-sm px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mx-4 leading-tight">
                {
                    cities.length > 0 && cities.map((city)=> 
                    <option key= {city.id}>
                        {city.city_name}
                    </option>)
                }
            </select>
        </div>
    )
}


export default Weather;