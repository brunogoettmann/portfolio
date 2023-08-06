import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="bg-green-700 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h2>About Me 2</h2>
              <p>
                Learning new things is what makes me better day by day. I'm
                always working on a new wiser version of me. My goal is to wake
                up different everyday with new perspectives and much closer to
                what I want. Professionally, I come to work willing to do my
                best because I believe there is a lot to discover, teach and be
                thought.
              </p>
              <p>
                Over the years I've become a passionate .NET developer with
                focus on cloud development. With the teams I work with, I help
                foster a left-shift culture embracing best practices and
                processes to deliver quality code securerly.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
