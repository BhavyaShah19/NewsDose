import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatenews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);



  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apikey}&page=${page + 1
      }&pagesize=${props.pagesize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center" style={{ marginTop: '5rem' }}>{`NewsDose-${cap(
          props.category
        )} Top Headlines`}</h2></div>
      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 20) : ""}
                      description={
                        e.description ? e.description.slice(0, 50) : ""
                      }
                      imageUrl={e.urlToImage}
                      author={e.author}
                      date={e.publishedAt}
                      newsUrl={e.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

// handleprevclick = async () => {
//   let url = `https://newsapi.org/v2/top-headlines?country=${
//     props.country
//   }&category=${
//     props.category
//   }&apiKey=ff2e1acaf9a3408a8199dff230806a76&page=${
//     this.state.page - 1
//   }&pagesize=${props.pagesize}`;
//   let data = await fetch(url);
//   let parseddata = await data.json();
//   console.log(parseddata);
//   this.setState({
//     page: this.state.page - 1,
//     articless: parseddata.articless,
//   });
// };

// handlenextclick = async () => {
//   if (
//     this.state.page + 1 >
//     Math.ceil(totalResults / props.pagesize)
//   ) {
//   } else {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=ff2e1acaf9a3408a8199dff230806a76&page=${
//       this.state.page + 1
//     }&pagesize=${props.pagesize}`;
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     console.log(parseddata);
//     this.setState({
//       page: this.state.page + 1,
//       articless: parseddata.articless,
//     });
//   }
// };

/* <div className="container d-flex justify-content-between">
        <button
          disabled={this.state.page <= 1}
          onClick={this.handleprevclick}
          type="button"
          className="btn btn-dark"
        >
          &larr; Previous
        </button>
        <button
          onClick={this.handlenextclick}
          type="button"
          className="btn btn-dark"
        >
          Next &rarr;
        </button>
      </div> */
