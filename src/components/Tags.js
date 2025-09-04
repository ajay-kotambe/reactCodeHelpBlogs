import React from "react";
import "./Tags.css"

const Tags = (tag) => {
  return <span className="tags">#{tag.tag} </span>;
};

export default Tags;
