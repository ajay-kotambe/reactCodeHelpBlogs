import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts, fetchBlogPosts, pageCount } = useContext(AppContext);
  

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "red" }}>
          404 Posts Not Found..!
        </h2>
      ) : (
        posts.map((post) => <Card post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Blogs;
