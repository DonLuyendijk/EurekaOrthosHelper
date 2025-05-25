import { FloorSelector } from './FloorSelector';
import { SoloSelectorSwitch } from './SoloSelectorSwitch';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function EurekaOrthosHelperDrawer({ floor, setFloor, soloMode, setSoloMode }) {
  const theme = useTheme();
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
      <Box component='main' sx={{ flexGrow: 1, py: 3, px: 1, marginBottom: 0}}>
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