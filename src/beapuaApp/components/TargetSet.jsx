import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
// import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Header from './Header.jsx';
import { common, cardStyle } from '../style';

class TargetSet extends React.Component {
  render() {
    return (
      <article>
        <Header leftIcon="chvron_left" rightIcon="more_vert" />
        <main style={common.main} />
        <div>
          <Grid container spacing={24}>
            <Grid item xs>
              <Card>
                <CardMedia
                  style={cardStyle.media}
                  image="/assets/img/spanyan.png"
                  title="your image"
                />
              </Card>
            </Grid>

            <Grid item xs>
              <TextField label="名前" id="name" type="text" />
              <TextField label="時間" id="time" type="number" />
              <TextField label="場所" id="place" type="text" />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container spacing={24}>
            <Grid item xs>
              <List>
                <ListItem>
                  {/* <Avatar>
                    <ImageIcon />
                  </Avatar> */}
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  {/* <Avatar>
                    <WorkIcon />
                  </Avatar> */}
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  {/* <Avatar>
                    <BeachAccessIcon />
                  </Avatar> */}
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs>
              <TextField label="名前" id="name" type="text" />
              <TextField label="時間" id="time" type="number" />
              <TextField label="場所" id="place" type="text" />
            </Grid>
          </Grid>
        </div>
      </article>
    );
  }
}

// TargetSet.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TargetSet;
