import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./style";
import { Box, Container } from "@material-ui/core";
const key = process.env.REACT_APP_MAP_KEY;
const lat = 45.81;
const lng = 15.98;

const Map = () => {
  const classes = useStyles();
  return (
    <section className={classes.map}>
      <Container>
        <Box className={classes.mapBox}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={12}
          ></GoogleMapReact>
        </Box>
      </Container>
    </section>
  );
};

export default Map;
