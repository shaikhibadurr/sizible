import Grid from "@mui/material/Grid2";
import Stylists from "./Stylist";
import Description from "./Description";
import { Divider } from "@mui/material";
import style from "../style";
import Login from "./login";

export default function Home() {
  return (
    <Grid container spacing={4}>
      <Stylists />
      <Grid container size={{ xs: 12, sm: 10 }}>
        <Grid container size={{ xs: 12, sm: 6 }} justifyContent={'center'} alignItems={'center'}>
          <Description />
        </Grid>
        <Grid container size={{ xs: 1 }} justifyContent={'center'} alignItems={'center'}>
          <Divider orientation={"vertical"} sx={style.homeDivider} />
        </Grid>
        <Grid container size={{ xs: 12, sm: 5}} justifyContent={'center'} alignItems={'center'}>
          <Login/>
        </Grid>
      </Grid>
    </Grid>
  );
}
