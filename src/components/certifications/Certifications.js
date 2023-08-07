import React from "react";
import Certification from "./Certification";

class Certifications extends React.Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-theme">Certifications</h2>
            </div>
          </div>
          <div className="row">
            <div className="card-group">
              <Certification
                title="AZ-400: DevOps Engineer Expert"
                imageSrc="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
              />
              <Certification
                title="AZ-204: Azure Developer Associate"
                imageSrc="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
              />
              <Certification
                title="AZ-900: Azure Fundamentals"
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
