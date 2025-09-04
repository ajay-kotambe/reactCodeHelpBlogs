import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts, fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>Posts Not Found..!</div>
      ) : (
        posts.map((post) => <Card post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Blogs;
