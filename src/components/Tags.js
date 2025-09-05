import React from "react";
import "./Tags.css";
import { NavLink } from "react-router-dom";

const Tags = (tag) => {
  return (
    <span>
      <NavLink
        to={`/tags/${tag.tag.replaceAll(" ", "-")}`}
        className="tags"
        style={{ textDecoration: "none" }}
      >
        #{tag.tag}{" "}
      </NavLink>
    </span>
  );
};

export default Tags;
