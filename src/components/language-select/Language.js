import React from "react";
import PropTypes from "prop-types";

import { CONSTANTS } from "../../utils";

class Language extends React.Component {
  render() {
    return (
      <span>
        {CONSTANTS.LANGUAGE.METADATA[this.props.code].ICON}&nbsp;
        {CONSTANTS.LANGUAGE.METADATA[this.props.code].DISPLAY_NAME}
      </span>
    );
  }
}

Language.propTypes = {
  code: PropTypes.oneOf(["en", "pt-BR"]).isRequired,
};

export default Language;
