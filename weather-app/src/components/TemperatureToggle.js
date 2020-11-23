import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleTemperature } from '../redux/actions/searchActions';

// Hex Code from OpenWeatherMap #66cbbc
// Make temperatureToggle an action that gets dispatched by this component
// Also, the component should accept a 'toggle' from the redux store that determines
// the outlined/contained variants of each button. It should default to °F

const styles = theme => ({
  root: {
    display: 'inline-block',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});

class TemperatureToggle extends React.Component () {

  handleChange = (id) => {
    console.log(toggle);
    console.log(id);
    if (id === 'celsius' && toggle !== 'C') {
      toggleTemperature('C');
    }
    else if (id === 'fahrenheit' && toggle !== 'F') {
      toggleTemperature('F');
    }
  }

  render () {
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button 
          variant={toggle === 'C' ? "outlined" : "contained"}
          id="celsius"
          onClick={() => this.handleChange('celsius')}
          >Metric (°C)</Button>
        <Button 
          variant={toggle === 'F' ? "outlined" : "contained"}
          id="fahrenheit"
          onClick={() => this.handleChange('fahrenheit')}
          >Imperial (°F)</Button>
      </ButtonGroup>
    </div>
  };
}

const mapStateToProps = (state) => {
  const { toggle } = state;
  return { toggle }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTemperature: (toggle) => dispatch(toggleTemperature(toggle)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TemperatureToggle));