import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  styled,
  Tab,
  Tabs,
} from "@mui/material";

export const BodyOutlet = styled(Box)(({ theme }) => ({
  padding: 16,
  background: theme.palette.background.default,
}));

export const TabBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    display: "unset",
  },
}));

export const BorderedAvatar = styled(Avatar)(({ theme }) => ({
  border: "2px solid",
  borderColor: "#00000033",
  height: "50px",
  width: "50px",
  background: "#f6f6f6",
}));

export const MainTabs = styled(Tabs)(({ theme }) => ({
  overflow: "visible",
  "& .MuiTabs-flexContainer": {
    background: "none",
    justifyContent: "right",
  },
  "& .MuiTabs-indicator": {
    background: "none",
  },
}));

export const MainTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  background: "#f4f4f4",
  borderTop: "1px solid #00000033",
  borderLeft: "1px solid #00000033",
  borderBottom: "1px solid #00000033",
  borderRight: "none",
  "&:last-of-type": {
    borderRight: "1px solid #00000033",
  },
  borderRadius: "4px",
  fontWeight: 500,
  paddingLeft: 60,
  paddingRight: 60,
  fontSize: "1.125rem",
  marginTop: "4px",
  [theme.breakpoints.down("sm")]: {
    padding: "12px 16px",
    marginTop: "0",
    borderTop: "1px solid #00000033",
    borderLeft: "1px solid #00000033",
    borderRight: "1px solid #00000033",
    borderBottom: "none",
    "&:last-of-type": {
      marginBottom: 0,
      borderBottom: "1px solid #00000033",
    },
  },
  "&.Mui-selected": {
    marginTop: "0px",
    background: "white",
    color: "inherit",
    borderRadius: "4px 4px 0 0",
    borderBottom: "none",
    borderTop: "1px solid #00000033",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "4px 0 0 4px",
      borderRight: "none",
      "&:last-of-type": {
        marginBottom: 0,
        borderBottom: "1px solid #00000033",
      },
    },
  },
}));

export const SettingTabs = styled(Tabs)(() => ({
  overflow: "visible",
  "& .MuiTabs-indicator": {
    background: "none",
  },
  "& .MuiTabs-scroller": {
    display: "flex",
    alignItems: "center",
  },
}));

export const SettingTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  background: "#FAFAFA",
  borderBottom: "1px dashed #969696",
  borderRadius: "10px",
  marginBottom: "25px",
  color: "black",
  "&:last-of-type": {
    marginBottom: 0,
  },
  fontWeight: 400,
  paddingLeft: 60,
  paddingRight: 60,
  fontSize: "1.125rem",
  marginTop: "4px",
  marginRight: "42px",

  "&.Mui-selected": {
    color: "unset",
    borderColor: theme.palette.primary.main,
    marginRight: "-10px",
  },
}));

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "&.MuiCheckbox-root": {
    color: theme.palette.primary.dark,
    borderRadius: 6,
    border: "1px solid",
    padding: 0,
    margin: 14,
    background: "rgba(238, 238, 238, 1)",
    borderColor: "#AFAFAF",
  },
  "&.Mui-checked": {
    background: "rgba(251, 195, 195, 0.40)",
    borderColor: theme.palette.primary.dark,
  },
}));
