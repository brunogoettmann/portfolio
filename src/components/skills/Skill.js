import React from "react";
import PropTypes from "prop-types";

class Skill extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h5 className="text-theme">{this.props.name}</h5>
          </div>
          <div className="col text-md-end">
            <span className="text-muted ">{this.props.description}</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="progress"
              role="progressbar"
              aria-label={this.props.name}
              aria-valuenow={this.props.value}
              aria-valuemin="0"
              aria-valuemax="100">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-theme"
                style={{ width: this.props.value }}>
                {this.props.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  name: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.object,
};

export default Skill;
