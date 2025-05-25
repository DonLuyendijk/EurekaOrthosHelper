import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function NoGridPage({ headerText, bodyText }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant='h6' align={'center'} fontSize={28} dangerouslySetInnerHTML={{ __html: headerText }} />
      <Typography align={'center'} color={theme.palette.text.secondary} fontSize={18} dangerouslySetInnerHTML={{ __html: bodyText }} />
    </Box>
  )
}