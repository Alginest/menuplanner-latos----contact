import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  contactUs: {
    width: "100%",
    height: "310px",
    marginTop: "100px",
    marginBottom: "60px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  bigCont: {
    width: "100%",
    height: "310px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      justifyContent: "center",
    },
  },
  allCont: {
    width: "580px",
    marginRight: "2%",
    height: "inherit",
    marginBottom: "2%",
  },
  boxTop: {
    width: "100%",
    height: "100px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#222",
  },
  boxLeft: {
    width: "100%",
    height: "210px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  info: {
    width: "48%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "1%",
    [theme.breakpoints.down("md")]: {
      height: "280px",
      width: "100%",
    },
  },
  bigInfo: {
    width: "48%",
    height: "inherit",
    display: "flex",
    marginLeft: "1%",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      height: "280px",
      width: "100%",
      marginLeft: "0",
    },
  },
  textArea: {
    marginTop: "7px",
  },
  btnSend: {
    marginTop: "12px",
    backgroundColor: "#f2745f",
    width: "100%",
    height: "50px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#fff",
  },
  boxRight: {
    backgroundColor: "red",
    width: "50%",
  },
  two: {
    width: "580px",
    marginLeft: "2%",
    marginTop: "2%",
    height: "inherit",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "15%",
    },
  },
  contactCall: {
    width: "100%",
    height: "210px",
  },
  twoTxt: {
    fontSize: "13px",
    color: "#9a9a9a",
    lineHeight: "24px",
  },
  smTxt: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "#aaa",
    marginTop: "25px",
  },
}));
