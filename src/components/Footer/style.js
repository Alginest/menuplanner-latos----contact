import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "135px",
    backgroundColor: "#363e50",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  cont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  socialBox: {
    width: "300px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "50px",
    height: "50px",
    margin: "0 5px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "#f2745f",
      transform: "scale(0.9)",
    },
  },
  icon: {
    color: "#222",
    fontSize: "20px",
  },
}));
