import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common } from '../style';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    if (this.props.home.isLoaded) {
      return (
        <article>
          <Header />

          <section style={{
            padding: 12,
            marginTop: 56
          }}
          >
            <Typography variant="subheading">Home</Typography>
            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/set'); }}>Target Set</Button>
            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/progress'); }}>Progress</Button>
            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/result'); }}>Result</Button>
          </section>

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

Home.propTypes = {
  home: PropTypes.object.isRequired,
  // classes: PropTypes.object.isRequired,
  loadHome: PropTypes.func.isRequired
};

export default Home;
