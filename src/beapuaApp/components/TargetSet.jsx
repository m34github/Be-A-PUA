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
  TextField
} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

import Header from './Header.jsx';
import { common } from '../style';

class TargetSet extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.placeRef = React.createRef();
    this.state = {
      value: 30
    };
  }

  handleChange(event, value) {
    this.setState({
      value
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

          <Slider
            value={this.state.value}
            min={0}
            max={100}
            step={10}
            onChange={(e, v) => { this.handleChange(e, v); }}
          />

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
        </main>

        <footer style={common.footer}>
          <Button
            color="primary"
            fullWidth
            onClick={() => { this.props.history.push('/progress'); }}
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
