import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/quizzy.png";
import Button from "./Button";

export default function Navbar({ links = [], isUser = true, user = "Guest", handleLogout }) {

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="wrapper navbar__container">
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="navbar__links">
          <div className="navbar__links-left">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation - Only shown when menu is open */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav className="navbar__links-mobile">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.to} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="navbar__links-right-mobile">
              {isUser ? (
                <div>
                  <p>{user}</p>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              ) : (
                <div className="navbar__links-right-box">
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                  <Button large onClick={handleStartQuiz}>
                    Take a Quiz
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Desktop Right Links - Hidden on mobile */}
        <div className="navbar__links-right">
          {isUser ? (
            <div className="navbar-flex">
              <p>{user}</p>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="navbar__links-right-box">
              <NavLink to="/login">Login</NavLink>
              <Button onClick={handleStartQuiz}>Take a Quiz</Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <label
          className={`menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon">&nbsp;</span>
        </label>
      </div>
    </header>
  );
}
