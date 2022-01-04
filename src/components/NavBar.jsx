import {
  Drawer, IconButton, List, ListItem,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SortIcon from '@material-ui/icons/Sort';

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
        <ListItem button component={Link} to="/">Home</ListItem>
        <ListItem button component={Link} to="/about">About</ListItem>
        <ListItem button component={Link} to="/cs-projects">CS Projects</ListItem>
        <ListItem button component={Link} to="/ramblings-and-such">Ramblings & Such</ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
      >
        <SortIcon />
      </IconButton>

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
