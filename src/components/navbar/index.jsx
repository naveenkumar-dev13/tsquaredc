import React from "react";
import "./index.css";
import { logo } from "../../assets/images";
import { LINKS } from "../../data";

function NavBar() {
  return (
    <>
      <ul className="nav">
        <li>
          <img src={logo} alt="logo " className="nav-logo" />
        </li>
        <li className="links">
          {LINKS.map((link, index) => (
            <a href={link.href} key={index} className="nav-links">
              {link.label}
            </a>
          ))}
        </li>
        <li className="nav-btn">Get Started</li>
      </ul>
    </>
  );
}

export default NavBar;
