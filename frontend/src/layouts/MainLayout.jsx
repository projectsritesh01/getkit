import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout.css";

import logoImg from "../assets/GetKit (2).png";
// import nameImg from "../assets/GetKit Name.png";

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <NavLink to="/" className="logo">
            <img src={logoImg} alt="GetKit Logo" className="logo-icon" />
            {/* <img src={nameImg} alt="GetKit" className="logo-text" /> */}
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/kits">Kits</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/custom">Custom</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>

          <div className="nav-actions">
            <NavLink to="/login" className="btn btn-secondary">
              Login
            </NavLink>

            <NavLink to="/signup" className="btn btn-primary">
              Sign up
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}