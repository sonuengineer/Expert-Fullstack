import { Component } from "react";
import React from "react";
import { ShimmerPostDetails } from "react-shimmer-effects";

// function Loading() {
//   return (
//     <div
//       style={{
//         height: "500px",
//         width: "1200px",
//         background: "linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%)",
//         backgroundSize: "300%",
//         backgroundPositionx: "40%",
//       }}
//     >
//     </div>
//   );
// }

class Loading extends Component {
  render() {
    return (
      <>
        <ShimmerPostDetails card cta variant="SIMPLE" />
        <ShimmerPostDetails card cta variant="EDITOR" />
      </>
    );
  }
}

export default Loading;
