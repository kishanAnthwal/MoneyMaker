import "./nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { TiTimes, TiThMenu } from "react-icons/ti";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  // Toggle hamburger menu
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  // Toggle dropdown menu
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setDropdown(!dropdown);
  };

  // Handle window resize to auto-hide hamburger menu
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setHamburger(false); // Auto-hide menu on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar flex">
      <div className="logo">
        <Link to="/">
          <h2>MoneyMaker24</h2>
        </Link>
      </div>

      {/* Nav Links */}
      <ul
        className={` nav_links ${hamburger ? "active" : ""} ${
          isLargeScreen ? "desktop" : "mobile"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
            <Link to="#" onClick={toggleDropdown}>
              Services
            </Link>
          {dropdown && (
            <ul className="dropdown_menu">
              <li>
                <Link to="/cricketbetting">
                  <div className="menu">
                    <h3>Cricket Betting</h3>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/platform">Platform</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleHamburger}>
        {hamburger ? <TiTimes /> : <TiThMenu />}
      </div>
    </nav>
  );
};

export default Nav;
