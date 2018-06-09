import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Header from './Header.jsx';
import { common } from '../style';

const styles = theme => ({
  root1: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 16,
    height: 35,
    marginTop: theme.spacing.unit * 3,
  }),
  root2: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    height: 180,
    marginTop: theme.spacing.unit * 3,
  }),
  root3: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    height: 180,
    marginTop: theme.spacing.unit * 3,
  }),
  root4: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    height: 210,
    marginTop: theme.spacing.unit * 3,
  }),
  root5: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 0,
    height: 20,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Result extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <article>
        <Header leftIcon="chvron_left" rightIcon="more_vert" />
        <main style={common.main} />
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <Typography variant="display2">
                <Paper className={classes.root1} >Result</Paper>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root2}>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root3}>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2" />(名前さん)の結果はXX点
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.root4}>Pye Chart</Paper>
            </Grid>
          </Grid>
          <Typography variant="display5">
            <Paper className={classes.root5}>Be a PUA</Paper>
          </Typography>
        </div>
      </article>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);
// export default Result;
