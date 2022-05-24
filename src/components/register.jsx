import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: {} };
  schema = {
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("name"),
  };
  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-900 mt-40 mx-auto md:w-1/2">
        <form onSubmit={this.handelSubmit}>
          {this.renderInput("email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}

          <div className="flex items-center justify-between">
            {this.renderButton("Register")}
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
