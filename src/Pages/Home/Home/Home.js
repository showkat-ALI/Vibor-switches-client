import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Reviews from "../Reviews/Reviews";
import Switches from "../Switches/Switches";
import Topbanner from "../TopBanner/Topbanner";
import Whyus from "../WhyUs/Whyus";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Topbanner></Topbanner>
      <Switches></Switches>
      <Whyus></Whyus>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
