import React, { useState } from "react";
import "./Header.scss";
import searchDark from "../../assets/images/search-dark.svg";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [language, setLanguage] = useState("English");
  const [logoTitle, setLogoTitle] = useState("Bosta");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev); // Toggle the dropdown state
  };
  const toggleLogoTitle = (title) => {
    setLogoTitle(title);
  };
  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev); // Toggle the search bar
  };
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpened(false); // Close dropdown after selection
    toggleLogoTitle(lang === "عربي" ? "بوسطة" : "Bosta");
    const direction = lang === "عربي" ? "rtl" : "ltr"; // Set direction based on language
    document.documentElement.setAttribute("dir", direction);
  };

  return (
    <header className="header">
      <div className="right-section">
        <span className="company-name">{logoTitle}</span>
      </div>
      <div className="left-section">
        <button className="search-btn" onClick={toggleSearchBar}>
          <img src={searchDark} alt="Search" className="search-icon" />
        </button>
        <div onClick={toggleDropdown} className="dropdown-toggle">
          <span>{language}</span>
          <i className="arrow-down">&#9660;</i>
        </div>

        {isOpened && (
          <div className="dropdown-menu">
            <span
              className="dropdown-item"
              onClick={() => changeLanguage("English")}
            >
              English
            </span>
            <span
              className="dropdown-item"
              onClick={() => changeLanguage("عربي")}
            >
              عربي
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
