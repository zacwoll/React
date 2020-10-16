import { FETCH_WEATHER, CITY_UPDATED } from './types';

const apiKey = process.env.apiKey;
console.log('api: ' + apiKey);
console.log(process.env)

export const fetchWeather = (city) => dispatch => {
    //fetch('http://api.openweathermap.org/data/2.5/weather?q=Livermore&appid=c1aaa253d90f96a008778808e15dc9ba')
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=${apiKey}`)
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