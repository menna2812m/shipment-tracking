import React, { useState } from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false); // State to track dropdown visibility
  const [language, setLanguage] = useState("English"); // State to track selected language
  const [logoTitle, setLogoTitle] = useState("Bosta"); 

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev); // Toggle the dropdown state
  };
  const toggleLogoTitle = (title) => {
    setLogoTitle(title);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpened(false); // Close dropdown after selection
    toggleLogoTitle(lang === "عربي" ? "بوسطة" : "Bosta");
    const direction = lang === "عربي" ? "rtl" : "ltr"; // Set direction based on language
    document.documentElement.setAttribute("dir", direction);  };

  return (
    <header className="header">
      <div className="right-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">{logoTitle}</span>
      </div>
      <div className="left-section">
        <div onClick={toggleDropdown} className="dropdown-toggle">
          <span>{language}</span>
          <i className="arrow-down">&#9660;</i> {/* Down arrow */}
        </div>
        {/* Dropdown menu */}
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
