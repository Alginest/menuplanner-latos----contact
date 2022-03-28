import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  //title
  header: {
    width: "100%",
    height: "200px",
    backgroundColor: "#eaf0ff",
  },
  activeHeader: {
    height: "auto",
  },
  toolbar: {
    flexDirection: "column",
    position: "relative",
  },
  titleDiv: {
    height: "100px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#222",
    fontSize: "44px",
    fontFamily: "Spectral",
    fontStyle: "italic",
    textDecoration: "none",
  },
  //nav
  list: {
    display: "flex",
    justifyContent: "center",
    width: "700px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  activeList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "35px",
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    color: "#222",
    transition: "all 0.5s ease-in",
    "&:hover": {
      transform: " scale(1.1)",
      backgroundColor: "#f2745f",
    },
  },
  link: {
    fontSize: "13px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "#363e50",
    letterSpacing: 0.5,
    margin: "0 2px",
    transition: "color 0.5s ease-in",
    "&:hover": {
      color: "white",
    },
  },
  //underline
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(173, 172, 170, 0.5)",
    marginBottom: theme.spacing(2),
  },
  // mobile
  iconButton: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  //keyframes
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.2,
      transform: "translateY(-20%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
