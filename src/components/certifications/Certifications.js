import React from "react";

import { Text } from "..";
import Certification from "./Certification";

class Certifications extends React.Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-theme">
                <Text localizationKey="CERTIFICATIONS.TITLE" />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="card-group">
              <Certification
                title="CERTIFICATIONS.AZ_400"
                imageSrc="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
              />
              <Certification
                title="CERTIFICATIONS.AZ_204"
                imageSrc="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
              />
              <Certification
                title="CERTIFICATIONS.AZ_900"
                imageSrc="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
