import React from "react";
import "../styles/formulario.css"
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function Form ({input, setInput, add}){

    

    const handleChange = (event) =>{
        setInput(
            event.target.value
        )
    };

    const newtask = {
        id: uuidv4(),
        key: uuidv4(),
        text: input,
        complete: false
    }

    return (
        <div    className="task-form">
            <input className="task-input" 
            type="text"
            placeholder="Write your new task"
            value={input}
            onChange={handleChange}
            name="task">

            </input >
            <button className="task-btn" onClick={() =>add(newtask)}>
            Add new Task</button>

        </div>
    )

}

export default Form;