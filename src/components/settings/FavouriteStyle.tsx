import { Stack, Typography } from "@mui/material";
import CustomCheckbox from "../Checkbox";
import style from "../style";

export default function FavouriteStyle() {
  return (
    <Stack mt={5} spacing={2}>
        <Typography variant="h4" sx={style.favouriteStyleHead}>
          Styles I like
        </Typography>
        <Stack direction={'row'} sx={style.wrap} justifyContent={'space-between'} rowGap={4}>
          <CustomCheckbox checked={true} label={'Work Suits'}/>
          <CustomCheckbox label={'Nights Out'}/>
          <CustomCheckbox label={'Sportswear'}/>
          <CustomCheckbox label={'Casual'}/>
          <CustomCheckbox label={'Work Suits'}/>
          <CustomCheckbox label={'Work Suits'}/>
          <CustomCheckbox label={'Eveningwear'}/>
          <CustomCheckbox label={'Mod'}/>
        </Stack>
    </Stack>
  );
}
