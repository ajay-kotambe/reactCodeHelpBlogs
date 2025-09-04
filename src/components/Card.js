import React from "react";
import Tags from "./Tags";
import "./Card.css";

const Card = ({ post }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h4 className="title">{post.title}</h4>
        <span className="author-n-category">
          By <i className="author">{post.author}</i> on{" "}
          <span className="category">{post.category}</span>
        </span>
        <div className="date">
          Posted On <span>{post.date}</span>
        </div>
        <p>{post.content}</p>
        <p>
          {post.tags.map((tag, index) => (
            <Tags tag={tag} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
