import React, { Component } from "react";
import "../App.css";

export default class Title extends Component {
  render() {
    return (
      <div className="first-block">
        <div className="form-first">
          <h1>
            <span>Welco</span>me to MDM
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <button>Know More</button>
        </div>
      </div>
    );
  }
}
