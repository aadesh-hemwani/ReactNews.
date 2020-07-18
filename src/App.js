import React, { Component } from "react";
import "./css/App.css";

import "./css/TopArticle.css";
import "./css/article.css";
import "./css/appbar.css";

import TopArticles from "./components/TopArticles.js";
import Articles from "./components/Articles";
import AppBar from "./components/AppBar.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "technology",
      articles: [],
      techArticles: [],
      countryArticles: [],
      worldArticles: [],
      searchArticles: [],
      isLoaded: false,
    };
    this.url =
      "https://api.currentsapi.services/v1/search?keywords=trending&language=en&apiKey=vkZ1vXT3ejn5kyNxVaW23l6Lc4J_xchkBNxGYoFAIdHP5x2b";

    this.techArticlesUrl =
      "https://api.currentsapi.services/v1/search?keywords=technology&language=en&apiKey=vkZ1vXT3ejn5kyNxVaW23l6Lc4J_xchkBNxGYoFAIdHP5x2b";

    this.countryArticlesUrl =
      "https://api.currentsapi.services/v1/search?keywords=india&language=en&apiKey=vkZ1vXT3ejn5kyNxVaW23l6Lc4J_xchkBNxGYoFAIdHP5x2b";

    this.worldNewsURL =
      "https://api.currentsapi.services/v1/search?keywords=world&language=en&apiKey=vkZ1vXT3ejn5kyNxVaW23l6Lc4J_xchkBNxGYoFAIdHP5x2b";
  }

  handleSearch = (search) => {
    if (search !== "") {
      console.log(search);
      var searchUrl =
        "https://api.currentsapi.services/v1/search?keywords=" +
        search +
        "&language=en&apiKey=vkZ1vXT3ejn5kyNxVaW23l6Lc4J_xchkBNxGYoFAIdHP5x2b";
      fetch(searchUrl)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            searchArticles: json.news,
          });
        });

      this.setState({
        selected: "search",
      });
    }
  };

  componentDidMount() {
    fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          articles: json.news,
        });
      });

    if (this.state.selected === "technology") {
      fetch(this.techArticlesUrl)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            techArticles: json.news,
          });
        });
    }
    fetch(this.countryArticlesUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          countryArticles: json.news,
        });
      });

    fetch(this.worldNewsURL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          worldArticles: json.news,
        });
      });
  }

  handleClick = (category) => {
    this.setState({
      selected: category + "",
    });
  };

  render() {
    var id = 0;
    var {
      isLoaded,
      articles,
      techArticles,
      countryArticles,
      worldArticles,
      searchArticles,
    } = this.state;
    var articlesToShow;

    switch (this.state.selected) {
      case "technology":
        articlesToShow = techArticles;
        break;

      case "india":
        articlesToShow = countryArticles;
        break;

      case "world":
        articlesToShow = worldArticles;
        break;
      case "search":
        articlesToShow = searchArticles;
        break;
      default:
        break;
    }

    if (!isLoaded) {
      return (
        <img
          className="loading"
          src={require("./loading.gif")}
          alt="Loading News"
        />
      );
    } else {
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1024, min: 756 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 756, min: 556 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 556, min: 0 },
          items: 1,
        },
      };

      return (
        <div>
          <AppBar
            linkClicked={this.handleClick}
            active={this.state.selected}
            search={this.handleSearch}
          />

          <div className="main">
            <Carousel
              arrows={false}
              responsive={responsive}
              autoPlay
              swipeable
              showDots={false}
            >
              {articles.map((article) => (
                <TopArticles
                  key={id++}
                  title={article.title}
                  image={article.image}
                  url={article.url}
                  category={article.category}
                />
              ))}
            </Carousel>
            <div className="row">
              <div className="articlesBlock2 col-sm">
                <div className="grid-container">
                  {articlesToShow.map((article) => (
                    <Articles
                      key={id++}
                      title={article.title}
                      image={article.image}
                      url={article.url}
                      category={article.category}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
