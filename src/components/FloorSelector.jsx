import { useTheme } from '@mui/material/styles';
import * as helpers from '../helpers.js'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function FloorSelector({ floor, setFloor }) {
  const theme = useTheme();
  const floorIsValid = helpers.validateFloor(floor);

  const increment = () => {
    setFloor(prev => helpers.tryTransform(x => x + 1, prev));
  };
  
  const decrement = () => {
    setFloor(prev => helpers.tryTransform(x => x - 1, prev));
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