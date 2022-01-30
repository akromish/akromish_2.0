import {
  Drawer, IconButton, List, ListItem, Switch as Toggle,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({
  darkSwitchToggle,
}) {
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
        <Toggle
          size="medium"
          onChange={darkSwitchToggle}
        />
      </List>
    </div>
  );

  return (
  // figure out how to make this only apply to desktop view
    <div style={{ marginLeft: '20vw' }}>
      <IconButton
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
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

NavBar.propTypes = {
  darkSwitchToggle: PropTypes.func.isRequired,
};

export default NavBar;
