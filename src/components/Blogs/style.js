import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blog: {
    width: "100%",
    height: "3000px",
    backgroundColor: "white",
  },
  cont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  blogPost: {
    width: "770px",
    height: "570px",
    backgroundColor: "#eaf0ff",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "650px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      height: "520px",
    },
  },
  img: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
  blogPostText: {
    width: "90%",
    height: "220px",
    margin: "0 25px",
  },
  blogTitle: {
    fontFamily: "Spectral",
    fontSize: "21px",
    color: "#222",
    fontWeight: "bold",
    marginBottom: "5px",
    marginTop: "5px",
  },
  branding: {
    fontSize: "13px",
    color: "#7a7a7a",
    marginBottom: "18px",
  },
  about: {
    fontSize: "13px",
    lineHeight: "24px",
    color: "#9a9a9a",
  },
  link: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#f2745f",
    textDecoration: "none",
    textTransform: "uppercase",
    display: "inline-block",
    marginTop: "20px",
  },
}));
