import React from "react";
import i18n from "i18next";

import { CONSTANTS } from "../../utils";
import Language from "./Language";

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageCode: CONSTANTS.LANGUAGE.DEFAULT,
    };
  }

  handleClick = (languageCode) => {
    i18n.changeLanguage(languageCode);
    this.setState({
      languageCode,
    });
  };

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <Language code={this.state.languageCode} />
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={this.handleClick.bind(this, CONSTANTS.LANGUAGE.ENGLISH)}>
              <Language code={CONSTANTS.LANGUAGE.ENGLISH} />
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={this.handleClick.bind(
                this,
                CONSTANTS.LANGUAGE.PORTUGUESE_BR
              )}>
              <Language code={CONSTANTS.LANGUAGE.PORTUGUESE_BR} />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSelect;
