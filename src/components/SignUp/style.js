import { makeStyles } from "@material-ui/core";
import signBg from "../../images/signup-bg.jpg";
export default makeStyles((theme) => ({
  signUp: {
    width: "100%",
    height: "250px",
    backgroundImage: `url(${signBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
  },
  textField: {
    width: "360px",
    height: "44px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255,0.9)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  boxer: {
    width: "550px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
      height: "120px",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  msgBtn: {
    border: "solid 1px white",
    width: "150px",
    height: "44px",
    color: "white",
    fontSize: "13px",
    fontWeight: "bold",
  },
}));
