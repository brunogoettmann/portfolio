import React from "react";
import Greetings from "../greetings/Greetings";
import Header from "../header/Header";
import About from "../about/About";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Greetings />
        <About />
      </>
    );
  }
}

export default App;
