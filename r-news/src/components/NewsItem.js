import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className=" bg-danger  badge rounded-pill">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://c.ndtvimg.com/2023-09/40cmfqso_google-generic_625x300_04_September_23.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
