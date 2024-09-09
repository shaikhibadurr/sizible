const style = {
  paddingNone: { padding: 0 },
  tabPanel: {
    background: "white",
    width: "100%",
    borderRadius: { xs: "0 4px 4px 4px", sm: "4px 0 4px 4px" },
    border: "1px solid #00000033",
    marginLeft: { xs: "-1px", sm: 0 },
    marginTop: { xs: 0, sm: "-1px" },
  },
  tabPanelChildren: { px: 4, py: 8 },
  stylistCaption: { fontWeight: 500, color: "#6C6C6C" },
  stylistHeading: { fontWeight: 500, color: "#3C4242", textAlign: "center" },
  stylistContainer: {
    overflow: "auto",
    maxWidth: {
      xs: "100%",
      sm: "55px",
    },
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeDivider: { height: "70%", margin: "auto", maxWidth: "100%" },
  descWidth: { maxWidth: "450px" },
  centerText: { textAlign: "center" },
  para: { fontWeight: 400, mt: 1.5, textAlign: "center" },
  descButton: {
    paddingY: 2,
    paddingX: { sm: 1, md: 3 },
    backgroundColor: "primary.dark",
  },
  descButtonTitle: {
    fontFamily: "praise",
    fontWeight: 400,
    textTransform: "initial",
  },
  descButtonPara: {
    fontFamily: "Outfit",
    mt: -1,
    textTransform: "lowercase",
    fontWeight: 400,
  },
  link: { fontWeight: 400, color: "#868686" },
  joinBtn: { background: "#F0F0F0", px: 2 },
  dividerWidth: { width: "70%" },
  loginInputBg: { background: "#F4F4F4" },
};

export default style;
