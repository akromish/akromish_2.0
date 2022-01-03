import {
  Button, Drawer, List, ListItem,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <ListItem>
          <Button component={Link} to="/">Home</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/about">About</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/cs-projects">CS Projects</Button>
        </ListItem>
        <ListItem>
          <Button component={Link} to="/ramblings-and-such">Ramblings & Such</Button>
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
