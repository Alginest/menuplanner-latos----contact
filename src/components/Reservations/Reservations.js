import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import reservacijskaSlika from "../../images/book_left_image.jpg";
const Reservations = () => {
  const classes = useStyles();
  const [day, setDay] = useState("Monday");
  const [hour, setHour] = useState(10);
  const [people, setPeople] = useState(1);

  const handleDay = (event) => {
    setDay(event.target.value);
  };
  const handleHour = (e) => {
    setHour(e.target.value);
  };
  const handlePeople = (e) => {
    setPeople(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box className={classes.reservations}>
      <Typography
        variant="h6"
        style={{ color: "white", paddingTop: "100px", fontWeight: "bold" }}
        align="center"
      >
        BOOK YOUR TABLE NOW
      </Typography>
      <Container className={classes.resCont}>
        <Box className={classes.form}>
          <img src={reservacijskaSlika} alt="reservation" />
          <form className={classes.formCont} onSubmit={handleSubmit}>
            <Container className={classes.mainCont}>
              <Typography
                variant="h4"
                align="center"
                className={classes.formTitle}
              >
                Reservation
              </Typography>
              <Box className={classes.one}>
                <FormControl>
                  <InputLabel id="day" className={classes.label}>
                    Select Day
                  </InputLabel>
                  <Select
                    label="Select Day"
                    labelId="day"
                    id="demo-simple-select"
                    defaultValue="Monday"
                    className={classes.selector}
                    value={day}
                    onChange={handleDay}
                  >
                    <MenuItem value={"Monday"}>Monday</MenuItem>
                    <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                    <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                    <MenuItem value={"Thursday"}>Thursday</MenuItem>
                    <MenuItem value={"Friday"}>Friday</MenuItem>
                    <MenuItem value={"Saturday"}>Saturday</MenuItem>
                    <MenuItem value={"Sunday"}>Sunday</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="hour" className={classes.label}>
                    Select Hour
                  </InputLabel>
                  <Select
                    label="Select Hour"
                    labelId="hour"
                    id="demo-simple-select"
                    className={classes.selector}
                    value={hour}
                    onChange={handleHour}
                  >
                    <MenuItem value={10}>10:00</MenuItem>
                    <MenuItem value={12}>12:00</MenuItem>
                    <MenuItem value={14}>14:00</MenuItem>
                    <MenuItem value={16}>16:00</MenuItem>
                    <MenuItem value={18}>18:00</MenuItem>
                    <MenuItem value={20}>20:00</MenuItem>
                    <MenuItem value={22}>22:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className={classes.two}>
                <TextField
                  label="Full Name"
                  className={classes.textField}
                ></TextField>
                <TextField
                  label="Phone Number"
                  className={classes.textField}
                ></TextField>
              </Box>
              <Box className={classes.three}>
                <FormControl>
                  <InputLabel id="person" className={classes.label}>
                    Select People
                  </InputLabel>
                  <Select
                    label="Select Person"
                    labelId="person"
                    id="demo-simple-select"
                    className={classes.selector}
                    value={people}
                    onChange={handlePeople}
                  >
                    <MenuItem value={1}>1 Person</MenuItem>
                    <MenuItem value={2}>2 Person</MenuItem>
                    <MenuItem value={3}>3 Person</MenuItem>
                    <MenuItem value={4}>4 Person</MenuItem>
                    <MenuItem value={5}>5 Person</MenuItem>
                    <MenuItem value={6}>6 Person</MenuItem>
                  </Select>
                </FormControl>
                <Button className={classes.bookBtn} type="submit">
                  Book table
                </Button>
              </Box>
            </Container>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Reservations;
