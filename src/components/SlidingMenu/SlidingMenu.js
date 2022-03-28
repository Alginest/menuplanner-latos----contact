import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import breakfastMenu from "../../images/breakfast_menu.jpg";
import dinnerMenu from "../../images/dinner_menu.jpg";
import lunchMenu from "../../images/lunch_menu.jpg";
import CarouselSm from "./CarouselSm";
import CarouselBm from "./CarouselBm";
import MidCarousel from "./MidCarousel";
const SlidingMenu = () => {
  const classes = useStyles();
  return (
    <section className={classes.slideMenu}>
      <Container className={classes.bigCont}>
        <Box className={classes.blueBox}>
          <Box className={classes.imageLeft}>
            <img src={breakfastMenu} alt="milk" className={classes.img} />
          </Box>
          <Box className={classes.rightBox}>
            <Typography variant="h4" className={classes.name}>
              Breakfast Menu
            </Typography>
            <CarouselSm />
          </Box>
        </Box>
        <Box className={classes.blueBox}>
          <Box className={classes.brightBox}>
            <Typography variant="h4" className={classes.name}>
              Breakfast Menu
            </Typography>
            <MidCarousel />
          </Box>
          <Box className={classes.imageLeft}>
            <img src={lunchMenu} alt="milk" className={classes.img} />
          </Box>
        </Box>
        <Box className={classes.blueBox}>
          <Box className={classes.imageLeft}>
            <img src={dinnerMenu} alt="milk" className={classes.img} />
          </Box>
          <Box className={classes.rightBox}>
            <Typography variant="h4" className={classes.name}>
              Dinner Menu
            </Typography>
            <CarouselBm />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SlidingMenu;
