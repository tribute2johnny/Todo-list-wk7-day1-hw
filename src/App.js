import React, {useState} from 'react';
import './App.css';


function App () {
  
  const [chores, setChores] = useState([
    {name: "Do the Dishes", priority: "High"},
    {name: "Wash the Car", priority: "Low"},
    {name: "Cut the Grass", priority: "High"},
  ])

  const [newChore, setNewChore] = useState("");
  const [newPriority, setNewPriority] = useState("")

  const choreNodes = chores.map((chore, index) => {
    return <li key={index}
    className={chore.priority === "High" ? "priorityHigh" : "priorityLow"}>
      <span>{chore.name}</span>
      <span >{chore.priority}</span>
      
    </li>
  })

  const handleChoreInput = (event) => {
      setNewChore(event.target.value);
  }

  const handlePriorityInput = (event) => {
      setNewPriority(event.target.value);
  }

  const saveNewChore = (event) => {
    event.preventDefault();
    const copyChores = [...chores];
    copyChores.push({name: newChore, priority: newPriority})
    setChores(copyChores);
    setNewChore("");
    }


  return (
    <div className="App">
      <h1> To-Do's</h1>
      
      <ul>
        {choreNodes}
      </ul>

      <form onSubmit={saveNewChore}>
        <label htmlFor="new-chore">Add a new chore: </label>
        <input id="new-chore" type="text" value={newChore} onChange={handleChoreInput}/>
        <>
        <input type="radio" value="High" name="priority" onChange={handlePriorityInput}/> High
        <input type="radio" value="Low" name="priority" onChange={handlePriorityInput}/> Low
        </>
        <input type="submit" value="Save New Chore" />
      </form>


    </div>
  )
}






export default App;
