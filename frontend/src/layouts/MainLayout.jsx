import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout.css";

import logoImg from "../assets/GetKit2.png";
import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isAuthenticated, logout, loading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await logout();

    closeMenu();

    navigate("/");
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "active" : ""
        }`}
      >
        <div className="nav-container">

          {/* LOGO */}

          <NavLink
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src={logoImg}
              alt="GetKit Logo"
              className="logo-icon"
            />
          </NavLink>


          {/* MOBILE MENU BUTTON */}

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>


          {/* NAVIGATION */}

          <nav className="nav-links">

            <NavLink
              to="/how-it-works"
              onClick={closeMenu}
            >
              How It Works
            </NavLink>

            <NavLink
              to="/kits"
              onClick={closeMenu}
            >
              Kits
            </NavLink>

            <NavLink
              to="/insights"
              onClick={closeMenu}
            >
              Insights
            </NavLink>

            <NavLink
              to="/community"
              onClick={closeMenu}
            >
              Community
            </NavLink>

            <NavLink
              to="/custom"
              onClick={closeMenu}
            >
              Custom
            </NavLink>

            <NavLink
              to="/faq"
              onClick={closeMenu}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>

          </nav>


          {/* AUTH ACTIONS */}

          <div className="nav-actions">

            {!loading && !isAuthenticated && (
              <>
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
              </>
            )}


            {!loading && isAuthenticated && (
              <>
                <span className="nav-user">
                  Hi, {user?.name}
                </span>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>
      </header>

      <Outlet />
    </>
  );
}