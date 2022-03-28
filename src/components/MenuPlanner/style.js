import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  menuPlanner: {
    width: "100%",
    height: "1000px",
    marginTop: "60px",
    marginBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "46px",
    fontWeight: "bold",
    marginBottom: "50px",
  },
  searchMenu: {
    width: "100%",
    height: "auto",
  },
  calorInput: {
    width: "100%",
    textAlign: "center",
  },
}));
