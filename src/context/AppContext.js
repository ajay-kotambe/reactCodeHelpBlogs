import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";

import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(3);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, [pageCount]);

  const fetchBlogPosts = async () => {
    setLoading(true);
    try {
      // fetching data...

      let url = `${baseUrl}?pages=${pageCount}`;
      console.log("Printing URL...!");
      console.log(url);
      const response = await axios.get(url);

      console.log(response.data);

      //   setting data..
      setPageCount(response.data.page);
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      // setting initial values...
      setPageCount(1);
      setPosts([]);
      setTotalPages(null);

      //   toast messages..
      toast.error("Error while fetching data...!");
      //   toast.error(error);
    }
    setLoading(false);
  };

  function handlePageChange(page) {
    setPageCount(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    pageCount,
    setPageCount,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
