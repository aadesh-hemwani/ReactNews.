import React, { Component } from "react";

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

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
              ReactNews
              <span className="header__logo__dot">.</span>
            </li>
            <li className="listItem">
              <a
                className={
                  this.props.active === "technology" ? activeClass : normalClass
                }
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
                onClick={this.props.linkClicked.bind(this, "india")}
              >
                India
              </a>
            </li>
            <li className="listItem">
              <a
                className={
                  this.props.active === "world" ? activeClass : normalClass
                }
                onClick={this.props.linkClicked.bind(this, "world")}
              >
                World
              </a>
            </li>
            <li className="listItem">
              <form className="form-inline form__class">
                <input
                  className="search__input form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <i
                  className="fa fa-search search__icon"
                  aria-hidden="true"
                  onClick={this.props.search.bind(this, this.state.search)}
                ></i>
              </form>
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
                onClick={this.props.linkClicked.bind(this, "india")}
              >
                India
              </a>
            </li>
            <li>
              <a
                className={
                  this.props.active === "world"
                    ? mobileClassActive
                    : mobileClassNormal
                }
                onClick={this.props.linkClicked.bind(this, "world")}
              >
                world
              </a>
            </li>
            <li className="listItem">
              <form className="form-inline form__classM">
                <input
                  className="search__input form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <i
                  onClick={this.props.search.bind(this, this.state.search)}
                  className="fa fa-search search__iconM"
                  aria-hidden="true"
                ></i>
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
