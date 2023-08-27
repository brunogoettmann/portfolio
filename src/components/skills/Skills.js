import React from "react";

import Skill from "./Skill";
import { Text } from "..";

class Skills extends React.Component {
  render() {
    return (
      <section className="container py-5">
        <div className="row mb-3">
          <div className="col">
            <h2 className="text-theme">
              <Text localizationKey="SKILLS.TITLE" />
            </h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.DOTNET.NAME" />}
              value="100%"
            />
          </div>
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.CLOUD_DEVELOPMENT.NAME" />}
              description={
                <Text localizationKey="SKILLS.CLOUD_DEVELOPMENT.DESCRIPTION" />
              }
              value="90%"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.FRONTEND.NAME" />}
              value="70%"
            />
          </div>
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.CONTAINERIZATION.NAME" />}
              description={
                <Text localizationKey="SKILLS.CONTAINERIZATION.DESCRIPTION" />
              }
              value="85%"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.SCRIPTING.NAME" />}
              description={
                <Text localizationKey="SKILLS.SCRIPTING.DESCRIPTION" />
              }
              value="65%"
            />
          </div>
          <div className="col-6 p-0">
            <Skill
              name={<Text localizationKey="SKILLS.INFRA_AS_CODE.NAME" />}
              description={
                <Text localizationKey="SKILLS.INFRA_AS_CODE.DESCRIPTION" />
              }
              value="75%"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
