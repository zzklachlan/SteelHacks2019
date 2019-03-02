import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class Floor extends React.Component {

  render() {
    const { classes } = this.props;

    return (
  <div>

        Floor (between -1 and 36, 0 for ground, -1 for basement):
        <input type="number" name="quantity" min="-1" max="36"/>

  </div>
    );
  }
}

Floor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Floor;
