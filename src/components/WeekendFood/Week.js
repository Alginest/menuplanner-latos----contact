import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import imgOne from "../../images/breakfast_item.jpg";
import imgTwo from "../../images/lunch_item.jpg";
import imgThree from "../../images/dinner_item.jpg";
const Week = () => {
  const classes = useStyles();
  return (
    <Box className={classes.week}>
      <Container className={classes.bigCont}>
        <Typography className={classes.title}>weekly featured food</Typography>
        <Grid container className={classes.gridCont} spacing={2}>
          <Grid item lg={4}>
            <Box className={classes.gridItem}>
              <Container>
                <Typography variant="h6" className={classes.smTitle}>
                  Breakfast
                </Typography>
                <Box className={classes.midBox}>
                  <Box className={classes.insideBox}>
                    <img src={imgOne} alt="Breakfast" className={classes.img} />
                    <Box className={classes.price}>$4.50</Box>
                  </Box>
                  <Container>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      className={classes.subTitle}
                    >
                      Kale Chips Art Party
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.subText}
                    >
                      Dreamcatcher squid ennui cliche chicharros nes echo small
                      batch jean shorts hexagon street art knausgaard wolf...
                    </Typography>
                  </Container>
                </Box>
              </Container>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className={classes.gridItem}>
              <Container>
                <Typography variant="h6" className={classes.smTitle}>
                  Lunch
                </Typography>
                <Box className={classes.midBox}>
                  <Box className={classes.insideBox}>
                    <img src={imgTwo} alt="Breakfast" className={classes.img} />
                    <Box className={classes.price}>$4.50</Box>
                  </Box>
                  <Container>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      className={classes.subTitle}
                    >
                      Taiyaki Gastro Tousled
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.subText}
                    >
                      Dreamcatcher squid ennui cliche chicharros nes echo small
                      batch jean shorts hexagon street art knausgaard wolf...
                    </Typography>
                  </Container>
                </Box>
              </Container>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className={classes.gridItem}>
              <Container>
                <Typography variant="h6" className={classes.smTitle}>
                  Dinner
                </Typography>
                <Box className={classes.midBox}>
                  <Box className={classes.insideBox}>
                    <img
                      src={imgThree}
                      alt="Breakfast"
                      className={classes.img}
                    />
                    <Box className={classes.price}>$12.50</Box>
                  </Box>
                  <Container>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      className={classes.subTitle}
                    >
                      Batch Squid Jean Shorts
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.subText}
                    >
                      Dreamcatcher squid ennui cliche chicharros nes echo small
                      batch jean shorts hexagon street art knausgaard wolf...
                    </Typography>
                  </Container>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Week;
