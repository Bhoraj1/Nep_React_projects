import { useState } from "react";
import './App.css';

function App() {
  const [userinput, setUserInput] = useState("");
  const [todo, setTodos] = useState([]);

  const addTodo = ()=>{
   setTodos([...todo, userinput]);
   setUserInput(""); //Resettig input field vlaue
  }
  return (
    <div>
      <h1 className="font-semibold text-2xl">List of Your Todo App</h1>
      <input className=" border border-gray-500 rounded-lg pl-6 p-1"
      type="text" placeholder="Enter your Activities" required value={userinput}
      onChange={(event) => setUserInput(event.target.value)}
      />
      <button className="p-2 m-3 w-16 border bg-cyan-400 rounded-xl"
      onClick={addTodo}>Add</button>
      <ul>
        {
          todo.map((values, index) => (
            <li key={index} className="flex justify-center">
              <span className="inline-block w-10 text-center">{index + 1}.</span>
              {values}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
