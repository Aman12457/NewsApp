import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${props.category} - R-News`;

  const fetchMoreData = async () => {
    // this.setState({
    //   page: page + 1,
    // });

    // console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=bb535ef034224a6b96f33c67fd4fe36d&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  const updateNews = async () => {
    // console.log("cdm");
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bb535ef034224a6b96f33c67fd4fe36d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // const componentDidMount = async () => {
  //   updateNews();
  // };
  // handlePrevClick = async () => {
  //   this.setState({
  //     page: page - 1,
  //   });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   this.setState({
  //     page: page + 1,
  //   });
  //   this.updateNews();
  // };

  console.log("render");
  return (
    <>
      <h1 className="text-center " style={{ margin: "35px 0px" }}>
        R-news - Top {props.category} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "General",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
