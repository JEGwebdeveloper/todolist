import './App.css';
import Tarea from './components/tarea';
import Formulario from './components/formulario';
import { useState } from "react";

function App() {

    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    const add = (newtask) => {
      if(newtask.text.trim()){
        const updatedtasks = [newtask, ...task]
        setTask(updatedtasks)
        setInput("")
      }
      
  }



  const change = (id) => {
    const updatedtasks = task.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete; 
      }
     
      return task;
    });
    setTask(updatedtasks);
    
  };

    const deletee = (id) =>{
      
      const tareasfilt = task.filter( (element) => element.id !== id)
      
      setTask(tareasfilt)
    }

  return (
    <div className="apptask">
      <div className='principaltask'>
        <Formulario add={add} input={input} setInput={setInput}></Formulario>
        <h1>MY TASKS</h1>
        <Tarea change={change} task={task} deletee={deletee}></Tarea>
        
      </div>
    
    
    </div>
    
  );
}

export default App;
