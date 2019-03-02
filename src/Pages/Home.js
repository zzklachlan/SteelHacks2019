import React, { Component } from 'react';
import ToiletBgd from '../toiletbackground.PNG';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './pages.css';
import find from '../findtoilet.PNG';
import rate from '../ratetoilet.PNG';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ads from '../ads2.PNG';

class Home extends Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  handleChange(){
    this.setState({loaded: true})
  }

  render(){
    return(
      <div>
        <div className='blueSection'>
        <div className='titleBar'>
        <p>Find or Rate a toilet near you!</p>
        <br/>

        </div>


        </div>

        <div className='bottomHome'>
        </div>

        <div className='toiletsHome'>
        <div className='adLeft'><img src={ads} alt="ads" width="400vh"/></div>
          <div className='findToilet'>
            <Link to= '/Search'><Button variant="contained" width="300%">
              <img src={find} alt="find toilet" />
            </Button></Link>
          </div>

          <div className='rateToilet'>
            <Link to= '/Add'><Button variant="contained" width="200%">
              <img src={rate} alt="rate toilet" />
            </Button></Link>
          </div>
        <div className='adRight '><img src={ads} alt="ads" width="400vh"/></div>
        </div>

      </div>
    )
  }
}


export default Home;
