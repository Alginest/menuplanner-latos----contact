import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  velikiBox: {
    width: "100%",
    height: "350px",
    display: "inline-block",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      marginBottom: "100px",
    },
  },
  manjiBox: {
    width: "100%",
    height: "inherit",
  },
  gridBox: {
    width: "100%",
    height: "inherit",
    alignItems: "center",
  },
  borderBox: {
    backgroundColor: "#b7c6c9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "205px",
    height: "205px",
    borderRadius: "50%",
  },
  tvor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: "10px",
  },
}));
