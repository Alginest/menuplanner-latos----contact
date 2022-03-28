import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const ContactInfo = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.contactUs}>
      <Container className={classes.bigCont}>
        <Box className={classes.allCont}>
          <Box className={classes.boxTop}>
            <Typography variant="h6" className={classes.title}>
              Message
            </Typography>
          </Box>
          <form className={classes.boxLeft} onSubmit={handleSubmit}>
            <Box className={classes.info}>
              <TextField
                placeholder="Your name..."
                variant="outlined"
                required
              />
              <TextField placeholder="Your email..." variant="outlined" />
              <TextField placeholder="Your phone..." variant="outlined" />
            </Box>
            <Box className={classes.bigInfo}>
              <TextField
                placeholder="Your Message..."
                multiline
                variant="outlined"
                minRows={5}
                maxRows={6}
                className={classes.textArea}
              />
              <Button className={classes.btnSend}>Send Message</Button>
            </Box>
          </form>
        </Box>
        <Box className={classes.two}>
          <Box className={classes.boxTop}>
            <Typography variant="h6" className={classes.title}>
              Contact Info
            </Typography>
          </Box>
          <Box className={classes.contactCall}>
            <Typography variant="body2" className={classes.twoTxt}>
              Pellentesque nec orci in erat venenatis viverra. Vivamus in lorem
              et leo feugiat ullamcorper. Donec volutpat fermentum erat non
              aliquet. Cras fermentum, risus a blandit sodales, erat turpis
              eleifend lacus, venenatis mollis leo lorem vel eros. Quisque et
              sem tempus, feugiat urna iaculis, tempor metus.
            </Typography>
            <Typography variant="body1" className={classes.smTxt}>
              30 Raffles Ave, <br />
              Singapore 039803
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ContactInfo;
