import { makeStyles } from "@material-ui/core";
import marker from "../../images/marker.png";
export default makeStyles((theme) => ({
  map: {
    width: "100%",
    height: "600px",
  },
  mapBox: {
    width: "100%",
    height: "500px",
  },
  marker: {
    width: "5px",
    height: "5px",
    backgroundColor: "red",
    zIndex: 10,
  },
}));
