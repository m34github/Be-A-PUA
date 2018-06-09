import React from 'react';
import {
  Button,
  Grid,
  Icon,
  LinearProgress,
  Paper,
  Typography
} from '@material-ui/core';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common, progress } from '../style';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalCompleted: 0,
      currentScore: 0,
      timeLimit: 0,
      currentSec: 0
    };
    console.log(this.props.location.state);
  }

  componentDidMount() {
    setInterval(() => { this.timer(); }, 1000);
  }

  adder(pt) {
    this.setState({
      goalCompleted: ((this.state.currentScore + pt) / this.props.location.state.goal) * 100,
      currentScore: this.state.currentScore + pt
    });
  }

  timer() {
    this.setState({
      timeLimit: (this.state.currentSec / (this.props.location.state.time * 60)) * 100,
      currentSec: this.state.currentSec + 1
    });
  }

  render() {
    return (
      <article>
        <Header />

        <section style={common.main}>
          <section style={progress.linearSection}>
            <section style={progress.goalSection}>
              <Typography variant="title">Current score</Typography>
              <LinearProgress variant="determinate" value={this.state.goalCompleted} style={progress.goal} />
            </section>

            <section style={progress.timeSection}>
              <Typography variant="title">Time limit</Typography>
              <LinearProgress variant="determinate" value={this.state.timeLimit} style={progress.time} />
            </section>
          </section>

          <Grid container spacing={8}>
            <Grid item xs={6}>
              <Paper
                style={{
                  background: '#222',
                  color: '#fff',
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => { this.adder(5); }}
              >
                <Icon style={progress.icon}>record_voice_over</Icon>
                <Typography variant="title" color="inherit">声掛け</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                style={{
                  background: '#222',
                  color: '#fff',
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => { this.adder(10); }}
              >
                <Icon style={progress.icon}>chat</Icon>
                <Typography variant="title" color="inherit">エルゲ</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                style={{
                  background: '#222',
                  color: '#fff',
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => { this.adder(25); }}
              >
                <Icon style={progress.icon}>people</Icon>
                <Typography variant="title" color="inherit">連れ出し</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                style={{
                  background: '#222',
                  color: '#fff',
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => { this.adder(100); }}
              >
                <Icon style={progress.icon}>favorite</Icon>
                <Typography variant="title" color="inherit">コネクト</Typography>
              </Paper>
            </Grid>
          </Grid>
        </section>

        <footer style={common.footer}>
          <Button
            color="secondary"
            fullWidth
            variant="contained"
          >
            Surrender
          </Button>
        </footer>
      </article>
    );
  }
}

export default Progress;
