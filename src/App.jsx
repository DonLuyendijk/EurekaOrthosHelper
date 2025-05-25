import { createTheme, ThemeProvider } from '@mui/material/styles' 
import { enemies } from './EnemyData.js';
import { bosses } from './BossData.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function filterRelevantEnemies(enemies, floor, soloMode) {
  return enemies.filter(enemy =>
    enemy.startFloor <= floor
    && enemy.endFloor >= floor
    && (soloMode || !enemy.mainlyDangerousWhenSolo)
  )
}

function isBossFloor(floor) {
  return (floor % 10 == 0 && floor < 100)
    || floor == 99;
}

function validateFloor(floor) {
  const floorNumber = Number(floor);
  return !isNaN(floorNumber) && floorNumber > 0 && floorNumber <= 100;
}

function tryTransform(transformFn, value) {
  const result = transformFn(Number(value));
  return validateFloor(result) ? result : value;
}

function isFinalFloor(floor) {
  return floor == 100;
}

function EnemyCard({ enemy }) {
  return (
    <Card sx={{ display: 'flex', height: 200, width: 700, border: `1px solid ${theme.palette.custom.border}`}}>
      <CardMedia
        component='img'
        image={enemy.image}
        sx={{
          width: 200,
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2' color='#ffffff' dangerouslySetInnerHTML={{ __html: enemy.name }} />
        <Typography
          variant='body2'
          color={theme.palette.text.secondary}
          component='p'
          dangerouslySetInnerHTML={{ __html: enemy.notes }}
        />
      </CardContent>
    </Card>
  );
}

function EurekaOrthosHelperAppBar() {
  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: theme.palette.background.paper}}>
        <Toolbar>
          <Typography variant='h6' component='div'>
            Eureka Orthos Helper
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

function NoGridPage({headerText, bodyText}) {
  return (
    <Box>
    <Typography variant='h6' align={'center'} fontSize={28} dangerouslySetInnerHTML={{ __html: headerText }} />
    <Typography align={'center'} color={theme.palette.text.secondary} fontSize={18} dangerouslySetInnerHTML={{ __html: bodyText }} />
  </Box>
  )
}

function InvalidValuePage() {
  return <NoGridPage
    headerText={'Invalid floor'}
    bodyText={'The floor number you entered is invalid.<br>(or it is a boss floor, which has not yet been implemented)'}
  />;
}

function NoDangerPage() {
  return <NoGridPage
    headerText={'No danger'}
    bodyText={'This floor does not have any dangerous enemies. Do not stand in orange.'}
  />;
}

function EnemyInfoPage({ floor, soloMode }) {
  if (!validateFloor(floor)) {
    return <InvalidValuePage />;
  }
  
  if (isBossFloor(floor)) {
    return <Typography dangerouslySetInnerHTML={{ __html: bosses[floor] }} />
  }

  if (isFinalFloor(floor)) {
    return (
      <Typography variant='h6' align={'center'} fontSize={28}>
        Congratulations!
      </Typography>
    )
  }
  
  const relevantEnemies = filterRelevantEnemies(enemies, floor, soloMode);

  if (relevantEnemies.length == 0) {
    return <NoDangerPage />;
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {relevantEnemies.map((enemy, index) => (
            <Grid item xs={12} sm={6} md={2} lg={2} xl={1} key={index}>
              <EnemyCard key={index} enemy={enemy} />
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function SoloSelectorSwitch({ soloMode, setSoloMode }) {
  return (
    <Box sx={{ display: 'flex', py: 5, alignItems: 'center', flexDirection: 'column',}}>
      <Typography gutterBottom textAlign={'center'}>
        Include enemies which are mainly dangerous when solo
      </Typography>
      <Switch
        sx={{
          '& .MuiSwitch-switchBase': {
            color: theme.palette.custom.grey,
            '&.Mui-checked': {
              color: theme.palette.custom.primary20,
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.custom.primary20,
              },
            },
          },
          '& .MuiSwitch-track': {
            backgroundColor: theme.palette.custom.grey,
          },
        }}
        value={soloMode}
        onChange={(e) => setSoloMode(e.target.checked)}
      />
    </Box>
  )
}

function FloorSelector({ floor, setFloor }) {
  const floorIsValid = validateFloor(floor);

  const increment = () => {
    setFloor(prev => tryTransform(x => x + 1, prev));
  };
  
  const decrement = () => {
    setFloor(prev => tryTransform(x => x - 1, prev));
  };

  const changeFloor = (event) => {
    setFloor(event.target.value);
  }

  return (
    <Box sx={{ display: 'flex', gap: 1}}>
      <Button
        variant='contained'
        sx={{minWidth: 30, backgroundColor: theme.palette.custom.primary20, color: theme.palette.custom.black}}
        onClick={decrement}
      >
        -
      </Button>
      <TextField
        id='floor-field'
        variant='outlined'
        size='small'
        value={floor}
        sx={{
          height: 40,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: (theme) => theme.palette.custom.border,
            },
            '&:hover fieldset': {
              borderColor: (theme) => theme.palette.custom.white,
            },
            '&.Mui-focused fieldset': {
              borderColor: (theme) => theme.palette.custom.primary00,
              borderWidth: '1px'
            }
          }
        }}
        onChange={changeFloor}
        error={!floorIsValid}
        helperText={floorIsValid ? '' : 'Invalid value'}
      />
      <Button
        variant='contained'
        sx={{minWidth: 30, backgroundColor: theme.palette.custom.primary20, color: theme.palette.custom.black}}
        onClick={increment}
      >
        +
      </Button>
    </Box>
  )
}

function EurekaOrthosHelperDrawer({ floor, setFloor, soloMode, setSoloMode }) {
  const width = 250;

  return (
    <Drawer
      variant={'permanent'}
      sx={{
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: width,
          boxSizing: 'border-box',
          backgroundColor: (theme) => theme.palette.background.default,
          borderRight: `1px solid ${theme.palette.custom.borderDrawer}`,
        }
      }}
    >
      <Box component='main' sx={{ flexGrow: 1, py: 3, px: 1}}>
        <Toolbar />
        <Typography gutterBottom variant='h6' textAlign={'center'}>
          Floor
        </Typography>
        <FloorSelector floor={floor} setFloor={setFloor} />
        <SoloSelectorSwitch soloMode={soloMode} setSoloMode={setSoloMode} />
      </Box>
    </Drawer>
  )
}

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
        <EurekaOrthosHelperAppBar />
        <EurekaOrthosHelperDrawer floor={floor} setFloor={setFloor} soloMode={soloMode} setSoloMode={setSoloMode} />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <EnemyInfoPage floor={floor} soloMode={soloMode} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}