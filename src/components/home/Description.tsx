import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import style from '../style';

export default function Description() {
  return (
    <Grid>
      <Stack sx={style.descWidth} spacing={3}>
        <Box>
          <Typography variant="h3" sx={style.centerText}>You’ll never buy the wrong size again.</Typography>
          <Typography variant="h4" sx={style.para}>Sizible remembers your measurements and uses AI to match the correct garment.</Typography>
        </Box>
        <img src='assets/images/home/description.png' />
        <Box sx={style.centerText}>
          <Button variant='contained' sx={style.descButton} >
            <Stack direction={'row'} spacing={3}>
              <Stack>
                <Typography variant='h1' sx={style.descButtonTitle}>Try it</Typography>
                <Typography variant="h3" sx={style.descButtonPara}>for size</Typography>
              </Stack>
              <Stack>
                <img src='assets/images/home/tap.png' />
              </Stack>
            </Stack>
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
}