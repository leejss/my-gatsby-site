import React from "react";

const ScrollButton: React.FC = () => {
  return (
    <button
      style={{ background: "transparent", border: "none", outline: "none" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollButton;
