import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme, useMediaQuery } from '@mui/material';
import style from './style';
import { TabBox } from '../utils/styledComponents';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box sx={{ px: 3, py: 4 }}>{children}</Box>}
    </div>
  );
}

export default function TabsComponent() {

  // ==============================|| HOOKS ||============================== //
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));   // To make the tabs responsive

  // ==============================|| FUCTIONS ||============================== //
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log();
    setValue(newValue);
  };

  return (
    <TabBox>
      <Tabs orientation={isMdUp ? 'horizontal' : 'vertical'} value={value} onChange={handleChange}>
        <Tab sx={style.paddingNone} icon={<HomeIcon color='primary' />} />
        <Tab label={"Sizer"} />
        <Tab label={"Get the look"} />
        <Tab label={"Settings"} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </TabBox>
  );
}