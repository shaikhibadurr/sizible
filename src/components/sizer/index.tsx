import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useHoverComponents from "../../utils/hooks/useHoverComponents";
import { NeckList } from "../../data/measurementList";

export default function Sizer() {
  const [Neck, NeckBorder] = useHoverComponents('Neck', { inputTop: 0, selectArr: NeckList }, { top: 74, left: 38, width: 69 });
  const [Shoulder, ShoulderBorder] = useHoverComponents('Shoulder', { inputTop: 95, selectArr: NeckList }, { top: 96, left: 16, width: 115 });
  const [Arms, ArmsBorder] = useHoverComponents('Arms', { inputTop: 215, selectArr: NeckList }, { top: 189, left: -79, width: 190,rotate:276 });
  const [Legs, LegsBorder] = useHoverComponents('Legs', { inputTop: 350, selectArr: NeckList }, { top: 354, left: -65, width: 240,rotate:275 });
  const [Height, HeightBorder] = useHoverComponents('Height', { inputTop: 0, selectArr: NeckList,right:0 }, { top: 240, left: -80, width: 510,rotate:90 });
  const [Chest, ChestBorder] = useHoverComponents('Chest', { inputTop: 78, selectArr: NeckList,right:0 }, { top: 120, left: 30, width: 90 });
  const [Waist, WaistBorder] = useHoverComponents('Waist', { inputTop: 155, selectArr: NeckList,right:0 },{ top: 175, left: 33, width: 80 } );
  const [Hips, HipsBorder] = useHoverComponents('Hips', { inputTop: 226, selectArr: NeckList,right:0 },{ top: 238, left: 21, width: 105 });
  const [Shoe, ShoeBorder] = useHoverComponents('Shoe', { inputTop: 430, selectArr: NeckList,right:0 }, { top: 470, left: 80, width: 55,rotate:38 });
  return (
    <Grid size={12}>
      <Typography variant="h4" sx={{ color: 'black', textAlign: 'center', mb: 2, fontWeight: 500 }}>Set your perfect fit</Typography>
      <Stack sx={{width:'100%'}} spacing={1} direction={'row'} justifyContent={'space-between'}>
        <Stack sx={{ position: 'relative' }}>
          {Neck}
          {Shoulder}
          {Arms}
          {Legs}
        </Stack>
        <Stack sx={{ position: 'relative',width:'145' }} spacing={1}>
          {NeckBorder}
          {ShoulderBorder}
          {ArmsBorder}
          {LegsBorder}
          {HeightBorder}
          {ChestBorder}
          {WaistBorder}
          {HipsBorder}
          {ShoeBorder}
          <img width={145} src={'assets/images/womenOutlet.png'} alt={"Woman Outlet"} />
          <Button disabled variant="contained">Apply</Button>
        </Stack>
        <Box sx={{ position: 'relative' }}>
          {Height}
          {Chest}
          {Waist}
          {Hips}
          {Shoe}
        </Box>
      </Stack>
    </Grid>
  );
}
