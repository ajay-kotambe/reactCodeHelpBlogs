import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryPageComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPageComp;
