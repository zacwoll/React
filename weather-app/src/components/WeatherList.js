import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function WeatherList({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      {items.length === 0
        ?
        <Typography variant="h6" color="error">No Data to display</Typography>
        :
        (
        <div>
        <List>
        <ListItem>
          <ListItemText>Latitude: {items.coord.lat}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Longitude: {items.coord.lon}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary={items.weather[0].main}/>
        </ListItem>
        <ListItem>
          <List>
            <ListItem>
              <ListItemText>Temperature: {items.main.temp}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Feels like: {items.main.feels_like}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Min: {items.main.temp_min}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Max: {items.main.temp_max}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pressure: {items.main.pressure}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Humidity: {items.main.humidity}</ListItemText>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText>Visibility: {items.visibility}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Wind: {items.wind.speed}mph {items.wind.deg}deg</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <h2>{items.name}</h2>
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