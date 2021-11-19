import React from "react";
import { Link } from "react-router-dom";
import topBaneer from "../../../resources/60a63196b86f4adae0154762_Vibor-Logo-4.png";
import "./TopBanner.css";
const Topbanner = () => {
  return (
    <div className="">
      <div>
        <img src={topBaneer} className="w-100" alt="" />
        <div className="d-flex justify-content-center py-5">
          <Link to="/allswitches">
            <button className="btn-grad text-center">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
