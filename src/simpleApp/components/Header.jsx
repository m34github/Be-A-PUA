import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <section>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          SimpleApp
        </Typography>
      </Toolbar>
    </AppBar>
  </section>
);

export default Header;
