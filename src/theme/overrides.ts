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
  };
}
