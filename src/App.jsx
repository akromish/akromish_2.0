import React, { useState } from 'react';
import {
  Paper,
  ThemeProvider,
  createTheme,
  styled,
  Switch as Toggle,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
// import About from './pages/About';
import RamblingsAndSuch from './pages/RamblingsAndSuch';
import CSProjects from './pages/CSProjects';

const App = function app() {
  const [darkSwitch, setDarkSwitch] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkSwitch ? 'dark' : 'light',
      primary: {
        main: '#E040FB',
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
      },
    },
    shadows: Array(25).fill('none'),
  });
  const Offset = styled('div')(() => theme.mixins.toolbar);
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <Router>
          <NavBar />
          <Offset />
          <Toggle
            size="medium"
            onChange={() => {
              setDarkSwitch(!darkSwitch);
            }}
          />
          <Routes>
            {/* <Route path="/about"> */}
            {/*  <About /> */}
            {/* </Route> */}
            <Route path="/ramblings-and-such">
              <RamblingsAndSuch />
            </Route>
            <Route path="/cs-projects">
              <CSProjects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  );
};
export default App;
