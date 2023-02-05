import React from "react";
import { pageLinks, socialLinks } from "../data";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          const {id, href, text} = link
          return (
            <li key={id}>
              <a href={href} className="nav-link"> {text} </a>
            </li>
          )
        })}
      </ul>

      <ul className="nav-icons">
      {socialLinks.map((link) => {
        const {id, href, icon} = link
        return(
        <li data-testid={id} key={id}>
          <a href={href} target="_blank" rel="noreferrer" className="nav-icon"
            ><i className={icon}></i></a>
        </li>
        )
      })}
      </ul>

    </div>
  </nav>
  )
}

export default Navbar;
