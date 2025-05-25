import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function EnemyCard({ enemy }) {
  const theme = useTheme();
  
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