import React from 'react'
import { useState ,useEffect} from 'react'
import Pagination1 from './Pagination1'
import InfiniteScroll from './Infintescroll'
import PaginationButton from './PaginationButton'
import FAQ from './FAQ'


function NavBar() {
    const appContainerStyle = {
        position: "relative", 
      };
      const buttonContainerStyle = {
        position: "fixed",
        top: "10px",
        width: "100%", 
        textAlign: "center",
        zIndex: 1000,
      };
      const containerStyle = {
        textAlign: "center",
        maxWidth: "600px",
        margin: "80px auto 20px",  
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f7f7f7",
      };

    const [activePagination, setActivePagination] = useState("");

    const handlePaginationClick = (paginationType) => {
      setActivePagination(paginationType);
    };
  return (
    <div style={appContainerStyle}>
      <div style={buttonContainerStyle}>
        <button onClick={() => handlePaginationClick("pagination1")}>
          Pagination with next and previous
        </button>
        <button onClick={() => handlePaginationClick("paginationButton")}>
          Pagination with dynamic button
        </button>
        <button onClick={() => handlePaginationClick("infiniteScroll")}>
          Infinite scroll
        </button>
        <button onClick={() => handlePaginationClick("Accordian")}>
            Accordian
        </button>
      </div>
      <div style={containerStyle}>
      {activePagination === "pagination1" && <Pagination1 />}
      {activePagination === "paginationButton" && <PaginationButton />}
      {activePagination === "infiniteScroll" && <InfiniteScroll />}
      { activePagination==="Accordian" && <FAQ/>}
      </div>
     
    </div>
  )
}

export default NavBar