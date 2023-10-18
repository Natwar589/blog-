import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const Appcontext = createContext();

export default function AppcontextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPost] = useState([]);
  const [totalPage, setTotalPage] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPost(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPost([]);
      setTotalPage(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPost,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
  };

  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}
