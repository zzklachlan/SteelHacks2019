import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import male from '../male.PNG';
import female from '../female.PNG';
import unisex from '../unisex.PNG';

const styles = {
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[500],
    },
  },
  checked: {},
};

class Gender extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div class='noWrapFlex'>
        <div className='genderSpace'><img src={female} alt="female" height="150vh"/>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={male} alt="male" height="150vh"/>
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={unisex} alt="unisex" height="150vh"/>
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        </div>

      </div>
    );
  }
}

Gender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gender);
