import { FETCH_WEATHER, CITY_UPDATED } from './types';


const apiKey = process.env.apiKey;

export const fetchWeather = () => dispatch => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
        .then(res => res.json())
        .then(data => dispatch ({
            type: FETCH_WEATHER,
            payload: data,
        })
    );
}

export const cityUpdated = city => ({
    type: CITY_UPDATED,
    payload: { city }
});