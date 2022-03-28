import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core";
import useStyles from "./styles";
import CancelIcon from "@material-ui/icons/CancelOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const classes = useStyles();

  const closeMenu = () => {
    let intViewportWidth = window.innerWidth;
    if (intViewportWidth > 900) {
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
  }, []);
  return (
    <AppBar
      position="static"
      className={`${
        menu
          ? `${classes.header} ${classes.activeHeader}`
          : `${classes.header} `
      }`}
      elevation={0}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.titleDiv}>
            <Link to="/" className={classes.title}>
              Latose
            </Link>
          </Box>
          <div className={classes.underline}></div>
          <IconButton
            size="medium"
            className={classes.iconButton}
            style={{ backgroundColor: "#f2745f" }}
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <CancelIcon className={classes.bars} />
            ) : (
              <MenuIcon className={classes.bars} />
            )}
          </IconButton>
          <List
            className={`${
              menu
                ? `${classes.list} ${classes.activeList}`
                : `${classes.list} `
            }`}
          >
            <ListItem className={classes.ul}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.ul}>
              <Link to="/ourMenu" className={classes.link}>
                Our menus
              </Link>
            </ListItem>
            <ListItem className={classes.ul}>
              <Link to="/blogEntries" className={classes.link}>
                blog entries
              </Link>
            </ListItem>
            <ListItem className={classes.ul}>
              <Link to="/menuPlaner" className={classes.link}>
                menu planer
              </Link>
            </ListItem>
            <ListItem className={classes.ul}>
              <Link to="/contactUs" className={classes.link}>
                contact us
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
