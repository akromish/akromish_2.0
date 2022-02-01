import {
  AppBar,
  Box,
  Drawer, IconButton, ListItem, ListItemButton, Stack, Switch,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import HelpCenterTwoToneIcon from '@mui/icons-material/HelpCenterTwoTone';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import CloseIcon from '@mui/icons-material/Close';

// stole MaterialUISwitch from https://mui.com/components/switches/
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

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
      <Stack>
        <Box paddingTop="3vw" />
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <MaterialUISwitch onChange={darkSwitchToggle} checked={darkSwitch} />
        </ListItem>
        <Stack direction={{ xs: 'column-reverse', lg: 'column' }}>
          <ListItem>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
              <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
                <RocketLaunchTwoToneIcon color="primary" sx={{ fontSize: { xs: '12vw', lg: '1.75vw' } }} />
                <Box fontSize={{ xs: '12vw', lg: '1.75vw' }} textAlign="center"> Home </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/about" onClick={toggleDrawer(false)}>
              <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
                <HelpCenterTwoToneIcon color="primary" sx={{ fontSize: { xs: '12vw', lg: '1.75vw' } }} />
                <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> About </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/cs-projects" onClick={toggleDrawer(false)}>
              <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
                <TerminalTwoToneIcon color="primary" sx={{ fontSize: { xs: '12vw', lg: '1.75vw' } }} />
                <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}>Projects </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/ramblings" onClick={toggleDrawer(false)}>
              <Stack direction="row" spacing={2} alignItems="center" fontSize="1.75vw">
                <BookTwoToneIcon color="primary" sx={{ fontSize: { xs: '12vw', lg: '1.75vw' } }} />
                <Box fontSize={{ xs: '12vw', lg: '1.75vw' }}> Ramblings</Box>
              </Stack>
            </ListItemButton>
          </ListItem>
        </Stack>
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={toggleDrawer(false)} color="error">
            <CloseIcon sx={{ fontSize: { xs: '12vw' }, display: { xs: 'block', lg: 'none' } }} />
          </IconButton>
        </ListItem>
      </Stack>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{ top: 'auto', bottom: 0 }}
      color="primary"
    >
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: { xs: '12vw' }, display: { xs: 'block', lg: 'none' } }} />
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
        anchor="bottom"
        open={drawerState}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', lg: 'none' }, height: '100%' }}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
}

NavBar.propTypes = {
  darkSwitchToggle: PropTypes.func.isRequired,
  darkSwitch: PropTypes.bool.isRequired,
};

export default NavBar;
