import { Avatar, Box, Divider, styled } from "@mui/material";

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
