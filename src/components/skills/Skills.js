import React from "react";
import Skill from "./Skill";

class Skills extends React.Component {
  render() {
    return (
      <section className="container py-5">
        <div className="row mb-3">
          <div className="col">
            <h2 className="text-theme">Skills & Technologies</h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <Skill name=".NET" value="100%" />
          </div>
          <div className="col-6">
            <Skill
              name="Cloud Development"
              description="Microsoft Azure"
              value="90%"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <Skill name="HTML, CSS, JavaScript" value="70%" />
          </div>
          <div className="col-6">
            <Skill
              name="Containerization"
              description="Docker & Kubernetes"
              value="85%"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <Skill
              name="Scripting"
              description="PowerShell & Bash"
              value="65%"
            />
          </div>
          <div className="col-6">
            <Skill
              name="Infrastructure as Code"
              description="Terraform & ARM templates"
              value="75%"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
