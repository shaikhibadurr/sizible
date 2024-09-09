import Stack from '@mui/material/Stack';
import {  Button, Divider, Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import style from '../style';

export default function Login() {
  return (
    <Grid>
      <Stack spacing={3}>
        <Typography variant="h3" sx={style.centerText}>Login / Sign up</Typography>
        <TextField sx={style.loginInputBg} id="email" label="Enter email address" variant="outlined" />
        <TextField sx={style.loginInputBg} id="password" label="password" variant="outlined" />
        <Stack direction={{xs:'column',sm:'row'}} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h4" sx={style.link} component={Link} underline='none' href='#'>Forgot password?</Typography>
          <Button variant='contained' sx={style.loginBtn}>Login</Button>
        </Stack>
        <Stack py={3} alignItems={'center'}>
          <Divider sx={style.dividerWidth} />
        </Stack>
        <Typography variant="h3" sx={style.centerText}>Not a member? - Sign up</Typography>
        <Stack alignItems={'center'} >
          <Button variant='outlined' sx={style.joinBtn}>
            Join us
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
}