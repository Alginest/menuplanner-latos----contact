import { makeStyles } from "@material-ui/core";
import headingBg from "../../images/heading-bg.jpg";
export default makeStyles((theme) => ({
  menuBanner: {
    width: "100%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${headingBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    marginBottom: "40px",
  },
  banner: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  smallTxt: {
    color: "white",
  },
}));
