import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class App extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

  state = {
    articles: [],
    page: 1,
    loading: false
  };

  async updateNews(pageno){
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00435227d2d74ee4a793cb385b5b417e&page=${
        pageno}&pageSize=${this.props.pageSize}`
    )
      .then((response) => {
        this.setState({loading: true})
        return response.json();
      })
      .then((data) => {
        this.setState({ articles: data.articles })
        this.setState({totalResults: data.totalResults})     
        this.setState({loading: false})
      });
    }
    
    async componentDidMount() {
      document.title = `${this.capitalizeFirstLetter(this.props.category)} | NewsMonkey`
      this.updateNews(1)
    }
    
    handlePreviousButton = async () => {
      this.setState({
        page: this.state.page - 1,
      });    
      this.updateNews(this.state.page-1)
    };
    
    handleNextButton = async () => {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews(this.state.page+1)
  };

  render() {
    const { articles } = this.state;

    return (
      <>
        <h1 className="mx-[15.4%] font-semibold text-3xl mt-4 text-center">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && articles.map((article) => {
          return (
              <NewsItem
                key={article.title}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
                author={article.author?article.author:"unknown"}
                date={article.publishedAt}
                source={article.source.name}
              />
          );
        })}
        <div className="mx-[15%] flex justify-between my-5 font-semibold">
          <button
            disabled={this.state.page <= 1}
            className="bg-gray-800 text-white border-2 rounded-lg p-2 disabled:bg-gray-500"
            onClick={this.handlePreviousButton}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="bg-gray-800 text-white border-2 rounded-lg p-2 disabled:bg-gray-500"
            onClick={this.handleNextButton}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
