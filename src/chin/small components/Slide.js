import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
    marginLeft:20,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '7px solid #0ac3ae',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
    backgroundColor:'#0ac3ae',

  },
  rail: {
    color: '#a0a0a0',
    opacity: 1,
    height: 3,
  },
  value:{

  }
})(Slider);


export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <AirbnbSlider
       valueLabelDisplay="auto"
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[6000, 24000]}
        min={4000}
        max={30000}
      />
    </div>
  );
}
