import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  menu: {
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      margin: "100px 0",
    },
  },
  cont: {
    height: "inherit",
  },
  gridCont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  imgBox: {
    height: "278px",
  },
  img: {
    width: "292px",
    height: "220px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },

  middleRed: {
    width: "380px",
    height: "308px",
    backgroundColor: "#f2745f",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      paddingBottom: "20px",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: "30px",
    marginBottom: "20px",
  },
  smallMid: {
    width: "80%",
    height: "110px",
    margin: "0px 10%",
    backgroundColor: "#f3826f",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  orBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  or: {
    margin: "15px 0",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "11px",
    color: "white",
    border: "1px  solid #da6856",
    borderRadius: "50%",
  },
  orderBtn: {
    backgroundColor: "white",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#f2745f",
    padding: "10px 20px",
    transition: "all 0.5s ease-in",
    "&:hover": {
      transform: " scale(1.1)",
      backgroundColor: "white",
    },
  },
}));
