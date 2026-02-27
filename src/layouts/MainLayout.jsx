import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout.css";

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
            getkit
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
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}