import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme, Box,
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
      <BrowserRouter>
        <Box
          marginLeft={{ xs: '10vw', lg: '22vw' }}
          marginRight={{ xs: '10vw', lg: '22vw' }}
          paddingTop={{ xs: '10vw', lg: '5vw' }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/ramblings-and-such" element={<RamblingsAndSuch />} />
            <Route path="/cs-projects" element={<CSProjects />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <NavBar
          darkSwitchToggle={darkSwitchToggle}
          darkSwitch={darkSwitch}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
