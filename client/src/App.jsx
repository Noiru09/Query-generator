import styles from "./styles.module.css";
import sqlServer from "./assets/data-searching.png";
import sqlicon from "./assets/sql-server.png";
import mongo from "./assets/Mongo-DB-Features.jpg";
import { useState } from "react";

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
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
    <main className={styles.main}>
      <img src={sqlServer} className={styles.icon} alt="Generate" />
      <img src={sqlicon} className={styles.sql} alt="SQL server" />
      <img src={mongo} className={styles.mon} alt="mongoDB server" />
      <h3>Generate SQL</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
      <pre>{sqlQuery}</pre>
    </main>
  );
}
export default App;