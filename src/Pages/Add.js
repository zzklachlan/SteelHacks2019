import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './pages.css';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import brown from '@material-ui/core/colors/brown';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BuildingList from "./BuildingList.js";
import Gender from "./Gender.js";
import Floor from "./Floor.js";
import PoopExperience from "./PoopExperience.js";
import RateToilet from "./RateToilet.js"
import PoopieBoy from "./PoopieBoy.js";

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },

});


function getSteps() {
  return ['Building', 'Gender of Bathroom', 'Floor', 'Rate the Toilet', 'Poop Experience', 'Rate Your Experience'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BuildingList/> ;
    case 1:
      return <Gender/>;
    case 2:
      return <Floor/>;
    case 3:
      return <RateToilet/>;
    case 4:
      return <PoopExperience/>;
    case 5:
      return <PoopieBoy/>;

    default:
      return 'Oops you stumbled across a poop';
  }
}

class Add extends React.Component {

  state = {
     activeStep: 0,
   };

   handleNext = () => {
     this.setState(state => ({
       activeStep: state.activeStep + 1,
     }));
   };

   handleBack = () => {
     this.setState(state => ({
       activeStep: state.activeStep - 1,
     }));
   };

   handleReset = () => {
     this.setState({
       activeStep: 0,
     });
   };

render(){
  const { classes } = this.props;
  const steps = getSteps();
  const { activeStep } = this.state;

  return (
    <div className='addHome'><div className='rateToilet'>
    <div className={classes.root}>

       <Stepper activeStep={activeStep} orientation="vertical">
         {steps.map((label, index) => (
           <Step key={label}>
             <StepLabel>{label}</StepLabel>
             <StepContent>
               <Typography>{getStepContent(index)}</Typography>
               <div className={classes.actionsContainer}>
                 <div>
                   <Button
                     disabled={activeStep === 0}
                     onClick={this.handleBack}
                     className={classes.button}
                   >
                     Back
                   </Button>
                   <Button
                     variant="contained"
                     color="primary"
                     onClick={this.handleNext}
                     className={classes.button}
                   >
                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                   </Button>
                 </div>
               </div>
             </StepContent>
           </Step>
         ))}
       </Stepper>
       {activeStep === steps.length && (
         <Paper square elevation={0} className={classes.resetContainer}>
           <Typography>All steps completed - you&apos;ve finished your review.</Typography>
           <Button onClick={this.handleReset} className={classes.button}>
             Reset
           </Button>
         </Paper>
       )}

    </div></div>
    </div>
  );
}
}

Add.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Add);
