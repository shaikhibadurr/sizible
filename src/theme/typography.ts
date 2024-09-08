// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily: string) => ({
  htmlFontSize: 14,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 700,
    fontSize: "3.2rem",
  },
  h2: {
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
  },
  h4: {
    fontWeight: 500,
    fontSize: "1.1rem",
  },
  h5: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  h6: {
    fontWeight: 400,
    fontSize: "0.875rem",
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem",
  },
  body1: {
    fontSize: "0.875rem",
  },
  body2: {
    fontSize: "1rem",
  },
  subtitle1: {
    fontSize: "0.7rem",
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 500,
  },
  overline: {},
});

export default Typography;
