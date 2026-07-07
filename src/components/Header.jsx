import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Travel Agency</div>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`nav ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Naslovnica
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            O nama
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kategorije
          </NavLink>
          <NavLink
            to="/tours"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Izleti
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            F.A.Q.
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
