import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerCont}>
      <Container className={classes.bigCont}>
        <Box className={classes.textDiv} style={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            style={{ color: "white", fontWeight: "bold" }}
            gutterBottom
          >
            HERE YOU CAN FIND DELECIOUS FOODS
          </Typography>
          <Typography
            style={{ color: "white", fontSize: "44px", fontWeight: "500" }}
            gutterBottom
          >
            ASIAN RESTAURANT
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white" }}
            gutterBottom
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus facere quia ipsam ducimus corrupti praesentium.
          </Typography>
          <Button variant="contained" className={classes.mainBtn}>
            Order Right Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
