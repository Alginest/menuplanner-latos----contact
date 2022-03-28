import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const ContactUsBanner = () => {
  const classes = useStyles();
  return (
    <section className={classes.menuBanner}>
      <Typography align="center" variant="h3" className={classes.title}>
        CONTACT US
      </Typography>
      <Box className={classes.banner}>
        <Typography align="center" variant="body1" className={classes.smallTxt}>
          Whatever drinking vinegar hella fingerstache shoreditch kickstaerter
          kitsch,La croix hella iceland flexitarian letterpress.
        </Typography>
      </Box>
    </section>
  );
};

export default ContactUsBanner;
