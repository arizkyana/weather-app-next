import axios from 'axios'
import config from '../config'


export const forecast = axios.create({
    baseURL: `${config.WEATHER.BASE_URL}${config.WEATHER.FORECAST}?key=${config.WEATHER.KEY}`,
});