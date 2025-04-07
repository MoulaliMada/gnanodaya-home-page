import React from "react";
import "./index.css";

function GnanodayaHeader() {
  return (
    <div className="header_container">
      <img
        src="https://res.cloudinary.com/dssaftaaa/image/upload/v1742024092/gnanodaya_logo_hdvjmn.png"
        alt=""
        className="header_logo"
      />
      <ul className="header_navlinks_ul">
        <li className="header_navlink">Home</li>
        <li className="header_navlink">Courses</li>
        <li className="header_navlink">Placements</li>
        <li className="header_navlink">About</li>
        <li className="header_navlink">Contact</li>
      </ul>
      <button className="header_enroll_btn">Enroll Now</button>
      <button className="free_demo_btn">Get a free demo</button>
    </div>
  );
}

export default GnanodayaHeader;
