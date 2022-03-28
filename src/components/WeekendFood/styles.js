import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  week: {
    width: "100%",
    height: "800px",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      height: "1200px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "1700px",
    },
  },
  bigCont: {
    width: "100%",
    height: "inherit",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: 0.5,
    textAlign: "center",
    paddingTop: "100px",
    marginBottom: "100px",
  },
  gridCont: {
    width: "100%",
    height: "800px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
    },
  },
  gridItem: {
    backgroundColor: "#f2f6ff",
    width: "360px",
    height: "450px",
  },
  smTitle: {
    paddingTop: "20px",
    marginBottom: "15px",
    fontFamily: "Spectral",
    fontSize: "28px",
    width: "100%",
    color: "#222",
    fontWeight: "bold",
    borderBottom: "1px solid #d9dde5",
  },
  midBox: {
    backgroundColor: "white",
    width: "100%",
    height: "320px",
    marginTop: "10px",
  },
  insideBox: {
    position: "relative",
    width: "100%",
    height: "auto",
  },
  img: {
    width: "100%",
    height: "inherit",
  },
  price: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    padding: "8px 14px",
    fontSize: "17px",
    letterSpacing: "0.5px",
    fontWeight: "bold",
    color: "#f2745f",
  },
  subTitle: {
    fontFamily: "Spectral",
    fontWeight: 500,
    fontSize: "18px",
  },
  subText: {
    color: "#9a9a9a",
    fontSize: "13px",
    lineHeight: "24px",
  },
}));
