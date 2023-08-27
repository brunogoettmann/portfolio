import React from "react";
import PropTypes from "prop-types";

import { Text } from "..";

class Skill extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h5 className="text-theme">
              <Text localizationKey={this.props.name} />
            </h5>
          </div>
          {this.props.description && (
            <div className="col text-md-end">
              <span className="text-muted ">
                <Text localizationKey={this.props.description} />
              </span>
            </div>
          )}
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Skill;
