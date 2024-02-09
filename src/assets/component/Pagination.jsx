/* {
  "https://api.publicapis.org/entries"
API: "AdoptAPet",
Description: "Resource to help get pets adopted",
Auth: "apiKey",
HTTPS: true,
Cors: "yes",
Link: "https://www.adoptapet.com/public/apis/pet_list.html",
Category: "Animals"

logic for pagination 
we want to display 4 content per page so  {finding number of pages is 1st task}
after that we have to fins startindex and end index for stating and ending from data {using slice we will cut the data on specific logic}
starting index initialy be 0 and endindex is 4 initaily and we have to change this two value dyanimacally on next and previous click 

let assume currentpage is 1
so start index will be currentpage-1  { reason insitally we want start index as 0 } * 4
endindex will be=currentpage*4

then one every click we use slice(start index ,endindex) and display the data 
on next click currentpage++  
on prev clikc currentpage--

},*/



import React from "react";
import { useEffect, useState } from "react";
import Loading  from "./Loading";

function Pagination() {
  const [blog, setBlog] = useState([]);
  const [currentpage,setCurrentPage]=useState(1)   //intisal current page is 1
  const pagesize=4

  


  useEffect(() => { 
    cachedata=localStorage.getItem(JSON.parse("blogresponse"))            // rendering this when cureent page changes and returning only that musch data 
    if(cachedata){
         setBlog(cachedata.entries)
    }
    fetchdata();
  }, [currentpage]);

  async function fetchdata() {
    try {
    
      let response = await fetch("https://api.publicapis.org/entries");
      let data = await response.json();
      const totalpage= Math.ceil(blog.length / pagesize);
      console.log(totalpage,"totalpage")
      localStorage.setItem("blogresponse",JSON.stringify(data))
      let start=(currentpage-1) * pagesize
      let end=start+pagesize
     let requirddata=data.entries.slice(start,end)
     setBlog(requirddata)
    //  setBlog(data.entries);
      console.log( requirddata);
    } catch (ex) {
      console.log(ex,"error");
    }
  }

  function handlePre() {
    // if (currentpage > 1) {
    //   setCurrentPage((prevPage) => prevPage - 1);
    // }
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleNext() {
    // if (currentpage < totalpage) {
    //   setCurrentPage((prevPage) => prevPage + 1);
    // }
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <>
    <h1>Blog Data </h1>
    <div> {
     blog.length!=0?<div>
     {blog.map((a) => {
       return (
         <div  style={
           {
             display:"flex",
             flexDirection:" column",
             padding:"10px",
             margin:"1px",
             background:"teal",
             color:"white",
             fontFamily:"Roboto,Arial, sansSerif",
           }
         }>
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
       );
     })}
   </div>:<Loading/>
    }</div>
     <button onClick={handlePre} disabled={currentpage===1}>Prev</button>
    <button onClick={handleNext} >Next</button>
   
 </>
    
  );
}

export default Pagination;
