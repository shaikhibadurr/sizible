import { Box, Divider, Stack, Typography } from "@mui/material";

interface DashedDividerProps {
  isHovered: Boolean;
  top: any,
  left?: any,
  rotate?: any,
  width: any,
  selectValue?:any
}

export default function DashedDivider({ isHovered, top, left, rotate, width,selectValue }: DashedDividerProps) {
  return (
    <Stack sx={{position: 'absolute', top, left, transform:`rotate(${rotate}deg)`}} alignItems={'center'}>
    <Typography sx={{opacity:0.8,fontSize:'10px',position:'absolute',top:-8}}>{selectValue || ""}</Typography>
    <Stack sx={{px: 1.4,width, height: '18px', borderRadius: '10px', background: isHovered ? '#F7F7F7' : 'none', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{
        border: '1px dashed',
        borderColor: 'primary.main',
        width: '100%',
        position: 'relative',
        '&::before': {
          content: '""',
          height: '6px',
          width: '2px',
          bgcolor: 'primary.main',
          position: 'absolute',
          top: "50%",
          left: '-5px',
          transform: 'translateY(-50%)'
        },
        '&::after': {
          content: '""',
          height: '6px',
          width: '2px',
          bgcolor: 'primary.main', // Color for the round end caps
          position: 'absolute',
          top: "50%",
          right: '-5px',
          transform: 'translateY(-50%)'
        },
      }}></Box>
    </Stack>
    </Stack>
  );
}
