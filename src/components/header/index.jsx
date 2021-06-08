import "./index.scss";
import { Link, animateScroll as scroll } from "react-scroll";

import fb from "./src/sidebar_1.svg";
import tw from "./src/sidebar_2.svg";
import inst from "./src/sidebar_3.svg";
import logo from "./src/logo.svg";
// import downBtn from "./src/down-btn.png";
import downBtn from "./src/down-btn.svg";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__menu header__menu_left">
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Home
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              About
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Team
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Booking
            </a>
          </li>
        </ul>
        <a href="#" className="header__logo-link">
          <img src={logo} alt="" className="header__logo" />
        </a>
        <ul className="header__menu header__menu_right">
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Menu
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Galerie
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Events
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-item-link">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__sidebar header__sidebar_shedule">
        Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
      </div>
      <div className="header__content">
        <h4 className="header__content-h4">Restaurant</h4>
        <h1 className="header__content-h1">Hungry People</h1>
        <div className="header__content-buttons">
          <button className="header__content-button">Book table</button>
          <button className="header__content-button">Explore</button>
        </div>
      </div>
      <div className="header__sidebar header__sidebar_icons">
        <a
          href="#"
          className="header__sidebar-icon-link header__sidebar-icon-fb"
        >
          <img className="header__sidebar-icon" src={fb} alt="" />
        </a>
        <a
          href="#"
          className="header__sidebar-icon-link header__sidebar-icon-tw"
        >
          <img className="header__sidebar-icon" src={tw} alt="" />
        </a>
        <a
          href="#"
          className="header__sidebar-icon-link header__sidebar-icon-inst"
        >
          <img className="header__sidebar-icon" src={inst} alt="" />
        </a>
      </div>
      <Link
        className="header__scroll-link"
        to="About Us"
        smooth={true}
        duration={500}
      >
        <img src={downBtn} alt="" className="header__scroll-link-img" />
      </Link>
    </header>
  );
};

export default Header;
