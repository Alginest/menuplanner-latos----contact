import { Box, Container, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import blogOne from "../../images/blog_item_01.jpg";
import blogTwo from "../../images/blog_item_02.jpg";
import blogThree from "../../images/blog_item_03.jpg";
import blogFour from "../../images/blog_item_04.jpg";
import { Pagination } from "@material-ui/lab";
const Blog = () => {
  const classes = useStyles();
  return (
    <section className={classes.blog}>
      <Container className={classes.cont}>
        <Box className={classes.blogPost}>
          <img src={blogOne} alt="blog one" className={classes.img} />
          <Typography className={classes.date}>26 Oct 2022</Typography>
          <Box className={classes.blogPostText}>
            <Typography className={classes.blogTitle}>
              Nullam ornare purus massa
            </Typography>
            <Typography variant="body2" className={classes.branding}>
              Branding / Admin
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.about}>
              Vivamus venenatis mi enim, ut gravida sem viverra sit amet. Nam
              ullamcorper dui nec risus malesuada fringilla. Aliquam erat
              volutpat. Aliquam a varius odio. Quisque iaculis massa vel nunc
              porta vehicula. Nulla consectetur iaculis elit. Vivamus euismod
              lorem rutrum iaculis commodo. Cras congue nisi non varius
              tincidunt.
            </Typography>
            <Link href="#" className={classes.link}>
              Continue Reading
            </Link>
          </Box>
        </Box>
        {/* 2 */}
        <Box className={classes.blogPost}>
          <img src={blogTwo} alt="blog one" className={classes.img} />
          <Typography className={classes.date}>26 Oct 2022</Typography>
          <Box className={classes.blogPostText}>
            <Typography className={classes.blogTitle}>
              Nullam ornare purus massa
            </Typography>
            <Typography variant="body2" className={classes.branding}>
              Branding / Admin
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.about}>
              Vivamus venenatis mi enim, ut gravida sem viverra sit amet. Nam
              ullamcorper dui nec risus malesuada fringilla. Aliquam erat
              volutpat. Aliquam a varius odio. Quisque iaculis massa vel nunc
              porta vehicula. Nulla consectetur iaculis elit. Vivamus euismod
              lorem rutrum iaculis commodo. Cras congue nisi non varius
              tincidunt.
            </Typography>
            <Link href="#" className={classes.link}>
              Continue Reading
            </Link>
          </Box>
        </Box>
        {/* 3 */}
        <Box className={classes.blogPost}>
          <img src={blogThree} alt="blog one" className={classes.img} />
          <Typography className={classes.date}>26 Oct 2022</Typography>
          <Box className={classes.blogPostText}>
            <Typography className={classes.blogTitle}>
              Nullam ornare purus massa
            </Typography>
            <Typography variant="body2" className={classes.branding}>
              Branding / Admin
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.about}>
              Vivamus venenatis mi enim, ut gravida sem viverra sit amet. Nam
              ullamcorper dui nec risus malesuada fringilla. Aliquam erat
              volutpat. Aliquam a varius odio. Quisque iaculis massa vel nunc
              porta vehicula. Nulla consectetur iaculis elit. Vivamus euismod
              lorem rutrum iaculis commodo. Cras congue nisi non varius
              tincidunt.
            </Typography>
            <Link href="#" className={classes.link}>
              Continue Reading
            </Link>
          </Box>
        </Box>
        {/* 4 */}
        <Box className={classes.blogPost}>
          <img src={blogFour} alt="blog one" className={classes.img} />
          <Typography className={classes.date}>22 Oct 2022</Typography>
          <Box className={classes.blogPostText}>
            <Typography className={classes.blogTitle}>
              Nullam ornare purus massa
            </Typography>
            <Typography variant="body2" className={classes.branding}>
              Branding / Admin
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.about}>
              Vivamus venenatis mi enim, ut gravida sem viverra sit amet. Nam
              ullamcorper dui nec risus malesuada fringilla. Aliquam erat
              volutpat. Aliquam a varius odio. Quisque iaculis massa vel nunc
              porta vehicula. Nulla consectetur iaculis elit. Vivamus euismod
              lorem rutrum iaculis commodo. Cras congue nisi non varius
              tincidunt.
            </Typography>
            <Link href="#" className={classes.link}>
              Continue Reading
            </Link>
          </Box>
        </Box>
        <Pagination
          count={4}
          variant="outlined"
          shape="rounded"
          className={classes.pagination}
          color="secondary"
        />
      </Container>
    </section>
  );
};

export default Blog;
