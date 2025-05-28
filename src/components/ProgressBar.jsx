// import React from "react";
// // import "./ProgressBar.css";

// const ProgressBar = ({ progress }) => {
//   return (
//     <>
//         <div className="progress-container">
//       <div className="progress-bar" style={{ width: `${progress}%` }}>
//       <span className="progress-label">{progress}%</span>
//       </div>
//     </div>
//     <span>Intermodal Shipping</span>

//     </>
//   );
// };

// export default ProgressBar;

import React from "react";
// import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <>
        <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>

      {/* Label moves according to progress */}
      <span
        className="progress-label"
        style={{
          left: `calc(${progress}% - 18px)`
        }}
      >
        {progress}%
      </span>
      <span className="progress-label">Intermodal Shipping</span>
    </div>

    
    </>
  );
};

export default ProgressBar;


