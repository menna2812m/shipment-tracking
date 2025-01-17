import React, { useState } from "react";
import "./AppSearchBar.scss";
import search from "../../assets/images/search.svg";

const AppSearchBar = ({ setTrackingNumber }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue) {
      setTrackingNumber(inputValue); // Pass the input value back to the parent
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue) {
      setTrackingNumber(inputValue); // Trigger search on Enter key
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter tracking number"
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={search} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};
export default AppSearchBar;
