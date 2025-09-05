import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import "./CategoryPage.css";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="categoryPage-container">
      <Header />
      <div className="heading-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>
        <h2 className="blogsOnHeading">
          Blogs on <span>{category}</span>
        </h2>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
