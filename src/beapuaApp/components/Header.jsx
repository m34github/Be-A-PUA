import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { header } from '../style';

const Header = () => (
  <section>
    <AppBar style={header.appBar}>
      <Toolbar>
        <Typography variant="display1" color="inherit" style={header.typography}>
          Be A PUA
        </Typography>
      </Toolbar>
    </AppBar>
  </section>
);

export default Header;
