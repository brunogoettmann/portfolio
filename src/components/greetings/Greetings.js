import React from "react";
import Avatar from "../avatar/Avatar";
import SocialMedia from "../social-media/SocialMedia";

class Greetings extends React.Component {
  render() {
    return (
      <section className="container-fluid py-5 text-center">
        <div className="row">
          <div className="col-xxl-8">
            <h1>
              Hi there! <span className="animation-wave">👋</span> - I'm
              <span className="text-theme"> Bruno</span>
            </h1>
            <h2 className="text-muted mt-4">
              I design simple software solutions and solve problems by coding
              beautiful things.
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
