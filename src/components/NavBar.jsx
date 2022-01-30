import {
  Button,
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
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

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
        {/* TODO: make this menu close look better */}
        <Stack alignItems="right">
          <Button onClick={toggleDrawer(false)}>
            <CloseSharpIcon />
          </Button>
        </Stack>
        <ListItem>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="32px">
              <HomeSharpIcon
                sx={{
                  fontSize: '32px',
                }}
              />
              <div> Home </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/about" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="32px">
              <InfoIconSharp
                sx={{
                  fontSize: '32px',
                }}
              />
              <div> About </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/cs-projects" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="32px">
              <TerminalSharpIcon
                sx={{
                  fontSize: '32px',
                }}
              />
              <div> CS Projects </div>
            </Stack>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/ramblings-and-such" onClick={toggleDrawer(false)}>
            <Stack direction="row" spacing={2} alignItems="center" fontSize="32px">
              <CreateSharpIcon
                sx={{
                  fontSize: '32px',
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
  // TODO: figure out how to make this only apply to desktop view
  // 20vw - enough to cover navbar icon
    <div style={{ marginLeft: 'calc(20vw - 2.75vw)' }}>
      <IconButton
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon
          sx={{
            fontSize: '2vw',
          }}
        />
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
  darkSwitch: PropTypes.bool.isRequired,
};

export default NavBar;
