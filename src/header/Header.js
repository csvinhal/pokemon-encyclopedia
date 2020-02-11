import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header className="header">
      <div className="header__logo-img">
        <img src={require("./../assets/pokeball.png")} alt="Logo" />
      </div>
      <div className="header__logo">POKÉDEX</div>
    </header>
  );
};

export default Header;
