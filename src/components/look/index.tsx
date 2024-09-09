import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import style from '../style';

export default function Look() {
  return (
    <Grid size={12} >
      <Stack spacing={3} alignItems={'center'}>
        <Box>
          <Typography variant="h3" sx={style.centerText}>Get the look you want</Typography>
          <Typography variant="h4" sx={style.para}>Book stylists for 1-to-1 shopping trips.</Typography>
        </Box>
        <Box>
          <img width={"100%"} src='assets/images/look2.png' />
        </Box>
        <Box sx={style.centerText}>
          <Button variant='outlined'>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
              <Stack>
                <Typography variant='h2' sx={style.lookBtnHead}>Download App</Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant='h5' sx={style.lookBtn}>available on</Typography>
                <Stack direction={'row'} spacing={2}>
                  <img src='assets/images/appstore.png' />
                  <img src='assets/images/playstore.png' />
                </Stack>
              </Stack>
            </Stack>
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
}
