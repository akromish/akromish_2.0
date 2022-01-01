import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ramblings-and-such">Ramblings and Such</Link>
        <Link to="/cs-projects">CS Projects</Link>
      </Toolbar>
    </AppBar>
  );
}
