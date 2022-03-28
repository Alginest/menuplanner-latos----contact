import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  slideMenu: {
    width: "100%",
    height: "2000px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
    },
  },
  bigCont: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },
  blueBox: {
    width: "900px",
    height: "470px",
    backgroundColor: "#f2f6ff",
    margin: "100px 0",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "550px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "400px",
      flexDirection: "column",
    },
  },
  imageLeft: {
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    height: "470px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightBox: {
    width: "500px",
    marginLeft: "20px",
    height: "450px",
    overflow: "hidden",
    marginRight: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "450px",
      width: "350px",
      flexDirection: "column",
    },
  },
  name: {
    margin: "20px 0",
    paddingBottom: "8px",
    fontFamily: "Spectral",
    fontSize: "28px",
    borderBottom: "1px solid  #d9dde5",
    color: "#222",
    fontWeight: "bold",
  },
  brightBox: {
    width: "500px",
    height: "450px",
    marginLeft: "10px",
    marginRight: "10px",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      height: "450px",
      width: "350px",
      flexDirection: "column",
    },
  },
}));
