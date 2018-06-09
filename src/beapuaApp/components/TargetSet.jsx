import React from 'react';
import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  Icon,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
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
        <Header leftIcon="chvron_left" rightIcon="more_vert" />

        <main style={common.main}>
          <GridList cols={1}>
            <GridListTile>
              <img src="assets/img/character/spanyan.png" alt="character" />
              <GridListTileBar title="Set your goal" />
            </GridListTile>
          </GridList>

          <section style={targetSet.sliderSection}>
            <Typography variant="title">Goal {this.state.goal} pt.</Typography>
            <Slider
              value={this.state.goal}
              min={0}
              max={100}
              step={10}
              onChange={(e, v) => { this.handleChangeGoal(e, v); }}
            />

            <Typography variant="title">Time {this.state.time} min.</Typography>
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
            label="Who"
            margin="normal"
            placeholder="Who"
          />
          <TextField
            fullWidth
            inputRef={(el) => { this.placeRef = el; }}
            label="Where"
            margin="normal"
            placeholder="Where"
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

export default TargetSet;
