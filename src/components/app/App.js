import React from "react";
import { About, Certifications, Greetings, Header, Skills } from "..";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Greetings />
        <About />
        <Certifications />
        <Skills />
      </>
    );
  }
}

export default App;
