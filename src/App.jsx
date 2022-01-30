import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  Paper,
} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        main: '#E040FB',
      },
    },
  });

  return (
    // TODO: figure out how to apply theme to main div
    <ThemeProvider theme={theme}>
      <Paper style={{
        height: '100vh',
        borderRadius: 0,
      }}
      >
        <BrowserRouter>
          <NavBar
            darkSwitchToggle={darkSwitchToggle}
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
      </Paper>
    </ThemeProvider>
  );
};
export default App;
