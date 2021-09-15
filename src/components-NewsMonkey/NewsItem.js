import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="card" style={{ 'margin': '2rem 0', 'height': '30rem' }}>
        <img style={{ 'height': '15rem' }}
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6JPHK1VkhnXyF-JblYmBWNQqOsJ1p9AL1JmjnQABCNV3g3Vbn3ILskTCCti96pggJfc&usqp=CAU"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}.....</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Anynomous"} on {date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
