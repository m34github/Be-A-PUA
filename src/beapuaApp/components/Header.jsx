import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <section>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Be A PUA
        </Typography>
      </Toolbar>
    </AppBar>
  </section>
);

export default Header;
