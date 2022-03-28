import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const SignUp = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.signUp}>
      <Box>
        <Typography
          align="center"
          variant="h5"
          style={{ color: "white", fontWeight: "bold", marginBottom: "50px" }}
        >
          SIGN FOR OUR NEWSLETTERS
        </Typography>
        <form className={classes.boxer} onSubmit={handleSubmit}>
          <input
            placeholder="Enter your email here"
            required
            className={classes.textField}
          />
          <Button className={classes.msgBtn} type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </section>
  );
};

export default SignUp;
