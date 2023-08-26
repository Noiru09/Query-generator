import React, { useState } from "react";
import sampleHistory from "../utils/sampleHistory";

const History = () => {
  const [selectedDb, setSelectedDb] = useState("MongoDB");
  //setting the selected db
  const handleDbChange = (event) => {
    setSelectedDb(event.target.value);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse md:space-x-2">
      {/* for displaying previous queries */}
      <div>
        <div
          className="bg-indigo-100 p-4 rounded-lg h-[500px]
        overflow-y-scroll scrollbar-thumb-cyan-100 scrollbar-thin
        scrollbar-track-cyan-200"
        >
          {sampleHistory.map((item) => {
            return (
              <div className="flex space-x-2" key={item.slNo}>
                <h1 className="text-md font-medium">{item.slNo}.</h1>
                <div className="space-y-1 my-4">
                  <p className="text-md font-medium">{item.queryDescription}</p>
                  <p>
                    <span className="font-medium text-red-600">Result:</span>{" "}
                    {item.query}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* for selecting db */}
      <div>
        <select
          name="db"
          id="db"
          className="p-4 rounded-lg"
          value={selectedDb}
          onChange={handleDbChange}
        >
          <optgroup label="Choose Database">
            <option value="MongoDB">MongoDB</option>
            <option value="SQL">SQL</option>
            <option value="MariaDB">MariaDB</option>
            <option value="PLSQL">PL/SQL</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default History;
