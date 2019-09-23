import React, { Component } from "react";
import "../App.css";

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    if (name === "email") {
      formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
    } else {
      formErrors.password =
        value.length < 6 ? "minimum 6 characaters required" : "";
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="second-block">
        <form className="form-second" onSubmit={this.handleSubmit} noValidate>
          <h1>
            Si<span>ng</span>in
          </h1>

          <div className="email">
            <input
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <input
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default From;
