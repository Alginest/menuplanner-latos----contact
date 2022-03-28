import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blogPost: {
    backgroundColor: "#f2f6ff",
    width: "100%",
    height: "800px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingBottom: "100px",
    },
  },
  bigCont: {
    height: "inherit",
  },
  titleBox: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: "100px",
  },
  blogBox: {
    backgroundColor: "#fff",
    width: "555px",
    height: "245px",
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "700px",
      height: "850px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "580px",
      height: "720px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "500px",
      height: "auto",
      paddingBottom: "20px",
    },
  },
  gridCont: {
    width: "100%",
  },
  gridItem: {
    width: "100%",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    padding: "8px 14px",
    fontSize: "17px",
    letterSpacing: "0.5px",
    fontWeight: "bold",
    color: "#f2745f",
  },
  textBox: {
    width: "100%",
    height: "inherit",
  },
  subTitle: {
    fontFamily: "Spectral",
    fontSize: "21px",
    color: "#222",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "10px",
  },
  branding: {
    color: "#7a7a7a",
    fontSize: "13px",
    marginBottom: "16px",
  },
  about: {
    color: "#7a7a7a",
    fontSize: "13px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
  link: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#f2745f",
    marginTop: "15px",
    fontSize: "13px",
    textDecoration: "none",
  },
}));
