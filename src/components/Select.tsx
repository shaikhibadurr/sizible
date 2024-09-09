import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';
import style from './style';

interface SelectInputProps {
  handleMouseEnter: () => void,
  handleMouseLeave: () => void,
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>,
  label: String,
  inputTop: any,
  selectValue: any,
  setSelectValue: any,
  selectArr: any,
  right:string | number
}

export default function SelectInput({ handleMouseEnter, handleMouseLeave, setIsHovered, label, inputTop, selectValue, setSelectValue, selectArr,right }: SelectInputProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    setIsHovered(false);
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{right,top:inputTop,...style.selectBox}}>
      <Typography variant={'h6'} sx={style.selectLabel} mb={0.2}>{label}</Typography>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label="select"
          onChange={handleChange}
          sx={style.bgWhite}
        >
          {selectArr.map((item: any, ind: number) => (
            <MenuItem key={ind} value={item.value}>{item.label}</MenuItem>))}

        </Select>
      </FormControl>
    </Box>
  );
}