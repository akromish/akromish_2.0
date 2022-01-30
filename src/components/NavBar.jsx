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
    <Box
      role="presentation"
      width={{ xs: '100vw', lg: '20vw' }}
      justifyContent="center"
      alignItems="center"
    >
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <HomeSharpIcon
                sx={{
                  fontSize: { xs: '12vw', lg: '1.75vw' },
                }}
              />
              <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> Home </Box>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/about" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <InfoIconSharp
                sx={{
                  fontSize: { xs: '12vw', lg: '1.75vw' },
                }}
              />
              <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> About </Box>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/cs-projects" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <TerminalSharpIcon
                sx={{
                  fontSize: { xs: '12vw', lg: '1.75vw' },
                }}
              />
              <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> CS Projects </Box>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/ramblings-and-such" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
              <CreateSharpIcon
                sx={{
                  fontSize: { xs: '12vw', lg: '1.75vw' },
                }}
              />
              <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> Ramblings and Such </Box>
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
    </Box>
  );

  return (
    <Box justifyContent="center">
      {/* TODO: figure out how to move button to right side of screen */}
      <IconButton
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon
          sx={{
            fontSize: { xs: '12vw' },
            display: { xs: 'block', lg: 'none' },

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
