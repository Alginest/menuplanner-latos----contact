import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const MenuBanner = () => {
  const classes = useStyles();
  return (
    <section className={classes.menuBanner}>
      <Typography align="center" variant="h3" className={classes.title}>
        OUR BLOG
      </Typography>
      <Box className={classes.banner}>
        <Typography align="center" variant="body1" className={classes.smallTxt}>
          Curabitur at dolor sed felis lacinia ultricies sit amet vel sem.
          Vestibulum diam leo, sodales tempor lectus sed, varius gravida mi.
        </Typography>
      </Box>
    </section>
  );
};

export default MenuBanner;
