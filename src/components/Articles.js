import React, { Component } from "react";

export default class Articles extends Component {
  render() {
    return (
      <div className="tech-article">
        <img
          src={this.props.image}
          className="tech-image"
          alt="Not Available"
        />
        <div className="textBlock">
          <div className="tech-source">{this.props.category}</div>
          <br />
          <a className="tech-title" href={this.props.url}>
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}
