import * as React from 'react';
import { MainTabs as Tabs } from '../utils/styledComponents';
import { MainTab as Tab } from '../utils/styledComponents';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme, useMediaQuery } from '@mui/material';
import style from './style';
import { TabBox } from '../utils/styledComponents';
import Home from './home';
import withStylists from '../utils/hoc/withStylists';
import Sizer from './sizer';
import Look from './look';
import Settings from './settings';

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
      sx={style.tabPanel}
      {...other}
    >
      {value === index && <Box sx={style.tabPanelChildren}>{children}</Box>}
    </Box>
  );
}

export default function TabsComponent() {

  // ==============================|| HOOKS ||============================== //
  const [value, setValue] = React.useState(3);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));   // To make the tabs responsive

  // ==============================|| FUCTIONS ||============================== //
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log();
    setValue(newValue);
  };

  // ==============================|| TABS COMPONENT` ||============================== //
  const HomeWithStylists = withStylists(Home);
  const SizerWithStylists = withStylists(Sizer);
  const LookWithStylist = withStylists(Look);
  const SettingsWithStylist = withStylists(Settings);

  return (
    <TabBox>
      <Tabs orientation={isMdUp ? 'horizontal' : 'vertical'} value={value} onChange={handleChange}>
        <Tab sx={style.paddingNone} icon={<HomeIcon sx={style.colorPrimaryLight} />} />
        <Tab label={"Sizer"} />
        <Tab label={"Get the look"} />
        <Tab label={"Settings"} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <HomeWithStylists />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SizerWithStylists/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LookWithStylist/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SettingsWithStylist/>
      </TabPanel>
    </TabBox>
  );
}