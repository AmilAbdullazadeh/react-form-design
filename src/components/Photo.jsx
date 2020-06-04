import React, { Component } from "react";
import "../style/photo.scss";
import person from "../img/person.svg";

class Photo extends Component {
  render() {
    return (
      <div className="photo-div">
        <img src={person} alt="pic" />
      </div>
    );
  }
}

export default Photo;
