import React, { Component } from "react";
import Profile from "./components/Profile";
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Profile
          fullname="Elmaddin Mikayilli"
          email="emikayilli@gmail.com"
          address="Bakı şəh., Binəqədi rayonu"
        />
        <Profile
          fullname="İsmayil Ahmadov"
          email="iahmadov@gmail.com"
          address="Bakı şəh., Nizami rayonu"
        />
        <Profile
          fullname="Rafig Khidirli"
          email="rkhidirli@gmail.com"
          address="Bakı şəh., Yasamal rayonu"
        />
      </div>
    );
  }
}
