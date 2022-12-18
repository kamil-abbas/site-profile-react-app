import React, { Component } from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    const {fullname, email, address} = this.props;
    return (
      <div className="profile">
        <h1>Adı: <span>{fullname}</span></h1>
        <p>Email: <span>{email}</span></p>
        <p>Ünvan: <span>{address}</span></p>
        <PersonalInfo />
      </div>
    );
  }
}
