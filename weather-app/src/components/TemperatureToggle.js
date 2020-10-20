import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Hex Code from OpenWeatherMap #66cbbc
// Make temperatureToggle an action that gets dispatched by this component

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TemperatureToggle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Metric (c)</Button>
        <Button variant="contained">Imperial</Button>
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

/*export default connect(null, null)(TemperatureToggle());*/