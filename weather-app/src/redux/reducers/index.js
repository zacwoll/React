import { combineReducers } from 'redux';
import weather from './weatherReducer';
import city from './cityUpdated';

export default combineReducers({ city, weather });