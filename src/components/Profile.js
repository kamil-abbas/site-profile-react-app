import React, { Component } from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    console.log(this)
    return (
      <div className="profile">
        <h1>Adı: <span>{this.props.fullname}</span></h1>
        <p>Email: <span>{this.props.email}</span></p>
        <p>Ünvan: <span>{this.props.address}</span></p>
        <PersonalInfo />
      </div>
    );
  }
}
