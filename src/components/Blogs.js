import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts, fetchBlogPosts, pageCount } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line
  }, [pageCount]);

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
