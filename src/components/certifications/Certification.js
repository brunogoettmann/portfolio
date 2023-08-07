import React from "react";
import PropTypes from "prop-types";

class Certification extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.imageSrc && (
          <img
            src={this.props.imageSrc}
            className="card-img-top"
            alt="Failed to load"
            width="250"
            height="250"></img>
        )}
        <div className="card-footer text-center bg-theme">
          {this.props.title}
        </div>
      </div>
    );
  }
}

Certification.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default Certification;
