import React from "react";
import GnanodayaHeader from "../GnanodayaHeader";
import "./index.css";
import { FaRegCircleDot } from "react-icons/fa6";

function GnanodayaHome() {
  return (
    <div className="home_container">
      <GnanodayaHeader />
      <div className="home_content_bg_container">
        <div className="home_content_container">
          <button className="home_btn">
            <FaRegCircleDot className="home_btn_icon" />
            VLSI Design Training & Placements
          </button>
          <h1 className="home_heading">
            <span className="home_heading_span">RTL</span> Coading and FPGA
            Designs
          </h1>
          <p className="home_paragraph">
            RTL Coading and FPGA Designs: Advanced digital circuitry.
          </p>
          <div>
            <button className="home_enroll_btn">Enroll Now</button>
            <button className="home_learn_more_brn">Learn More</button>
          </div>
        </div>

        <div className="home_img_container">
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1742026195/3599451_qmjyjd.webp"
            className="home_img"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default GnanodayaHome;
