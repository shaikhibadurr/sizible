import { ReactNode, useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import Palette from "./palette";
import Typography from "./typography";
import ComponentsOverrides from "./overrides";


interface ThemeCustomizationProps {
  children: ReactNode; 
}

export default function ThemeCustomization(props: ThemeCustomizationProps) {
  const { children } = props;
  const theme = Palette();
  const themeTypography = Typography("Outfit");

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1530,
          xl: 1830,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      spacing: 10,
      palette: theme.palette,
      typography: themeTypography,
    }),
    [theme, themeTypography]
  );

  let themes = createTheme(themeOptions);
  themes.components = ComponentsOverrides(themes);
  themes = responsiveFontSizes(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
