import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../components/TakeQuizButton";
import quizzyLogo from "../assets/quizzy.png";
import "../styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="app">
      <Header>
        <NavBarComp>
          <Nav>
            <NavLogo />
            <NavLinks className="nav--links" />
            <NavButtons className="nav--buttons">
              <Button
                type="button"
                color="#fff"
                bgColor="transparent"
                onClick={() => {navigate("/login"); console.log("clicked")}}
              >
                Login
              </Button>
              <Button
                type="button"
                color="#442d7c"
                bgColor="#fff"
                onClick={() => navigate("/quiz")}
              >
                Take A Quiz
              </Button>
            </NavButtons>
            <Hamburger
              className="hamburger"
              isClicked={isMenuOpen}
              onSetIsClicked={setIsMenuOpen}
            />
          </Nav>
        </NavBarComp>
      </Header>
      {isMenuOpen && <DropDown />}
    </div>
  );
}

function DropDown() {
  return (
    <div className="dropdown">
      <>
        <NavLinks className="dd__nav--links" />
        <NavButtons className="dd__nav--buttons">
          <Button type="button" color="#442d7c" bgColor="transparent"
          >
            Login
          </Button>
          <Button type="button" color="#fff" bgColor="#442d7c">
            Take A Quiz
          </Button>
        </NavButtons>
      </>
    </div>
  );
}

function Header({ children }) {
  return <header className="header">{children}</header>;
}
function NavBarComp({ children }) {
  return <div className="container">{children}</div>;
}

function Nav({ children }) {
  return <div className="nav">{children}</div>;
}

function NavLinks({ className }) {
  const navItems = NavItems();

  return (
    <nav className={className}>
      <ul>
        {navItems.map((item, i) => (
          <NavLink to={item.to}>
            <li key={i}>{item.label}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

function NavLogo() {
  return (
    <div className="logo_box">
      <img src={quizzyLogo} alt="Quizzy Logo" />
    </div>
  );
}

function NavButtons({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Hamburger({ isClicked, onSetIsClicked, className = "" }) {
  return (
    <label
      className={`menu ${isClicked ? "active" : ""} ${className}`}
      onClick={() => onSetIsClicked(!isClicked)}
    >
      <span className="menu-icon">&nbsp;</span>
    </label>
  );
}

function NavItems() {
  return [
    { label: "Home", to: "/home" },
    { label: "About", to: "about" },
    { label: "Features", to: "features" },
  ];
}

Nav.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

NavLinks.propTypes = {
  navItems: PropTypes.array.isRequired,
};
