import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
                  <Icon>record_voice_over</Icon>
                  <ListItemText primary="声掛け" />
                </ListItem>
                <ListItem>
                  <Icon>chat</Icon>
                  <ListItemText primary="エルゲ" />
                </ListItem>
                <ListItem>
                  <Icon>people</Icon>
                  <ListItemText primary="連れ出し" />
                </ListItem>
                <ListItem>
                  <Icon>favorite</Icon>
                  <ListItemText primary="CONNECT" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs>
              <TextField label="目標回数" id="pickup" type="number" />
              <TextField label="目標回数" id="getline" type="number" />
              <TextField label="目標回数" id="goout" type="number" />
              <TextField label="目標回数" id="connect" type="number" />
            </Grid>
          </Grid>
        </div>
        <section style={common.main}>
          <Button variant="contained" color="primary">BACK</Button>
          <Button variant="contained" color="secondary">START</Button>
        </section>

      </article>
    );
  }
}

// TargetSet.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TargetSet;
