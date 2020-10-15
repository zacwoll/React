import { combineReducers } from 'redux';
import weather from './WeatherReducer';
import city from './cityUpdated';

export default combineReducers({ city, weather });