import { makeStyles } from "@material-ui/core";
import bgImage from "../../images/book-bg.jpg";
export default makeStyles((theme) => ({
  reservations: {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      height: "1500px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "1300px",
    },
  },
  resCont: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "inherit",
    },
  },
  form: {
    marginTop: "60px",
    width: "800px",
    height: "320px",
    display: "flex",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "1200px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "1000px",
      width: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "900px",
      width: "300px",
    },
  },
  formCont: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "700px",
    },
  },
  formTitle: {
    marginTop: "15px",
    marginBottom: "5px",
    fontFamily: "Spectral",
    fontSize: "28px",
    fontWeight: "bold",
  },
  selector: {
    width: "120px",
    height: "30px",
    fontSize: "13px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  label: {
    fontSize: "13px",
  },
  one: {
    display: "flex",
    justifyContent: "space-around",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItem: "center",
      width: "100%",
    },
  },
  two: {
    display: "flex",
    justifyContent: "space-around",
    height: "50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItem: "center",
      width: "100%",
      height: "130px",
    },
  },
  three: {
    display: "flex",
    justifyContent: "space-around",
    height: "50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItem: "center",
      width: "100%",
      height: "130px",
    },
  },
  textField: {
    width: "120px",
    height: "30px",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  mainCont: {
    margin: "5% 0",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bookBtn: {
    width: "120px",
    backgroundColor: "#f2745f",
    color: " #fff",
    fontSize: "13px",
    textTransform: "uppercase",
    fontWeight: 500,
    borderRadius: "3px",
    textDecoration: "none",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: " scale(0.9)",
      backgroundColor: "#f2745f",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
