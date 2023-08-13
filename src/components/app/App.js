import React from "react";
import { About, Certifications, Greetings, Header } from "..";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Greetings />
        <About />
        <Certifications />
      </>
    );
  }
}

export default App;
