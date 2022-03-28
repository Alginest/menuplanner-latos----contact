import React from "react";
import MenuBanner from "../components/MenuBanner/MenuBanner";
import SlidingMenu from "../components/SlidingMenu/SlidingMenu";
import Reservations from "../components/Reservations/Reservations";
const OurMenu = () => {
  return (
    <div>
      <MenuBanner />
      <SlidingMenu />
      <Reservations />
    </div>
  );
};

export default OurMenu;
