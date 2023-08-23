import { useState } from "react";
import Banner from "./components/Banner";
import QueryInput from "./components/QueryInput";
import DbSelect from "./components/DbSelect";

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
    <main className="bg-gradient-to-b from-violet-400/40 via-transparent ">
{/*       <img src={sqlServer} className={styles.icon} alt="Generate" />
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
      <pre>{sqlQuery}</pre> */}
      <section className="py-40 space-y-8">
        <div>

        <Banner />
        </div>
      <div>
        <DbSelect/>
      </div>
        <div className="flex justify-center">
          <QueryInput />
        </div>
        
      </section>
    </main>
  );
}
export default App;