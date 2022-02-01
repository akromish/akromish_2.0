import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme, Box,
} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Rambles from './pages/Rambles';
import Projects from './pages/Projects';
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
      fontFamily: [
        'Josefin Sans',
        'sans-serif',
      ].join(','),
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        desktop: 1100,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          marginLeft={{ mobile: '10vw', tablet: '15vw', desktop: '26vw' }}
          marginRight={{ mobile: '10vw', tablet: '15vw', desktop: '26vw' }}
          paddingTop={{ mobile: '10vw', tablet: '5vw', desktop: '5vw' }}
          paddingBottom={{ mobile: '22vw', tablet: '15vw', desktop: '9vw' }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/rambles" element={<Rambles />} />
            <Route path="/projects" element={<Projects />} />
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
