import { combineReducers } from 'redux';
import weather from './weatherReducer';
import city from './cityUpdated';
import toggle from './temperatureToggled';

export default combineReducers({ city, weather, toggle });