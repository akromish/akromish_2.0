import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme, Box,
} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ramblings from './pages/Ramblings';
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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          marginLeft={{ xs: '10vw', lg: '26vw' }}
          marginRight={{ xs: '10vw', lg: '26vw' }}
          paddingY={{ xs: '10vw', lg: '5vw' }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/ramblings" element={<Ramblings />} />
            <Route path="/cs-projects" element={<Projects />} />
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
