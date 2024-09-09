import { BorderBottom, BorderRight } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          borderColor: "#C1C1C1",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          overflow: "visible",
        },
        flexContainer: {
          background: "none",
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
        },
      },
    },
  };
}
