import {
  Box,
  Container,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.cont}>
        <Typography variant="body2" style={{ color: "white" }}>
          Copyright © 2022 Latos Template
        </Typography>
        <Box className={classes.socialBox}>
          <IconButton className={classes.iconBtn}>
            <Link to="www.facebook.com" className={classes.link}>
              <Facebook className={classes.icon} />
            </Link>
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <Link to="www.facebook.com" className={classes.link}>
              <Twitter className={classes.icon} />
            </Link>
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <Link to="www.facebook.com" className={classes.link}>
              <LinkedIn className={classes.icon} />
            </Link>
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <Link to="www.facebook.com" className={classes.link}>
              <Instagram className={classes.icon} />
            </Link>
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <Link to="www.facebook.com" className={classes.link}>
              <GitHub className={classes.icon} />
            </Link>
          </IconButton>
        </Box>
        <Typography variant="body2" style={{ color: "white" }}>
          Design: Template Mo.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
