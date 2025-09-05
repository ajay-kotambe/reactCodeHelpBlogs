import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import "./TagPage.css";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="tagPage-container">
      <Header />
      <div className="heading-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>
        <h2>
          Blogs Tagged{" "}
          <span style={{ textDecoration: "underline", color: "#0000EE" }}>
            #{tag}
          </span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
