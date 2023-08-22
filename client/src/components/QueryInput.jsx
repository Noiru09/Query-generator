import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const QueryInput = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const submitRes = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setSqlQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });

    const data = await response.json();
    return data.sqlQuery.trim();
  };

  return (
    <div className="w-[90%] md:w-[60%] mx-auto">
      <form
        className="rounded-lg p-2 md:p-4
     bg-indigo-100 outline-indigo-300 flex justify-between"
        onSubmit={submitRes}
      >
        <input
          type="text"
          placeholder="Describe your query"
          className="placeholder-slate-700 bg-transparent outline-none
        placeholder w-full"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button className="" type="submit">
          <PaperAirplaneIcon
            className="w-6 h-6 text-indigo-500 -rotate-45 hover:rotate-0
        transition-transform duration-300 ease-in-out"
          />
        </button>
      </form>

      <div className="mt-4 space-y-2 ">
        <h1 className="text-sm text-gray-900 font-bold">Generated Query :</h1>
        <p className="bg-indigo-100 p-4 rounded-lg">{sqlQuery}</p>
      </div>
    </div>
  );
};

export default QueryInput;
