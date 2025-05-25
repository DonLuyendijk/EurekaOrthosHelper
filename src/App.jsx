import { createTheme, ThemeProvider } from '@mui/material/styles' 
import { EnemyInfoPage } from './components/EnemyInfoPage.jsx';
import { EurekaOrthosHelperAppBar } from './components/EurekaOrthosHelperAppBar.jsx';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { EurekaOrthosHelperDrawer } from './components/EurekaOrthosHelperDrawer.jsx';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',
      paper: '#282828'
    },
    text: {
      primary: '#ffffff',
      secondary: '#eeeeee'
    },
    error: {
      main: '#cf6679'
    },
    custom: {
      primary00: '#bff5ff',
      primary20: '#cef7ff',
      black: '#000000',
      white: '#ffffff',
      grey: '#a5a5a5',
      border: '#575757',
      borderDrawer: '#3f3f3f'
    }
  }
});

export default function App() {
  const [floor, setFloor] = useState(1);
  const [soloMode, setSoloMode] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#121212',
        }}
      >
        <CssBaseline />
        <EurekaOrthosHelperAppBar theme={theme}/>
        <EurekaOrthosHelperDrawer floor={floor} setFloor={setFloor} soloMode={soloMode} setSoloMode={setSoloMode} />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <EnemyInfoPage floor={floor} soloMode={soloMode} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}