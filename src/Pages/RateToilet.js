import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import HappyAir from '../Poops/HappyAir.jpg';
import HappyNose from '../Poops/HappyNose.jpg';
import HappySink from '../Poops/HappySink.jpg';
import HappyBroom from '../Poops/HappyBroom.jpg';
import MehAir from '../Poops/MehAir.jpg';
import MehNose from '../Poops/MehNose.jpg';
import MehSink from '../Poops/MehSink.jpg';
import MehBroom from '../Poops/MehBroom.jpg';
import SadAir from '../Poops/SadAir.jpg';
import SadNose from '../Poops/SadNose.jpg';
import SadSink from '../Poops/SadSink.jpg';
import SadBroom from '../Poops/SadBroom.jpg';
import Air from './Air.js';
import Nose from './Nose.js';
import Sink from './Sink.js';

const styles = {
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[500],
    },
  },
  checked: {},
};

class RateToilet extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <br/>
      Cleanliness
      <div class='noWrapFlex'>
          <div className='genderSpace'><img src={HappyBroom} alt="HappyBroom" height="150vh"/>
          <Radio
            checked={this.state.selectedValue === 'd'}
            onChange={this.handleChange}
            value="d"
            name="radio-button-demo"
            aria-label="D"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
          </div>
          <div className='genderSpace'><img src={MehBroom} alt="MehBroom" height="150vh"/>
          <Radio
            checked={this.state.selectedValue === 'e'}
            onChange={this.handleChange}
            value="e"
            name="radio-button-demo"
            aria-label="E"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
          </div>
          <div className='genderSpace'><img src={SadBroom} alt="SadBroom" height="150vh"/>
          <Radio
            checked={this.state.selectedValue === 'f'}
            onChange={this.handleChange}
            value="f"
            name="radio-button-demo"
            aria-label="F"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
          </div>
          </div>

          Hand Washing Capabilities
          <Sink/>

          Hand Drying Capabilities
          <Air/>

          Odor
          <Nose/>

</div>
    );
  }
}


export default withStyles(styles)(RateToilet);
