import React, { Component } from "react";
import Form from "./components/form.component";
import Title from "./components/title.component";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <Title />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
