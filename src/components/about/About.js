import React from "react";

import { Text } from "..";

class About extends React.Component {
  render() {
    return (
      <section className="bg-theme py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h2>
                <Text localizationKey="ABOUT.TITLE" />
              </h2>
              <p>
                <Text localizationKey="ABOUT.FIRST_PARAGRAPH" />
              </p>
              <p>
                <Text localizationKey="ABOUT.SECOND_PARAGRAPH" />
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
