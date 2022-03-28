import React from "react";
import AppBanner from "../components/Appbanner/AppBanner";
import Banner from "../components/banner/Banner";
import BlogPost from "../components/BlogPost/BlogPost";
import Menu from "../components/Menu/Menu";
import Plan from "../components/Plan/Plan";
import Reservations from "../components/Reservations/Reservations";
import SignUp from "../components/SignUp/SignUp";
import Week from "../components/WeekendFood/Week";
const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Plan />
      <Reservations />
      <AppBanner />
      <Week />
      <BlogPost />
      <SignUp />
    </div>
  );
};

export default Home;
