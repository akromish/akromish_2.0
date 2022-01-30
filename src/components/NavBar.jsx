import {
  Box,
  Drawer, IconButton, List, ListItem, ListItemButton, Stack, Switch,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InfoIconSharp from '@mui/icons-material/InfoSharp';
import TerminalSharpIcon from '@mui/icons-material/TerminalSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';

function NavBar({
  darkSwitchToggle,
  darkSwitch,
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
      style={{
        width: '20vw',
      }}
    >
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <HomeSharpIcon
                sx={{
                  fontSize: '1.75vw',
                }}
              />
              <div> Home </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/about" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <InfoIconSharp
                sx={{
                  fontSize: '1.75vw',
                }}
              />
              <div> About </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/cs-projects" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <TerminalSharpIcon
                sx={{
                  fontSize: '1.75vw',
                }}
              />
              <div> CS Projects </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/ramblings-and-such" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <CreateSharpIcon
                sx={{
                  fontSize: '1.75vw',
                }}
              />
              <div> Ramblings and Such </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          {/* TODO: make this dark toggle look nicer */}
          <Switch
            size="medium"
            onChange={darkSwitchToggle}
            checked={darkSwitch}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box justifyContent="center">
      <IconButton
        sx={{
          marginLeft: 'auto',
        }}
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon
          sx={{
            fontSize: { xs: '8vw', lg: '2vw' },
          }}
        />
      </IconButton>

      <Drawer
        variant="permanent"
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        {list()}
      </Drawer>
      <Drawer
        variant="temporary"
        anchor="top"
        open={drawerState}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', lg: 'none' } }}
      >
        {list()}
      </Drawer>

    </Box>
  );
}

NavBar.propTypes = {
  darkSwitchToggle: PropTypes.func.isRequired,
  darkSwitch: PropTypes.bool.isRequired,
};

export default NavBar;
