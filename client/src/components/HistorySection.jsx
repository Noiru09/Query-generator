import React from "react";
import History from "./History";

const HistorySection = () => {
  return (
    <div>
      <h1 className="text-3xl flex justify-center font-extrabold">
        Query History
      </h1>
      <div className="flex justify-center p-10">
        <History />
      </div>
    </div>
  );
};

export default HistorySection;
