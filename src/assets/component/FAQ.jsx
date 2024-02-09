import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What are the system requirements for running this application?",
      answer:
        "The system requirements for running this application are 4GB RAM, Intel Core i5 processor, and Windows 10 operating system.",
    },
    {
      id: 2,
      question: "How can I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions provided to reset your password.",
    },
    {
      id: 3,
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support by sending an email to support@example.com or by calling our toll-free number 1-800-123-4567.",
    },
  ];

  const toggleVisibility = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ display: "block", paddingTop: "10px" }}>
      {faqData.map((item, index) => (
        <div key={item.id} style={{ paddingTop: "10px" }}>
          <button onClick={() => toggleVisibility(index)}>{item.question}</button>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;


// import React from "react";
// import { useState, useEffect } from "react";
// function FAQ() {
//   const [show, setShow] = useState(false);
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const data = [
//     {
//       id: 1,
//       title: "u have any question1",
//     },
//     {
//       id: 2,
//       title: "u have any question2",
//     },
//     {
//       id: 3,
//       title: "u have any question3",
//     },
//   ];

//   function toggal() {
//     setShow(true);
//     setShow1(false)
//     setShow2(false)
//   }
//   function toggal1() {
//     setShow(false);
//     setShow1(true)
//     setShow2(false)
//   }
//   function toggal2() {
//     setShow(false);
//     setShow1(false)
//     setShow2(true)
//   }
//   return (
//     <div style={{ display: "block" ,paddingTop:"10px"}}>
//       <div  style={{ paddingTop:"10px"}}>
//         {" "}
//         <button onClick={toggal}>you have any question1</button>
//         {show && <p>{data[0].title}</p>}
//       </div>
//       <div style={{ paddingTop:"10px"}}>
//         {" "}
//         <button onClick={toggal1}>you have any question2</button>
//         {show1 && <p>{data[1].title}</p>}
//       </div>
//       <div  style={{ paddingTop:"10px"}}>
//         <button onClick={toggal2}>you have any question3</button>
//         {show2 && <p>{data[2].title}</p>}
//       </div>
//     </div>
//   );
// }

// export default FAQ;
