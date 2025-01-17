import React from "react";
import AppSearchBar from "../AppSearchBar/AppSearchBar";
import gps from "../../assets/images/gps.png";
import "./AppTrackingSearch.css";
const AppTrackingSearch = ({ setTrackingNumber }) => {

  return (
    <div className="tracking-search">
        <img  alt="location icon" src={gps} className="location-icon"/>
      <h2>Track Your Order</h2>
      <AppSearchBar setTrackingNumber={setTrackingNumber}/>
    </div>
  );
};

export default AppTrackingSearch;
