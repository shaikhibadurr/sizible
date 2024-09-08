import { BorderBottom } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {},
        flexContainer: {
          background: theme.palette.background.default,
          justifyContent: "right",
        },
        indicator: {
          background: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          background: "#f4f4f4",
          borderTop: "1px solid #00000033",
          borderLeft: "1px solid #00000033",
          borderRight: "none",
          "&:last-of-type": {
            borderRight: "1px solid #00000033",
          },
          marginLeft: "-1px",
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
            borderRight: "none",
            marginBottom: "-1px",
            "&:last-of-type": {
              marginBottom: 0,
              borderRight: 0,
              borderBottom: "1px solid #00000033",
            },
            marginLeft: 0,
          },
          "&.Mui-selected": {
            marginTop: "0px",
            background: "white",
            color: "inherit",
            borderRadius: "4px 4px 0 0",
            borderBottom: "none",
            borderTop: "1px solid #00000033",
            [theme.breakpoints.down("sm")]: {
              borderBottom: "1px solid #00000033",
              borderRadius: "4px 0 0 4px",
            },
          },
        },
      },
    },
  };
}
