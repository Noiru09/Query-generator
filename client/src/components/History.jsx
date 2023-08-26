import React, { useEffect, useState } from "react";
import sampleHistory from "../utils/sampleHistory";

const History = () => {
  const [selectedDb, setSelectedDb] = useState("MongoDB");
  const [historyData, setHistoryData] = useState(sampleHistory);
  //setting the selected db
  const handleDbChange = (event) => {
    setSelectedDb(event.target.value);
  };

  const getHistoryData = async (selectedDb) => {
    console.log(selectedDb);
    const response = await fetch(`http://localhost:3005/history/${selectedDb}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    console.log(data)
    setHistoryData(data);
    return data;
  };

  useEffect(() => {
    getHistoryData(selectedDb);
  }, [selectedDb]);

  return (
    <div className="flex md:flex-row flex-col-reverse md:space-x-2">
      {/* for displaying previous queries */}
      <div>
        <div
          className="bg-indigo-100 p-4 rounded-lg max-h-[500px]
        overflow-y-scroll scrollbar-thumb-cyan-100 scrollbar-thin
        scrollbar-track-cyan-200"
        >
          {historyData?.length === 0 ? (
            <p className="text-center text-lg font-medium">
              No history to show 😢
            </p>
          ) : (
          historyData?.map((item, index) => {
            return (
              <div className="flex space-x-2" key={index}>
                <h1 className="text-md font-medium">{index+1}.</h1>
                <div className="space-y-1 mb-4">
                  <p className="text-md font-medium">{item.queryDesc}</p>
                  <p>
                    <span className="font-medium text-red-600">Result:</span>{" "}
                    {item.result}
                  </p>
                </div>
              </div>
            );
          })
          )}
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
