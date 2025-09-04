import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchBlogPosts = async () => {
    setLoading(true);
    try {
      let url = `${baseUrl}?page=${pageCount}`;
      toast.success("Fetching Data...");
      const response = await axios.get(url);

      //
      setPageCount(response.data.page);
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      setPageCount(1);
      setPosts([]);
      setTotalPages(null);
      toast.error("Error while fetching data...!");
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
