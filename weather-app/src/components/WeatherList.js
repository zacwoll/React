import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

// TODO: convert degrees to N, NW, W, SW, S, SE, E

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: '40rem',
    backgroundColor: theme.palette.background.paper,
  },
}));

function WeatherList({ items }) {
  const classes = useStyles();

  const kelvinToCelsius = (temp) => {
    // drop after  decimal place
    let celsius = temp + 273.15;
    return celsius.toFixed(1) + '°C';
  }

  const kelvinToFahrenheit = (temp) => {
    let fahrenheight = (temp - 273.15) * 9/5 + 32
    return fahrenheight.toFixed(1) + '°C';
  }

  const windDirection = (wind) => {
    switch (wind) {
      case wind >= 338 && wind < 23:
        return 'N';
      case wind >= 293 && wind < 338:
        return 'NW';
      case wind >= 238 && wind < 293:
        return 'W';
      case wind >= 193 && wind < 238:
        return 'SW';
      case wind >= 158 && wind < 193:
        return 'S';
      case wind >= 113 && wind < 158:
        return 'SE';
      case wind >= 78 && wind < 113:
        return 'E';
      case wind >= 23 && wind < 78:
        return 'NE';
      default:
        return 'N';
    }
  }

  return (
    <div className={classes.root}>
      
      {items.length === 0
        ?
        <Typography variant="h6" color="error">No Data to display</Typography>
        :
        (
        <div>
        <h2>{kelvinToFahrenheit(items.main.temp)} {items.name}</h2>
        <h3>Feels like: {kelvinToFahrenheit(items.main.feels_like)}, {items.weather[0].description}</h3>
        <List>
        <ListItem>
          <ListItemText>Pressure: {items.main.pressure}hPa</ListItemText>
        </ListItem>      <Divider />
        <ListItem>
          <ListItemText>Humidity: {items.main.humidity}%</ListItemText>
        </ListItem>      <Divider />
        <ListItem>
          <ListItemText>Visibility: {items.visibility}km</ListItemText>
        </ListItem>      <Divider />
        <ListItem>
          <ListItemText>Wind: {items.wind.speed} mph {windDirection(items.wind.deg)}</ListItemText>
        </ListItem>      <Divider />
      </List>

      </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { weather } = state
  const items = weather.items
  return { items }
}

export default connect(mapStateToProps)(WeatherList);