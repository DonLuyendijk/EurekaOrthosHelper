import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function EurekaOrthosHelperAppBar() {
  const theme = useTheme();

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