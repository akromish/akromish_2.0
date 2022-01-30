import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RamblingsAndSuch from './pages/RamblingsAndSuch';
import CSProjects from './pages/CSProjects';
import About from './pages/About';

const App = function app() {
  const [darkSwitch, setDarkSwitch] = useState(false);
  const darkSwitchToggle = () => {
    setDarkSwitch(!darkSwitch);
  };
  const theme = createTheme({
    palette: {
      mode: darkSwitch ? 'dark' : 'light',
      primary: {
        main: '#ce8bf0',
      },
    },
    typography: {
      // fontFamily: 'Ubuntu', // TODO: figure out how to do fonts lol
    },
  });

  return (
    // TODO: figure out why above and below main component there is white/blackspace
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <BrowserRouter>
          <NavBar
            darkSwitchToggle={darkSwitchToggle}
            darkSwitch={darkSwitch}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // TODO: figure out how to make this only apply to desktop view
            marginLeft: '20vw',
            marginRight: '20vw',
          }}
          >
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/ramblings-and-such" element={<RamblingsAndSuch />} />
              <Route path="/cs-projects" element={<CSProjects />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};
export default App;
