import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout.css";

import logoImg from "../assets/GetKit2.png";
// import nameImg from "../assets/GetKit Name.png";

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "active" : ""
        }`}
      >
        <div className="nav-container">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src={logoImg} alt="GetKit Logo" className="logo-icon" />
            {/* <img src={nameImg} alt="GetKit" className="logo-text" /> */}
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/how-it-works" onClick={closeMenu}>
              How It Works
            </NavLink>

            <NavLink to="/kits" onClick={closeMenu}>
              Kits
            </NavLink>

            <NavLink to="/insights" onClick={closeMenu}>
              Insights
            </NavLink>

            <NavLink to="/community" onClick={closeMenu}>
              Community
            </NavLink>

            <NavLink to="/custom" onClick={closeMenu}>
              Custom
            </NavLink>

            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </nav>

            <NavLink to="/kits" onClick={closeMenu}>
              Kits
            </NavLink>

            <NavLink to="/insights" onClick={closeMenu}>
              Insights
            </NavLink>

            <NavLink to="/community" onClick={closeMenu}>
              Community
            </NavLink>

            <NavLink to="/custom" onClick={closeMenu}>
              Custom
            </NavLink>

            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </nav>

          <div className="nav-actions">
            <NavLink
              to="/login"
              className="btn btn-secondary"
              onClick={closeMenu}
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}