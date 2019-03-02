import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';


const styles = theme => ({
  appBar: {

    background: "#B6E1F1",
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  root: {
    backgroundColor: '#fafafa',
  },

  card: {
    maxWidth: 150,
  },

    chip: {
      marginRight: theme.spacing.unit,
    },
    section1: {
      margin: theme.spacing.unit * 2,
    },
    section2: {
      margin: theme.spacing.unit * 4,

    },
    section3: {
      margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

});


function Search(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <IconButton className={classes.iconButton} aria-label="Menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6"  noWrap>
            Which building are you looking for...
          </Typography>
        </Toolbar>
      </AppBar>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
              <IconButton className={classes.iconButton} aria-label="Search">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6"  noWrap>
                  Which kind of bathroom are you looking for...
                </Typography>
              </Toolbar>
            </AppBar>
      <main>

        <div className={classes.root}>
          <div className={classes.section1}>
            <Grid container alignItems="center">
                <Typography gutterBottom variant="h5">
                  All bathrooms in the area:
                </Typography>

            </Grid>

          </div>
          <Divider variant="middle" />
          <div className={classes.section2}>
            <Typography gutterBottom color="#3e2723" variant="h6">
              Select sorted by
            </Typography>
            <div>
              <Chip className={classes.chip} label="Rate" />
              <Chip className={classes.chip} label="Location" />
              <Chip className={classes.chip} label="Cleanliness" />
              <Chip className={classes.chip} label="Odor" />
            </div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-49-512.png" />
            </ListItemAvatar>
            <ListItemText
              primary="William Pitt Union"
              secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                    First floor
                  </Typography>
                  {" Overall, it is a clean bathroom, however…"}
                </React.Fragment>
              }
            />
          </ListItem>
           <ListItem alignItems="flex-start">
             <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-49-512.png" />
             </ListItemAvatar>
             <ListItemText
               primary="Hillman Library"
               secondary={
                 <React.Fragment>
                   <Typography component="span" className={classes.inline} color="textPrimary">
                     First floor
                   </Typography>
                   {" It is definitely a disgusting bathroom…"}
                 </React.Fragment>
               }
             />
           </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-49-512.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Posvar Hall"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      Ground floor
                    </Typography>
                    {" It is definitely a disgusting bathroom…"}
                  </React.Fragment>
                }
              />
            </ListItem>

          </div>
          <div className={classes.section3}>
            <Button variant="contained" color="#757575" fullWidth>
              Write a review
            </Button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
