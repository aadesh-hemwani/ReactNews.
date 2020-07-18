import React, { Component } from "react";

export default class TopArticles extends Component {
  render() {
    if (this.props.title === undefined) {
      return (
        <div className="loadingDiv">
          <div className="loadingText">Loading ReactNews...</div>
        </div>
      );
    } else {
      return (
        <div className="top-articles row">
          <div className="article1 col-md">
            <img className="top__image" src={this.props.image} alt="news" />
            <div className="color1"></div>
            <div className="top__source">{this.props.category}</div>
            <a href={this.props.url} className="top__title">
              {this.props.title}
            </a>
          </div>
        </div>
      );
    }
  }
}
