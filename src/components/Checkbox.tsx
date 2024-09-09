import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { CustomCheckbox } from '../utils/styledComponents';
import { FormControlLabel, Stack, Typography } from '@mui/material';

interface CheckboxComponentProps {
  label:String,
  checked?: any 
}

export default function CheckboxComponent({label,checked}:CheckboxComponentProps) {
  return (
    <Stack style={{minWidth:'200px'}} alignItems={'center'}>
      <FormControlLabel
        value="bottom"
        control={<CustomCheckbox
          checked={checked}
          checkedIcon={<CloseRoundedIcon fontSize="small" />}
          icon={<div style={{width:'22.86px',height:'22.86px'}}></div>}
          color="primary"
        />}
        label={<Typography variant='h4' sx={{fontWeight:400,color:'#868686'}}>{label}</Typography>}
        labelPlacement="bottom"
      />

    </Stack>
  );
}
