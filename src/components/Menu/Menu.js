import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import imgOne from "../../images/cook_01.jpg";
import imgTwo from "../../images/cook_02.jpg";
const Menu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.menu}>
      <Container className={classes.cont}>
        <Box className={classes.gridCont}>
          <Box className={classes.imgBox}>
            <img src={imgOne} alt="Cook1" className={classes.img} />
          </Box>
          <Box className={classes.outBox}>
            <Box className={classes.middleRed} textAlign="center">
              <Typography variant="h5" className={classes.title}>
                We cook delecious
              </Typography>
              <Box className={classes.smallMid}>
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{
                    textTransform: "uppercase",
                    color: "white",
                    fontSize: "11px",
                  }}
                >
                  You cann call us on:
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "uppercase",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  + 1234 567 8910
                </Typography>
              </Box>
              <Box className={classes.orBox}>
                <Typography variant="body1" className={classes.or}>
                  Or
                </Typography>
              </Box>
              <Box className={classes.orBox}>
                <Button className={classes.orderBtn}>Order Now</Button>
              </Box>
            </Box>
          </Box>
          <Box className={classes.imgBox}>
            <img src={imgTwo} alt="Cook2" className={classes.img} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Menu;
