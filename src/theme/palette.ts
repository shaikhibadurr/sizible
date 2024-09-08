// material-ui
import { createTheme } from "@mui/material/styles";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = () => {
  return createTheme({
    palette: {
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        main: "#DD17BD",
        dark: "#C721C5",
        light: "#f099e2",
        contrastText: "#ffffff",
      },
      background: {
        default: "#dedede",
      },
    },
  });
};

export default Palette;
