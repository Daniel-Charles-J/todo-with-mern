import{BiEdit} from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import "../Dashboard/Dashboard.css"

const TaskList = () =>{
    return(
        <div>
            <div className="task-container">
                  <div className="all-task">

                  <div className="task-container-2">
                        <div className="completed tasks">
                          <input type="checkbox"></input>
                          <h4>Buy headphone</h4>
                        </div>
                        <div className="icons">
                          <BiEdit />
                          <RiDeleteBin6Line/>  
                       </div>              
                    </div>

                  </div>

                  <hr/>

                  <div className="all-task">

                  <div className="task-container-2">
                        <div className="completed tasks">
                          <input type="checkbox"></input>
                          <h4>Buy headphone</h4>
                        </div>
                        <div className="icons">
                          <BiEdit />
                          <RiDeleteBin6Line/>  
                       </div>              
                    </div>

                   
                    
                    <div className="task-container-2">
                        <div className="completed tasks">
                          <input type="checkbox"></input>
                          <h4>Buy headphone</h4>
                        </div>
                        <div className="icons">
                          <BiEdit />
                          <RiDeleteBin6Line/>  
                       </div>              
                    </div>

                  </div>
               </div>
        </div>
    )
}

export default TaskList;