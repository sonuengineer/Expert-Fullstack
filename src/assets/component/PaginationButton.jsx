import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function PaginationButton() {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    const start = (currentPage - 1) * pagesize;
    const end = start + pagesize;
    return blog.slice(start, end);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const totalPages = Math.ceil(blog.length / pagesize);
    const visiblePageCount = 4;

    // Calculate the range of visible page buttons
    const startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

    const buttons = [];

    // Render "<<" button
    if (startPage > 1) {
      buttons.push(
        <button key="<<+" onClick={() => handlePageClick(startPage - 1)}>
          {"<<"}
        </button>
      );
    }

    // Render page buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageClick(i)}>
          {i}
        </button>
      );
    }

    // Render ">>" button
    if (endPage < totalPages) {
      buttons.push(
        <button key=">>+" onClick={() => handlePageClick(endPage + 1)}>
          {">>"}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <h1>Blog Data </h1>
      {loading && <Loading />}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div>
          {paginateData().map((a, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                margin: "1px",
                background: "teal",
                color: "white",
                fontFamily: "Roboto, Arial, sansSerif",
              }}
            >
              <ul>
                <li>{a.API}</li>
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
      <div>
        {renderPageButtons()}
      </div>
    </>
  );
}

export default PaginationButton;
