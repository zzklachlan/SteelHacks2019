import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import HappySink from '../Poops/HappySink.jpg';
import MehSink from '../Poops/MehSink.jpg';
import SadSink from '../Poops/SadSink.jpg';

const styles = {
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[500],
    },
  },
  checked: {},
};

class Sink extends React.Component {
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
          <div class='noWrapFlex'>
            <div className='genderSpace'><img src={HappySink} alt="HappySink" height="150vh"/>
            <Radio
              checked={this.state.selectedValue === 'g'}
              onChange={this.handleChange}
              value="g"
              name="radio-button-demo"
              aria-label="G"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
            </div>
            <div className='genderSpace'><img src={MehSink} alt="MehSink" height="150vh"/>
            <Radio
              checked={this.state.selectedValue === 'h'}
              onChange={this.handleChange}
              value="h"
              name="radio-button-demo"
              aria-label="H"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
            </div>
            <div className='genderSpace'><img src={SadSink} alt="SadSink" height="150vh"/>
            <Radio
              checked={this.state.selectedValue === 'i'}
              onChange={this.handleChange}
              value="i"
              name="radio-button-demo"
              aria-label="I"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
            </div>
            </div>


</div>
    );
  }
}


export default withStyles(styles)(Sink);
