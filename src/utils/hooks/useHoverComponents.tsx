import { useState } from "react";
import DashedDivider from "../../components/DashedDivider";
import SelectInput from "../../components/Select";

export default function useHoverComponents(label: String, { inputTop, selectArr,right }: any, { top, left, rotate, width }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return [
    <SelectInput {...{ handleMouseEnter, handleMouseLeave, setIsHovered, label, inputTop, selectValue, setSelectValue, selectArr,right }} />,
    <DashedDivider {...{ isHovered, top, left, rotate, width, selectValue }} />
  ]
}
