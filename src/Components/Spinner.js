import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt="..." className="w-10 mx-auto my-4" />
    </div>
  );
};

export default Spinner