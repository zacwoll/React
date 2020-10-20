import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { cityUpdated, fetchWeather } from '../redux/actions/searchActions';

// TODO: make not found component part of search bar, thereby fixing the text placement
// of the not found component and making it's existence conditional on the component
// <div className="search-error">City not Found</div>

// I like the color #4f4f50 for the Search Button

// I think this component can map it's dispatch action to
// mapDispatchToProps from connect 

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

function SearchBar({ cityUpdated, fetchWeather }) {
  const classes = useStyles();

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
    cityUpdated(city.city);
    fetchWeather(city.city);
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

const mapDispatchToProps = dispatch => {
  return {
    cityUpdated: (city) => dispatch(cityUpdated(city)),
    fetchWeather: (city) => dispatch(fetchWeather(city))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)