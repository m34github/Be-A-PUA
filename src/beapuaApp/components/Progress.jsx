import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common } from '../style';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    // verticalAlign: 'middle',
    color: theme.palette.text.secondary,
    // height: 200,
    paddingTop: 100,
    paddingBottom: 100,
    marginTop: theme.spacing.unit * 1,
  },
  paper2: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    // verticalAlign: 'middle',
    color: theme.palette.text.secondary,
    // height: 80,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: theme.spacing.unit * 1,
  },
});

// let timer = null;
// const state = {
//   completed: 0,
//   buffer: 10,
// };

class Progress extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      completed: 0,
      buffer: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => { this.progress(); }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress() {
    const { completed } = this.state;
    // console.log(this.state);
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 0 });
    } else {
      // const diff = Math.random() * 10;
      const diff = 1;
      // const diff2 = Math.random() * 10;
      // state = {
      //   completed: completed + diff,
      //   buffer: completed + diff + diff2
      // };
      // console.log(diff);
      this.setState({ completed: completed + diff, buffer: completed + diff });
    }
  }

  render() {
    const { classes } = this.props;
    const { completed, buffer } = this.state;

    return (
      <article>
        <Header />
        {/* <Typography variant="display3">Progress</Typography> */}

        <section style={common.main}>
          <div className={classes.root}>
            残り時間：
            <br />
            <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
            目標達成度：
            <br />
            <LinearProgress color="secondary" variant="buffer" value={completed} valueBuffer={buffer} />
            <Grid container spacing={8}>
              <Grid item xs>
                <Paper className={classes.paper}>声かけ</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>エルゲ</Paper>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs>
                <Paper className={classes.paper}>連れ出し</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>コネクト</Paper>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs>
                <Paper className={classes.paper2}>あきらめる</Paper>
              </Grid>
            </Grid>
          </div>
        </section>
      </article>
    );
  }
}

Progress.propTypes = {
  // home: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  // loadHome: PropTypes.func.isRequired
};

// export default Progress;
export default withStyles(styles)(Progress);


// state = {
//   completed: 0,
//   buffer: 10,
// };

// componentDidMount() {
//   this.timer = setInterval(this.progress, 500);
// }

// componentWillUnmount() {
//   clearInterval(this.timer);
// }

// timer = null;

// progress = () => {
//   const { completed } = this.state;
//   if (completed > 100) {
//     this.setState({ completed: 0, buffer: 10 });
//   } else {
//     const diff = Math.random() * 10;
//     const diff2 = Math.random() * 10;
//     this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
//   }
// };

// render() {
//   const { classes } = this.props;
//   const { completed, buffer } = this.state;
//   return (
//     <div className={classes.root}>
//       <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
//       <br />
//       <LinearProgress color="secondary" variant="buffer" value={completed} valueBuffer={buffer} />
//     </div>
//   );
// }
// }
