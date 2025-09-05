import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import "./BlogPage.css";

const BlogPage = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await axios.get(url);
      setBlog(res.data.blog);
      console.log(res.data.blog);
      setRelatedBlogs(res.data.relatedBlogs);
    } catch (error) {
      toast.error("Error ocuured while fetching blogs");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="blogpage-container">
      <Header />
      <div>
        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>

        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <Card post={blog} />
            <h2 className="relatedBlogs">Related Blogs</h2>
            {relatedBlogs.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div style={{ color: "red" }}>No Blog Found...!</div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
