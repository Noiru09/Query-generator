import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { PiFileSqlBold } from "react-icons/pi";
import { SiMariadb } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";
import { useDb } from "../Lib/DBSelectContext";

const DbSelect = () => {
  //updating the db context
  const { selectedDb, setDb } = useDb();
  //setting the db to selected db
  const handleDbSelect = (db) => {
    setDb(db);
  };

  return (
    <div className="flex space-x-5 justify-center">
      <button
        className={`dbButton ${selectedDb === "MongoDB" ? "selected" : ""}`}
        onClick={() => handleDbSelect("MongoDB")}
      >
        <BiLogoMongodb size={40} color="#3bad11" />
        <h6>MongoDB</h6>
      </button>
      <button
        className={`dbButton ${selectedDb === "SQL" ? "selected" : ""}`}
        onClick={() => handleDbSelect("SQL")}
      >
        <PiFileSqlBold size={40} color="#000000" />
        <h6>SQL</h6>
      </button>
      <button
        className={`dbButton ${selectedDb === "MariaDB" ? "selected" : ""}`}
        onClick={() => handleDbSelect("MariaDB")}
      >
        <SiMariadb size={40} color="#000000" />
        <h6>MariaDB</h6>
      </button>
      <button
        className={`dbButton ${selectedDb === "PLSQL" ? "selected" : ""}`}
        onClick={() => handleDbSelect("PLSQL")}
      >
        <BsFillDatabaseFill size={40} color="#000000" />
        <h6>PLSQL</h6>
      </button>
    </div>
  );
};

export default DbSelect;
