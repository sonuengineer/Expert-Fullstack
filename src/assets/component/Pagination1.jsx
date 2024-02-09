import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Pagination1() {
  const [blog, setBlog] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const pagesize = 4;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem("blogData");

    if (cachedData) {
      setBlog(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetchInitialData();
    }
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const data = await response.json();
      setBlog(data.entries);
      localStorage.setItem("blogData", JSON.stringify(data.entries));
    } catch (ex) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const paginateData = () => {
    const start = (currentpage - 1) * pagesize;
    const end = start + pagesize;
    return blog.slice(start, end);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    const totalPages = Math.ceil(blog.length / pagesize);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <h1>Blog Data </h1>
      {loading && <Loading />}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div >
          {paginateData().map((a) => (
            <div style={{ display:"flex",
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
      )}
      <button onClick={handlePrev} disabled={currentpage === 1}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Pagination1;