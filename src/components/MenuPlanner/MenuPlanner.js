import { Box, Container, Grid, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useGlobalContext } from "../../Context";
import CardBm from "../Card/CardBm";
import useStyles from "./style";
const calories = [
  {
    value: 2000,
    label: "2000 Cal",
  },
  {
    value: 2200,
    label: "2200 Cal",
  },
  {
    value: 1800,
    label: "1800 Cal",
  },
  {
    value: 1600,
    label: "1600 Cal",
  },
];
const MenuPlanner = () => {
  const { calory, setCalory, meals } = useGlobalContext();

  const handleChange = (event) => {
    setCalory(event.target.value);
  };
  const classes = useStyles();

  return (
    <section className={classes.menuPlanner}>
      <Container className={classes.bigCont}>
        <Box className={classes.searchMenu}>
          <TextField
            id="outlined-select-calories"
            label="Calories"
            select
            value={calory}
            onChange={handleChange}
            helperText="Please select your Calories"
            className={classes.calorInput}
          >
            {calories.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Grid container className={classes.gridBox}>
          {meals.map((meal) => {
            const { id } = meal;
            return (
              <Grid item lg={3} key={id}>
                <CardBm {...meal} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default MenuPlanner;
