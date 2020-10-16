import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { cityUpdated, fetchWeather } from '../redux/actions/searchActions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'inline-flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let [city, setCity] = useState({
    city: ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    city[name] = value;
    setCity(city);
  }

  let search = (e) => {
    e.preventDefault();
    // Here is where I want to dispatch my fetch action
    dispatch(cityUpdated(city.city));
    dispatch(fetchWeather(city.city));
    console.log('City: ' + city.city);
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={search}>
      <InputBase
        className={classes.input}
        placeholder="Enter Your City"
        name="city"
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Button
        variant="contained"
        color="primary"
        className={classes.iconButton}
        onClick={search}
        >
        Search
      </Button>
    </Paper>
  );
}