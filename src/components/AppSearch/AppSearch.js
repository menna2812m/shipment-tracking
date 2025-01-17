
import React, { useState } from "react";
import "./AppSearch.css";
import search from '../../assets/images/search.svg';

const AppSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = () => {
      console.log("Search query:", searchQuery);
      // Add functionality to handle the search
    };
  
    return (
      <div className="search-bar">
       
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter tracking number"
        />
         <button className="search-button" onClick={handleSearch}>
         <img src={search} alt="Search" className="search-icon" />
         </button>
      </div>
    );
  };
  export default AppSearch;
