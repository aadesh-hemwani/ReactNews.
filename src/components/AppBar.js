import React, { Component } from "react";

export default class AppBar extends Component {
  render() {
    var activeClass = "nav-link link active";
    var normalClass = "nav-link link";

    var mobileClassActive = "mobileLinks backColor";
    var mobileClassNormal = "mobileLinks";
    return (
      <div className="header">
        <div className="appbar navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav mr-auto">
            <li className="header__logo">
              ReactNews<span className="header__logo__dot">.</span>
            </li>
            <li className="listItem">
              <a
                className={
                  this.props.active === "technology" ? activeClass : normalClass
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "technology")}
              >
                Technology
              </a>
            </li>
            <li className="listItem">
              <a
                className={
                  this.props.active === "india" ? activeClass : normalClass
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "india")}
              >
                India
              </a>
            </li>
            <li className="listItem">
              <a
                className={
                  this.props.active === "usa" ? activeClass : normalClass
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "usa")}
              >
                USA
              </a>
            </li>
          </ul>
        </div>
        <input type="checkbox" className="checkBox"></input>
        <div className="hamburger">
          <div className="HBicon"></div>
          <div className="HBicon"></div>
          <div className="HBicon"></div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a
                className={
                  this.props.active === "technology"
                    ? mobileClassActive
                    : mobileClassNormal
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "technology")}
              >
                Technology
              </a>
            </li>
            <li>
              <a
                className={
                  this.props.active === "india"
                    ? mobileClassActive
                    : mobileClassNormal
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "india")}
              >
                India
              </a>
            </li>
            <li>
              <a
                className={
                  this.props.active === "usa"
                    ? mobileClassActive
                    : mobileClassNormal
                }
                href="/#"
                onClick={this.props.linkClicked.bind(this, "usa")}
              >
                USA
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
