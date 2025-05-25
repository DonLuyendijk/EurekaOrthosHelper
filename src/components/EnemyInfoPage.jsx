import { Bosses } from '../data/BossData.js';
import { Enemies } from '../data/EnemyData.js';
import { EnemyCard } from './EnemyCard.jsx';
import { NoGridPage } from './NoGridPage.jsx';
import { useTheme } from '@mui/material/styles';
import * as helpers from '../helpers.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function EnemyInfoPage({ floor, soloMode }) {
  const theme = useTheme();

  if (!helpers.validateFloor(floor)) {
    return <NoGridPage
      headerText={'Invalid floor'}
      bodyText={'The floor number you entered is invalid.<br>(or it is a boss floor, which has not yet been implemented)'}
      theme={theme}
    />;
  }
  
  if (helpers.isBossFloor(floor)) {
    return <Typography dangerouslySetInnerHTML={{ __html: Bosses[floor] }} />
  }

  if (helpers.isFinalFloor(floor)) {
    return (
      <Typography variant='h6' align={'center'} fontSize={28}>
        Congratulations!
      </Typography>
    )
  }
  
  const relevantEnemies = helpers.filterRelevantEnemies(Enemies, floor, soloMode);

  if (relevantEnemies.length == 0) {
    return <NoGridPage
      headerText={'No danger'}
      bodyText={'This floor does not have any dangerous enemies. Do not stand in orange.'}
      theme={theme}
    />;
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