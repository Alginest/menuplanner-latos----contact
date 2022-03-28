import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import imageOne from "../../images/cook_breakfast.png";
import imageTwo from "../../images/cook_lunch.png";
import imageThree from "../../images/cook_dinner.png";
import imageFour from "../../images/cook_dessert.png";
const Plan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.velikiBox}>
      <Container className={classes.manjiBox}>
        <Grid container className={classes.gridBox} spacing={2}>
          <Grid item xs={12} sm={6} lg={3} className={classes.tvor}>
            <Box className={classes.borderBox}>
              <img src={imageOne} alt="Breakfast" className={classes.slike} />
            </Box>
            <Typography variant="h6" className={classes.text}>
              Breakfast
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={classes.tvor}>
            <Box className={classes.borderBox}>
              <img src={imageTwo} alt="Breakfast" className={classes.slike} />
            </Box>
            <Typography variant="h6" className={classes.text}>
              Lunch
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={classes.tvor}>
            <Box className={classes.borderBox}>
              <img src={imageThree} alt="Breakfast" className={classes.slike} />
            </Box>
            <Typography variant="h6" className={classes.text}>
              Dinner
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={classes.tvor}>
            <Box className={classes.borderBox}>
              <img src={imageFour} alt="Breakfast" className={classes.slike} />
            </Box>
            <Typography variant="h6" className={classes.text}>
              Desserts
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Plan;
