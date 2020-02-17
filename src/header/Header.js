import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="nav__logo-img">
          <img src={require("./../assets/pokeball.png")} alt="Logo" />
        </div>
        <div className="nav__logo-label">POKÉDEX</div>
      </nav>
    </header>
  );
};

export default Header;
