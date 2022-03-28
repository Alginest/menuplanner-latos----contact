import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";
import blogOne from "../../images/blog_post_01.jpg";
import blogTwo from "../../images/blog_post_02.jpg";
import blogThree from "../../images/blog_post_03.jpg";
import blogFour from "../../images/blog_post_04.jpg";
const BlogPost = () => {
  const classes = useStyles();
  return (
    <section className={classes.blogPost}>
      <Container className={classes.bigCont}>
        <Box className={classes.titleBox}>
          <Typography variant="h4" className={classes.title}>
            Our blog post
          </Typography>
        </Box>
        <Grid container spacing={2} className={classes.gridCont}>
          <Grid item lg={6} className={classes.gridItem}>
            <Box className={classes.blogBox}>
              <img src={blogOne} alt="blog1" />
              <Typography variant="body2" className={classes.date}>
                26 Oct 2022
              </Typography>
              <Box className={classes.textBox}>
                <Container style={{ height: "inherit" }}>
                  <Typography variant="h6" className={classes.subTitle}>
                    Stumptown Tofu schlitz
                  </Typography>
                  <Typography variant="body2" className={classes.branding}>
                    Branding / Admin
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    className={classes.about}
                  >
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </Typography>
                  <Link href="#" className={classes.link}>
                    Continue Reading
                  </Link>
                </Container>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Box className={classes.blogBox}>
              <img src={blogTwo} alt="blog1" />
              <Typography variant="body2" className={classes.date}>
                21 Oct 2022
              </Typography>
              <Box className={classes.textBox}>
                <Container style={{ height: "inherit" }}>
                  <Typography variant="h6" className={classes.subTitle}>
                    Succulents Hashtag Folk
                  </Typography>
                  <Typography variant="body2" className={classes.branding}>
                    Branding / Admin
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    className={classes.about}
                  >
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </Typography>
                  <Link href="#" className={classes.link}>
                    Continue Reading
                  </Link>
                </Container>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Box className={classes.blogBox}>
              <img src={blogThree} alt="blog1" />
              <Typography variant="body2" className={classes.date}>
                11 Oct 2022
              </Typography>
              <Box className={classes.textBox}>
                <Container style={{ height: "inherit" }}>
                  <Typography variant="h6" className={classes.subTitle}>
                    Knaus Sriracha Pinterest
                  </Typography>
                  <Typography variant="body2" className={classes.branding}>
                    Dessert / Chef
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    className={classes.about}
                  >
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </Typography>
                  <Link href="#" className={classes.link}>
                    Continue Reading
                  </Link>
                </Container>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Box className={classes.blogBox}>
              <img src={blogFour} alt="blog1" />
              <Typography variant="body2" className={classes.date}>
                03 Oct 2022
              </Typography>
              <Box className={classes.textBox}>
                <Container style={{ height: "inherit" }}>
                  <Typography variant="h6" className={classes.subTitle}>
                    Crucifix Selvage Coat
                  </Typography>
                  <Typography variant="body2" className={classes.branding}>
                    Plate / Chef
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    className={classes.about}
                  >
                    Skateboard iceland twee tofu shaman crucifix vice before
                    they sold out corn hole occupy drinking vinegar chambra
                    meggings kale chips hexagon...
                  </Typography>
                  <Link href="#" className={classes.link}>
                    Continue Reading
                  </Link>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogPost;
