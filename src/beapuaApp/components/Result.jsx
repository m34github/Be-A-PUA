import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  LinearProgress,
  List,
  ListItem,
  Typography
} from '@material-ui/core';

import { db } from '../.env/firebase.config';
import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common, result } from '../style';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      message: this.props.location.state.result === 'success' ? 'Congratulations!' : 'Failed...',
      date: new Date(),
      tips: ''
    };
  }

  componentDidMount() {
    const index = Math.floor(Math.random() * 17);
    this.getJson(index);
  }

  getJson(index) {
    db.ref('prod').child('tips').once('value')
      .then((snapshot) => {
        this.setState({
          isLoaded: true,
          tips: snapshot.val()[index]
        });
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <article>
          <Header />

          <main style={common.main}>
            <section style={result.message}>
              <Typography
                variant="display2"
                style={{
                  fontFamily: this.state.message === 'Congratulations!' ? 'lobster' : 'eater'
                }}
              >
                {this.state.message}
              </Typography>
            </section>

            <section style={result.goalSection}>
              <Typography variant="title">{this.props.location.state.score} pt.</Typography>
              <LinearProgress variant="determinate" value={this.props.location.state.goalCompleted} />
            </section>

            <section style={result.timeSection}>
              <Typography variant="title">{this.props.location.state.sec} sec.</Typography>
              <LinearProgress color="secondary" variant="determinate" value={this.props.location.state.timeLimit} />
            </section>

            <section style={result.infoSection}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <section style={{ height: 200, background: 'url(assets/img/character/onmusu/dogo_square.png) center / cover' }} />
                </Grid>
                <Grid item xs={6} style={result.info}>
                  <List>
                    <ListItem>
                      <Typography variant="title" style={{ color: '#FF9800' }}>お疲れ様！</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="title">{`${this.state.date.getFullYear()} / ${this.state.date.getMonth() + 1} / ${this.state.date.getDate()}`}</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="title">{this.props.location.state.name}</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="title">{this.props.location.state.place}</Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </section>

            <section>
              <Typography variant="subheading">今日のワンポイント tips</Typography>
              <section style={result.tips}>
                {this.state.tips}
              </section>
            </section>
          </main>

          <footer style={common.footer}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => { this.props.history.push('/'); }}
            >
              Try again
            </Button>
          </footer>
        </article>
      );
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}

Result.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Result;
