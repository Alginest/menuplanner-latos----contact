import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const AppBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.center}>
        <Typography
          variant="h4"
          align="center"
          className={classes.title}
          gutterBottom
        >
          get application for your phone
        </Typography>
        <Button className={classes.downBtn}>Download Now</Button>
      </Box>
    </Box>
  );
};

export default AppBanner;
