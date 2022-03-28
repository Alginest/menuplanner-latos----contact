import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "#f2745f",
    height: "250px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: 0.5,
    marginTop: "10px",
  },
  downBtn: {
    marginTop: "30px",
    display: "inline-block",
    backgroundColor: "white",
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#f2745f",
    letterSpacing: 0.5,
    padding: "12px 20px",
    borderRadius: "3px",
    fontWeight: "bold",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: " scale(1.1)",
      backgroundColor: "white",
    },
  },
}));
