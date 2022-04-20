import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="right_nav">
        <a href="#">TravelPreneour NJ.</a>
      </div>
      <div className="left_nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#vlog">My Vlog</a>
          </li>
          <li>
            <a href="#life">My Life</a>
          </li>
          <li>
            <a href="#contact">Follow Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
