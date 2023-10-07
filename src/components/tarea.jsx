import React from "react";
import "../styles/tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({ change, task, deletee }) {

    return(
        <div> {task?.map((element) => {
            return (
                <div   className={element.complete ? "task-container complete" : "task-container"} >
                    <div onClick={()=>{change(element.id)}} className="task-text">  
                        
                            {element.text}
                        
                    </div>
                    <div className="task-icon" >
                    <AiOutlineCloseCircle className="task-icon " onClick={()=> deletee(element.id)} ></AiOutlineCloseCircle>
                    </div>
                </div>
            )
          })}
        </div>
     
          
    )
}
export default Tarea;