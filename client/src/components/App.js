import React, {Component } from 'react';
import AddCity from './AddCity.js';
import Axios from 'axios';
import Weather from './Weather.js';
import ShowWeather from './ShowWeather.js';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: '',
            cities: [],
            weather: null
        }

    }
    
    componentDidMount() {
        this.getCities();
        this.getWeather(this.state.cities);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.addCity(this.state.city);
    }

    addCity = async (city) => {
        await Axios.post(`/api/v1/cities`, {city});
        this.getCities();
        this.setState({
            city:''
        });
    }

    getWeather = async(city) => {
        const {data} = await Axios.get(`/api/v1/weather/${city}`)
        console.log(data)
        this.setState({
            weather: data
        })
    }

    getCities = async () => {
        const {data} = await Axios.get(`/api/v1/cities`);
        this.setState({
            cities:data.cities
        });
    }

    render(){
        
        return ( 
            <div className = "container text-center mx-auto my-20 text-gray-darkest">
                <h1 className = "my-3 text-blue-500 font-bold text-4xl flex-auto" > Awesome Weather Dashboard </h1> 
                <p> The current Weatherfor your favorite cities! </p>
                
                <AddCity handleSubmit={this.handleSubmit}
                handleInputChange={(e) => this.setState({
                    city:e.target.value
                })}

                newCity={this.state.city}/>

                <Weather cities={this.state.cities} handleSelectCity={(e) => this.getWeather(e.target.value)}/>

                {
                    this.state.weather && <ShowWeather data={this.state.weather}/>
                }
            </div>
        );
    }
    
}

export default App;