import React from "react";
import PropTypes from "prop-types";
import { withTranslation, Trans } from "react-i18next";

class Text extends React.Component {
  render() {
    return <Trans i18nKey={this.props.localizationKey} />;
  }
}

Text.propTypes = {
  localizationKey: PropTypes.string.isRequired,
};

export default withTranslation()(Text);
