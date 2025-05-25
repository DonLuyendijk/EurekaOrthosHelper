import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export function SoloSelectorSwitch({ soloMode, setSoloMode }) {
  const theme = useTheme();

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
      {soloMode && <Typography>
        Note: Because this tool was mainly built for party play, solo mode might not include every single threat when playing alone.
      </Typography>}
    </Box>
  )
}