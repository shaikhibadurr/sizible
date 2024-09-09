import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { SettingTabs as Tabs } from '../../utils/styledComponents';
import { SettingTab as Tab } from '../../utils/styledComponents';
import style from '../style';
import { TabBox } from '../../utils/styledComponents';
import StylistsSlider from './Slider';
import FavouriteStyle from './FavouriteStyle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={style.tabPanelBackground}
      {...other}
    >
      {value === index && <Box sx={style.tabPanelChildren}>{children}</Box>}
    </Box>
  );
}

export default function SettingTabComponent() {

  // ==============================|| HOOKS ||============================== //
  const [value, setValue] = React.useState(1);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));   // To make the tabs responsive

  // ==============================|| FUCTIONS ||============================== //
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log();
    setValue(newValue);
  };

  return (
    <TabBox sx={style.displayFlex}>
      <Tabs orientation={'vertical'} value={value} onChange={handleChange}>
        <Tab label={"Privacy"} />
        <Tab label={"Stylists"} />
        <Tab label={"History"} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StylistsSlider/>
        <FavouriteStyle/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <StylistsSlider/>
      <FavouriteStyle/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <StylistsSlider/>
      <FavouriteStyle/>
      </TabPanel>
    </TabBox>
  );
}