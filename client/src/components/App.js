import React, {Component } from 'react';
import AddCity from './AddCity.js';
import Axios from 'axios';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: '',
            cities: []
        }

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

    getCities = async () => {
        const {data} = await Axios.get(`/api/v1/cities`);
        const cityName = data.cities.map((city) => city.name);
        this.setState({
            cities:cityName
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
            </div>
        );
    }
    
}

export default App;