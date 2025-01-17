import React, { useState, useEffect } from "react";
import AppSearchBar from "../AppSearchBar/AppSearchBar";
import gps from "../../assets/images/gps.png";
import "./AppTrackingSearch.scss";
const AppTrackingSearch = ({ setTrackingNumber }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="tracking-search">
      <img alt="location icon" src={gps} className="location-icon" />
      <h2>Track Your Order</h2>
      {!isMobile && <AppSearchBar setTrackingNumber={setTrackingNumber} />}
    </div>
  );
};

export default AppTrackingSearch;
