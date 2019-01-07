import React, { Component } from "react";

//import components
import UserForm from "./UserForm.js";

class Main extends Component {
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username;
    console.log(user);
  }
  render() {
    return (
      <div><h1>API call in React using Axios</h1>
      <UserForm getUser={this.getUser}/>
      </div>
    );
  }
}


export default Main;
