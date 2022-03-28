import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgOne from "../../images/breakfast_item.jpg";
import imgTwo from "../../images/lunch_item.jpg";
import imgThree from "../../images/dinner_item.jpg";
const useStyles = makeStyles((theme) => ({
  item: {
    width: "231px",
    height: "280px",
    backgroundColor: "white",
    marginTop: "10px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "350px",
      flexDirection: "column",
    },
  },
  imgBox: {
    backgroundColor: "red",
    width: "100%",
    height: "inherit",
    position: "relative",
  },
  price: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    padding: "8px 14px",
    fontSize: "17px",
    letterSpacing: "0.5px",
    fontWeight: "bold",
    color: "#f2745f",
  },
  sub: {
    fontSize: "17px",
    fontFamily: "Spectral",
    fontWeight: "bold",
    color: "#222",
    marginTop: "10px",
  },
  about: {
    fontSize: "13px",
    lineHeight: "24px",
    color: "#9a9a9a",
  },
}));

const CarouselSm = () => {
  const [num, setNum] = useState(2);
  const classes = useStyles();
  let width = window.innerWidth;
  const changeNum = () => {
    let width = window.innerWidth;
    if (width < 600) {
      setNum(1);
    } else {
      setNum(2);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeNum);
    return () => window.removeEventListener("resize", changeNum);
  }, [width]);
  return (
    <OwlCarousel className={"owl-theme"} items={num} autoplay dots rewind>
      <div className={classes.item}>
        <Box className={classes.boxer}>
          <Box className={classes.imgBox}>
            <img src={imgOne} alt="Breakfast" className={classes.img} />
            <Typography className={classes.price}>$7.30</Typography>
          </Box>
          <Box className={classes.smallBox}>
            <Container>
              <Typography variant="subtitle1" className={classes.sub}>
                Kale Chips at Party
              </Typography>
              <Typography variant="body1" className={classes.about}>
                Dreamcatcher squid ennui cliche chicharros nes echo small batch
                jean ditcher meal...
              </Typography>
            </Container>
          </Box>
        </Box>
      </div>
      <div className={classes.item}>
        <Box className={classes.boxer}>
          <Box className={classes.imgBox}>
            <img src={imgTwo} alt="Breakfast" className={classes.img} />
            <Typography className={classes.price}>$7.25</Typography>
          </Box>
          <Box className={classes.smallBox}>
            <Container>
              <Typography variant="subtitle1" className={classes.sub}>
                Drink Vinegar Prism
              </Typography>
              <Typography variant="body1" className={classes.about}>
                Dreamcatcher squid ennui cliche chicharros nes echo small batch
                jean ditcher meal...
              </Typography>
            </Container>
          </Box>
        </Box>
      </div>
      <div className={classes.item}>
        <Box className={classes.boxer}>
          <Box className={classes.imgBox}>
            <img src={imgThree} alt="Breakfast" className={classes.img} />
            <Typography className={classes.price}>$11.50</Typography>
          </Box>
          <Box className={classes.smallBox}>
            <Container>
              <Typography variant="subtitle1" className={classes.sub}>
                Taiyaki Gastro Tousled
              </Typography>
              <Typography variant="body1" className={classes.about}>
                Dreamcatcher squid ennui cliche chicharros nes echo small batch
                jean ditcher meal...
              </Typography>
            </Container>
          </Box>
        </Box>
      </div>
    </OwlCarousel>
  );
};

export default CarouselSm;
