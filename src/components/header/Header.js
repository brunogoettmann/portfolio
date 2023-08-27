import React from "react";
import { LanguageSelect } from "..";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Bruno Curbani Goettmann</span>
          <div className="d-flex">
            <LanguageSelect />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
