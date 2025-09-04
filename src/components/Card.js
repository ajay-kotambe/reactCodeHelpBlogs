import React from "react";
import Tags from "./Tags";
import "./Card.css";

const Card = ({ post }) => {
  return (
    <div>
      <h4 className="title">{post.title}</h4>
      <div>
        By <span>{post.author}</span> on <span>{post.category}</span>
      </div>
      <div>
        Posted on <span>{post.date}</span>
      </div>
      <p>{post.content}</p>
      <p>
        {post.tags.map((tag, index) => (
          <Tags tag={tag} key={index} />
        ))}
      </p>
    </div>
  );
};

export default Card;
