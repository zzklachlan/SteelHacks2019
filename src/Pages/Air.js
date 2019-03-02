import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import HappyAir from '../Poops/HappyAir.jpg';
import MehAir from '../Poops/MehAir.jpg';
import SadAir from '../Poops/SadAir.jpg';

const styles = {
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[500],
    },
  },
  checked: {},
};

class Air extends React.Component {
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
              <div className='genderSpace'><img src={HappyAir} alt="HappyAir" height="150vh"/>
              <Radio
                checked={this.state.selectedValue === 'j'}
                onChange={this.handleChange}
                value="j"
                name="radio-button-demo"
                aria-label="J"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
              </div>
              <div className='genderSpace'><img src={MehAir} alt="MehAir" height="150vh"/>
              <Radio
                checked={this.state.selectedValue === 'k'}
                onChange={this.handleChange}
                value="k"
                name="radio-button-demo"
                aria-label="K"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
              </div>
              <div className='genderSpace'><img src={SadAir} alt="SadAir" height="150vh"/>
              <Radio
                checked={this.state.selectedValue === 'l'}
                onChange={this.handleChange}
                value="l"
                name="radio-button-demo"
                aria-label="L"
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


export default withStyles(styles)(Air);
