import React from "react";

const Loading = () => {
  return (
    <div className="items-center">
      <span className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading...
      </span>
    </div>
  );
};

export default Loading;