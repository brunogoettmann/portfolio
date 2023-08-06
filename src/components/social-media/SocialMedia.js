import React from "react";
import PropTypes from "prop-types";

class SocialMedia extends React.Component {
  getIconClassName() {
    switch (this.props.type) {
      case "email":
        return "bi-envelope-fill";
      case "linkedin":
        return "bi-linkedin";
      case "github":
        return "bi-github";
      default:
        throw new Error("Invalid type");
    }
  }

  getAnchorAddress() {
    switch (this.props.type) {
      case "email":
        return `mailto:${this.props.username}`;
      case "linkedin":
        return `https://linkedin.com/in/${this.props.username}`;
      case "github":
        return `https://github.com/${this.props.username}`;
      default:
        throw new Error("Invalid type");
    }
  }

  render() {
    return (
      <a
        className="text-green-700 p-2"
        href={this.getAnchorAddress()}
        target="_blank"
        rel="noreferrer">
        <i className={`bi ${this.getIconClassName()}`}></i>
      </a>
    );
  }
}

SocialMedia.propTypes = {
  username: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["github", "linkedin", "email"]).isRequired,
};

export default SocialMedia;
