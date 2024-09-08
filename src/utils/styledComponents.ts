import { Box, styled } from "@mui/material";

export const BodyOutlet = styled(Box)(({ theme }) => ({
  padding: 16,
  background: theme.palette.background.default,
}));

export const TabBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "unset",
  },
}));
