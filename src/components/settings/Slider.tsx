import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import style from "../style";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function StylistsSlider({height}:any) {
  return (
    <Stack sx={style.fullWidth} alignItems={'center'}>
      <Stack sx={style.sliderWidth}>
        {!height && 
        <Typography variant="h4" sx={style.sliderTitle}>
          Stylists Distance
        </Typography>
        }
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks
          min={0}
          max={100}
          track={false}
          size="small"
          sx={style.mainSlider}
        />
        {!height && 
    
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h4" sx={style.rightSliderLabel}
          >
            My Country Only
          </Typography>
          <Typography variant="h4" sx={style.leftSliderLabel}
          >
            Worlwide
          </Typography>
        </Stack>
        }
      </Stack>
    </Stack>
  );
}
