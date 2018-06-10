import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

import Header from './Header.jsx';
import { common, targetSet } from '../style';

class TargetSet extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.placeRef = React.createRef();
    this.state = {
      goal: 30,
      time: 30
    };
  }

  handleChangeGoal(event, goal) {
    this.setState({
      goal
    });
  }

  handleChangeTime(event, time) {
    this.setState({
      time
    });
  }

  render() {
    return (
      <article>
        <Header />

        <main style={common.main}>
          <GridList cols={1}>
            <GridListTile>
              <img src="assets/img/character/onmusu/dogo_square.png" alt="character" />
              <GridListTileBar title="ピックアップのゴールを決めよう！" />
            </GridListTile>
          </GridList>

          <section style={targetSet.sliderSection}>
            <Typography variant="title">ゴールスコア {this.state.goal} pt.</Typography>
            <Slider
              value={this.state.goal}
              min={0}
              max={100}
              step={10}
              onChange={(e, v) => { this.handleChangeGoal(e, v); }}
            />

            <Typography variant="title">制限時間 {this.state.time} 分.</Typography>
            <Slider
              value={this.state.time}
              min={0}
              max={120}
              step={1}
              onChange={(e, v) => { this.handleChangeTime(e, v); }}
            />
          </section>

          <TextField
            fullWidth
            inputRef={(el) => { this.nameRef = el; }}
            label="ニックネーム"
            margin="normal"
            placeholder="例: ナンパンマン"
          />
          <TextField
            fullWidth
            inputRef={(el) => { this.placeRef = el; }}
            label="狩場"
            margin="normal"
            placeholder="例: 新宿 西口"
          />

          <section style={targetSet.paperSection}>
            <Typography variant="subheading">スコア表</Typography>
            <Paper>
              <List>
                <ListItem>
                  <ListItemText primary="声掛け" />
                  <ListItemText primary="5 pt." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="エルゲ" />
                  <ListItemText primary="10 pt." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="連れ出し" />
                  <ListItemText primary="25 pt." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="コネクト" />
                  <ListItemText primary="100 pt." />
                </ListItem>
              </List>
            </Paper>
          </section>
        </main>

        <footer style={common.footer}>
          <Button
            color="primary"
            fullWidth
            onClick={
              () => {
                this.props.history.push({
                  pathname: '/progress',
                  state: {
                    name: this.nameRef.value,
                    place: this.placeRef.value,
                    goal: this.state.goal,
                    time: this.state.time
                  }
                });
              }}
            variant="contained"
          >
            Start
          </Button>
        </footer>
      </article>
    );
  }
}

TargetSet.propTypes = {
  history: PropTypes.object.isRequired
};

export default TargetSet;
