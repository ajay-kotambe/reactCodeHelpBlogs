import React from "react";
import Tags from "./Tags";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card-container">
      <div className="card">
        <NavLink
          to={`/blog/${post.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <h4 className="title">{post.title}</h4>
        </NavLink>
        <span className="author-n-category">
          By <i className="author">{post.author}</i> on{" "}
          <NavLink
            to={`/categories/${post.category.replaceAll(" ", "-")}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <span className="category">{post.category}</span>
          </NavLink>
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
