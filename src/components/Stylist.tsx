import Stack from '@mui/material/Stack';
import { BorderedAvatar } from '../utils/styledComponents';
import { Typography } from '@mui/material';
import style from './style';

export default function Stylists() {
  return (
    <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2} sx={style.stylistContainer}>
      <Typography variant="h6" sx={style.stylistHeading}>Stylists</Typography>
      <BorderedAvatar alt="User 1" src="assets/images/avatar/1.jpg" />
      <BorderedAvatar alt="User 2" src="assets/images/avatar/2.png" />
      <BorderedAvatar alt="User 3" src="assets/images/avatar/3.jpg" />
      <BorderedAvatar alt="User 4" src="assets/images/avatar/4.avif" />
      <BorderedAvatar alt="User 5">
        <Typography variant="caption" sx={style.stylistCaption}>see all</Typography>
      </BorderedAvatar>
    </Stack>
  );
}