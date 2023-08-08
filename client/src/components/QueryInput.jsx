import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const QueryInput = () => {
  return (
    <form className="rounded-lg p-2 md:p-4
     bg-indigo-100 outline-indigo-300 flex">
      <input
        type="text"
        placeholder="Describe your query"
        className="placeholder-slate-700 bg-transparent outline-none
        placeholder"
      />
      <button
      className=""
      type="submit"
      >
        <PaperAirplaneIcon 
        className="w-6 h-6 text-indigo-500 -rotate-45 hover:rotate-0
        transition-transform duration-300 ease-in-out"
        />
      </button>
    </form>
  );
};

export default QueryInput;
