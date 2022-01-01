import {
  Button, Drawer, Link, List, ListItem,
} from '@mui/material';
import React from 'react';

export default function NavBar() {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      setDrawerState(open);
    }
    setDrawerState(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/"
        >
          Home
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
        >
          About
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        variant="contained"
      >
        Navbar
      </Button>

      <Drawer
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}

// <AppBar>
//   <Toolbar>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/ramblings-and-such">Ramblings & Such</Link>
//     <Link to="/cs-projects">CS Projects</Link>
//   </Toolbar>
// </AppBar>
