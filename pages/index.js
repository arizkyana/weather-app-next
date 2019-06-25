import WithNavbar from '../layouts/WithNavbar'
import Header from '../components/Head'
import Alert from '../components/Alert'

import React from 'react'
import consola from 'consola'
import _ from 'lodash'
import Router from 'next/router'

import { forecast } from '../helpers/request'

import favorite from '../store/favorite'

class Index extends React.Component {

 constructor(props){
  super(props);
  this.state = {

      loading: false,
      city: 'Bandung', // default bandung
      forecast: {
          "location": {
              "name": "Bandung",
              "region": "West Java",
              "country": "Indonesia",
              "lat": -7.44,
              "lon": 111.46,
              "tz_id": "Asia/Jakarta",
              "localtime_epoch": 1561443045,
              "localtime": "2019-06-25 13:10"
          },
          "current": {
              "last_updated_epoch": 1561442078,
              "last_updated": "2019-06-25 12:54",
              "temp_c": 30.7,
              "temp_f": 87.3,
              "is_day": 1,
              "condition": {
                  "text": "Sunny",
                  "icon": "//cdn.apixu.com/weather/64x64/day/113.png",
                  "code": 1000
              },
              "wind_mph": 2.9,
              "wind_kph": 4.7,
              "wind_degree": 177,
              "wind_dir": "S",
              "pressure_mb": 1014,
              "pressure_in": 30.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 55,
              "cloud": 0,
              "feelslike_c": 33.6,
              "feelslike_f": 92.5,
              "vis_km": 10,
              "vis_miles": 6,
              "uv": 8,
              "gust_mph": 3.4,
              "gust_kph": 5.4
          },
          "forecast": {
              "forecastday": [
                  {
                      "date": "2019-06-25",
                      "date_epoch": 1561420800,
                      "day": {
                          "maxtemp_c": 35,
                          "maxtemp_f": 95,
                          "mintemp_c": 22.5,
                          "mintemp_f": 72.5,
                          "avgtemp_c": 27.7,
                          "avgtemp_f": 81.9,
                          "maxwind_mph": 6.7,
                          "maxwind_kph": 10.8,
                          "totalprecip_mm": 0,
                          "totalprecip_in": 0,
                          "avgvis_km": 10,
                          "avgvis_miles": 6,
                          "avghumidity": 70,
                          "condition": {
                              "text": "Partly cloudy",
                              "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                              "code": 1003
                          },
                          "uv": 10
                      },
                      "astro": {
                          "sunrise": "05:46 AM",
                          "sunset": "05:28 PM",
                          "moonrise": "11:54 PM",
                          "moonset": "11:36 AM"
                      }
                  }
              ]
          }
      },
      favorite: [],
      error: null
  };

  this.addToFavorite = this.addToFavorite.bind(this)

 }

 componentDidMount() {
     consola.info('query', this.props.url)
 }

    getForecast = async (e) => {
     e.preventDefault();
     consola.info('your city', this.state.city);

     this.setState({loading: true});

     const getForecast = await forecast({
         method: 'GET',
         params: {
             q: this.state.city
         }
     });

     this.setState({forecast: getForecast.data, loading: false})
 };

 changeCity = (e) => {

     this.setState({city: e.target.value, error: null})
 };

 addToFavorite = async (city) => {

     const find = await _.find(favorite.store.getState(), {city});
     if (find) {
         consola.info(`${city} has been added to favorite`);
         this.setState({error: `${city} has been added to favorite`})
     } else {
         await favorite.store.dispatch(favorite.action.addToFavorite(city));
         consola.info('current favorite', favorite.store.getState())
     }
 };

 render(){
     const ErrorMessage = () => {
         if (this.state.error) {
             return (
                 <div className="mt-3">
                     <small className="text-red-500">{this.state.error}</small>
                 </div>
             )
         } else {
             return (
                 <small className="text-red-500"></small>
             )
         }
     };
  return(
   <div className="container mx-auto">
       <Header title="Search city"/>

       <form className="flex" onSubmit={this.getForecast.bind(this)}>
           <div className="flex-auto w-3/4">
               <input onChange={this.changeCity.bind(this)} type="text" className="bg-white border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal" placeholder="Type city name, example: Bandung" />
           </div>
           <div className="flex-auto w-1/4 px-1 ">
               <button  type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   { this.state.loading ? 'Loading...' : 'Get forecast' }
               </button>
           </div>
       </form>

       <div className="bg-white rounded-lg">

           <div className="flex">

                   <div className="text-center w-full">
                       <h1 className="text-6xl align-middle">{this.state.forecast.location.name}</h1>
                       <div className="text-4xl"><span className="text-gray-600">{this.state.forecast.current.temp_c} &deg;</span></div>
                   </div>


           </div>

           <div className="flex mt-3">
               <div className="w-1/2 ">
                   <img className="float-right align-middle" src={this.state.forecast.current.condition.icon} alt="icon.png"/>
               </div>
               <div className="w-1/2 py-5 ">
                   <span className="align-middle">{this.state.forecast.current.condition.text}</span>
               </div>
           </div>

           <div className="flex">
               <div className="w-full text-center">
                   <button onClick={() => this.addToFavorite(this.state.forecast.location.name)} type="button" className="px-2 py-2 rounded focus:outline-none hover:bg-green-600 border border-green-500 bg-green-500 text-white">Add to favorite</button>
                   <ErrorMessage />
               </div>
           </div>


           <div className="flex mt-6">
               <div className="w-1/4  h-12  text-center">
                   <p>Wind</p>
                   <div>
                       {this.state.forecast.current.wind_mph} mph
                   </div>
               </div>
               <div className="w-1/4  h-12  text-center">
                   <p>Pressure</p>
                   <div>
                       {this.state.forecast.current.pressure_in} bar
                   </div>
               </div>
               <div className="w-1/4  h-12  text-center">
                   <p>Humidity</p>
                   <div>
                       {this.state.forecast.current.humidity} %
                   </div>
               </div>
               <div className="w-1/4  h-12  text-center">
                   <p>Feels like</p>
                   <div>
                       {this.state.forecast.current.feelslike_c} &deg;
                   </div>
               </div>
           </div>
       </div>




   </div>
  )
 }
}

export default WithNavbar(Index)