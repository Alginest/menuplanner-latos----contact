import { makeStyles } from "@material-ui/core";
import bannerImg from "../../images/banner-bg.jpg";
export default makeStyles((theme) => ({
  bannerCont: {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  bigCont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textDiv: {
    width: "550px",
  },
  mainBtn: {
    backgroundColor: "#f2745f",
    fontSize: "13px",
    color: "white",
    padding: "12px 20px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "#f2745f",
    },
  },
}));
