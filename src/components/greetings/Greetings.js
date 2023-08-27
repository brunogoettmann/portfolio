import React from "react";

import { Avatar, SocialMedia, Text } from "..";

class Greetings extends React.Component {
  render() {
    return (
      <section className="container-fluid py-5 text-center">
        <div className="row">
          <div className="col-xxl-8">
            <h1>
              <Text localizationKey="GREETINGS.SALUTATION" />
              &nbsp;
              <span className="animation-wave">👋</span>
              &nbsp;-&nbsp;
              <Text localizationKey="GREETINGS.MY_NAME_IS" />
              &nbsp;
              <span className="text-theme">Bruno</span>
            </h1>
            <h2 className="text-muted mt-4">
              <Text localizationKey="GREETINGS.SUMMARY" />
            </h2>
          </div>
          <div className="col-xxl-4">
            <Avatar />
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-8 fs-1">
            <SocialMedia type="linkedin" username="bruno-goettmann" />
            <SocialMedia type="github" username="brunogoettmann" />
            <SocialMedia type="email" username="bruno.goettmann@hotmail.com" />
          </div>
        </div>
      </section>
    );
  }
}

export default Greetings;
