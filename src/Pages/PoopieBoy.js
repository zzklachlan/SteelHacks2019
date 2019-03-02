import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import AngryPoop from '../Poops/AngryPoop.jpg';
import UpsetPoop from '../Poops/UpsetPoop.jpg';
import SadPoop from '../Poops/SadPoop.jpg';
import MustachePoop from '../Poops/MustachePoop.jpg';
import HappyPoop from '../Poops/HappyPoop.jpg';
import ToungePoop from '../Poops/ToungePoop.jpg';
import TeethPoop from '../Poops/TeethPoop.jpg';
import KissPoop from '../Poops/KissPoop.jpg';


const styles = {
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[500],
    },
  },
  checked: {},
};

class PoopieBoy extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div class='yesWrapFlex'>
        <div className='genderSpace'><img src={AngryPoop} alt="female" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          classes={{
            // // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={UpsetPoop} alt="male"  width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={SadPoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={TeethPoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'd'}
          onChange={this.handleChange}
          value="d"
          name="radio-button-demo"
          aria-label="D"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={HappyPoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'e'}
          onChange={this.handleChange}
          value="e"
          name="radio-button-demo"
          aria-label="E"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={ToungePoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'f'}
          onChange={this.handleChange}
          value="f"
          name="radio-button-demo"
          aria-label="F"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={MustachePoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'g'}
          onChange={this.handleChange}
          value="g"
          name="radio-button-demo"
          aria-label="G"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

        <div className='genderSpace'><img src={KissPoop} alt="unisex" width="100vw"/>
        <Radio
          checked={this.state.selectedValue === 'h'}
          onChange={this.handleChange}
          value="h"
          name="radio-button-demo"
          aria-label="H"
          classes={{
            // root: classes.root,
            // checked: classes.checked,
          }}
        />
        </div>

      </div>
    );
  }
}

PoopieBoy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PoopieBoy;
