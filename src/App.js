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
      trending: [],
      isLoaded: false,
    };
    this.url =
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b64e0e0376d04458b78457b0c373a1cb";

    this.techArticlesUrl =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b64e0e0376d04458b78457b0c373a1cb";

    this.countryArticlesUrl =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=b64e0e0376d04458b78457b0c373a1cb";

    this.trendingArticlesUrl =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b64e0e0376d04458b78457b0c373a1cb";
  }

  componentDidMount() {
    fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          articles: json.articles,
        });
      });

    if (this.state.selected === "technology") {
      fetch(this.techArticlesUrl)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            techArticles: json.articles,
          });
        });
    }
    fetch(this.countryArticlesUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          countryArticles: json.articles,
        });
      });

    fetch(this.trendingArticlesUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          trending: json.articles,
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
      trending,
    } = this.state;
    var articlesToShow;

    switch (this.state.selected) {
      case "technology":
        articlesToShow = techArticles;
        break;

      case "india":
        articlesToShow = countryArticles;
        break;

      case "usa":
        articlesToShow = trending;
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
          <AppBar linkClicked={this.handleClick} active={this.state.selected} />

          <div className="main">
            <Carousel
              arrows={false}
              responsive={responsive}
              autoPlay
              swipeable
              showDots={true}
            >
              {articles.map((article) => (
                <TopArticles
                  key={id++}
                  title={article.title}
                  image={article.urlToImage}
                  url={article.url}
                  source={article.source.name}
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
                      image={article.urlToImage}
                      url={article.url}
                      source={article.source.name}
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
