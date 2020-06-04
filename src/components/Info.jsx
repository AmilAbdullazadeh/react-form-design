import React, { Component } from "react";
import "../style/info.scss";

class Info extends Component {
  render() {
    return <div className="info-div">{this.props.title}</div>;
  }
}

export default Info;
