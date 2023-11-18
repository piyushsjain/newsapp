import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfinitScroll from "react-infinite-scroll-component";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  state = {
    articles: [],
    page: 1,
    loading: false,
    totalResults: 0
  };

  async updateNews(pageno) {
    this.props.setProgress(10);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00435227d2d74ee4a793cb385b5b417e&page=${pageno}&pageSize=${this.props.pageSize}`
    )
      .then((response) => {
        this.props.setProgress(30);
        this.setState({ loading: true });
        return response.json();
      })
      .then((data) => {
        this.props.setProgress(70);
        this.setState({ articles: data.articles });
        this.setState({ totalResults: data.totalResults });
        this.setState({ loading: false });
        this.props.setProgress(100);
      });
    }
    
    async componentDidMount() {
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} | NewsMonkey`;
    this.updateNews(1);
  }

  fetchNextUsers = () =>{
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00435227d2d74ee4a793cb385b5b417e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    )
      .then((response) => {
        this.setState({ loading: true });
        return response.json();
      })
      .then((data) => {
        this.setState({ articles: this.state.articles.concat(data.articles) });
        this.setState({ totalResults: data.totalResults });
        this.setState({ loading: false });
      });
    this.setState({page: this.state.page + 1})

  }

  render() {
    const { articles } = this.state;

    return (
      <>
        <h1 className="mx-[15.4%] font-semibold text-3xl mt-16 text-center">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <InfinitScroll
          dataLength={this.state.articles.length}
          next={this.fetchNextUsers}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          {articles.map((article) => {
              return (
                <NewsItem
                  // key={article.title}
                  title={article.title ? article.title : "unknown"}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  url={article.url}
                  author={article.author ? article.author : "unknown"}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              );
            })}
        </InfinitScroll>
      </>
    );
  }
}
