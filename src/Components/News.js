import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfinitScroll from "react-infinite-scroll-component";
import newsImg from '../dummyNewsImage.webp'

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)  
  document.title = `${capitalizeFirstLetter(props.category)} | NewsMonkey`;

  const updateNews = async(pageno) => {
    props.setProgress(10);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageno}&pageSize=${props.pageSize}`
    )
      .then((response) => {
        props.setProgress(30);
        setLoading(true)
        return response.json();
      })
      .then((data) => {
        props.setProgress(70);
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
        props.setProgress(100);
      });
    }
    
    useEffect(()=>{
      updateNews(1);
    },[])

  const fetchNextUsers = () =>{
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    )
      .then((response) => {
        setLoading(true)
        return response.json();
      })
      .then((data) => {
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
        setLoading(false)
      });
      setPage(page+1)

  }


    return (
      <>
        <h1 className="mx-[15.4%] font-semibold text-3xl mt-16 text-center">
          Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}

        <InfinitScroll
          dataLength={articles.length}
          next={fetchNextUsers}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          {articles.map((article) => {
              return (
                <NewsItem
                  key={article.title}
                  title={article.title ? article.title : "unknown"}
                  description={article.description}
                  imageUrl={article.urlToImage ? article.urlToImage : newsImg}
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


News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News