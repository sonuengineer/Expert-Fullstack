import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function InfiniteScroll() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const data = await response.json();
      setBlog((prevBlog) => [...prevBlog, ...data.entries]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (ex) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;


    if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
      setLoading(true);
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const paginatedData = blog.slice(0, currentPage * pageSize);

  return (
    <>
      <h1>Blog Data </h1>
      <div>
        {paginatedData.map((a, index) => (
          <div  key={index} style={{ display:"flex",
            flexDirection:" column",
            padding:"10px",
            margin:"1px",
            background:"teal",
            color:"white",
            fontFamily:"Roboto,Arial, sansSerif",}}>
                      <ul >
             <li >{a.API}</li>
             <li>{a.Description}</li>
             <li>{a.Auth}</li>
             <li>{a.HTTPS}</li>
             <li>{a.Cors}</li>
             <li>{a.Category}</li>
             <li>
               {" "}
               <a href={a.Link}>Link</a>
             </li>
          
           </ul>
           </div>
        ))}
      </div>
      {loading && <Loading />}
      {error && <div>Error: {error}</div>}
    </>
  );
}

export default InfiniteScroll;
