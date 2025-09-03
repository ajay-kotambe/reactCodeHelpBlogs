import { createContext, useState } from "react";
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
      // fetching data...

      let url = `${baseUrl}?pages=${pageCount}`;
      const data = await axios.get(url);
      console.log(data);

      //   setting data..
      setPageCount(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      // setting initial values...
      setPageCount(1);
      setPosts([]);
      setTotalPages(null);

      //   toast messages..
      toast.error("Error while fetching data...!");
      toast.error(error);
    }
    setLoading(false);
  };

  function handlePageChange(page){
    setPageCount(page)
    fetchBlogPosts(page)
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
    handlePageChange
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
