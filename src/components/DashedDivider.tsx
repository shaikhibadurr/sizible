import { Box, Divider, Stack, Typography } from "@mui/material";
import style from "./style";
import StylistsSlider from "./settings/Slider";

interface DashedDividerProps {
  isHovered: Boolean;
  top: any,
  left?: any,
  rotate?: any,
  width: any,
  selectValue?: any,
  height?: boolean
}

export default function DashedDivider({ isHovered, top, left, rotate, width, selectValue, height }: DashedDividerProps) {
  return (
    <Stack sx={{ position: 'absolute', top, left, transform: `rotate(${rotate}deg)` }} alignItems={'center'}>
      {!height && <Typography sx={style.dividerValue}>{selectValue || ""}</Typography>}
      <Stack sx={{ ...style.dashedDividerBoxStyle, width, background: isHovered ? "#F7F7F7" : "none", }}>
        {height ?
          <StylistsSlider height={true}  />
          :
          <Box sx={style.dashedDividerStyle}></Box>
        }
      </Stack>
    </Stack>
  );
}
