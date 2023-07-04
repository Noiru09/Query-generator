import styles from './index.module.css'
import sqlLogo from './assets/sql-Logo.png'
import {useState} from 'react'

function App() {
  const [queryDescription , setQueryDescription] = useState("")

  const onSubmit=(e) =>{
    e.preventDefault();
    console.log("Form submitted:",queryDescription)
  }
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt=""className={styles.icon}/>
      <h3>Generate SQL query with AI</h3>

    <form onSubmit={onSubmit}>
      <input 
      type="text"
      name="Query-Description"
      placeholder='Describe your query'
      onChange={(e)=>setQueryDescription(e.target.value)}
      />
      <input type="submit" value="Generate Query"/>
    </form>
    </main>
    )
}

export default App
