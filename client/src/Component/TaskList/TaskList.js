import{BiEdit} from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import "../Dashboard/Dashboard.css"
import "./TaskList.css"

const TaskList = () =>{
    let completed = ["Studying"];
    let wishList = ["Doing Cycle", "Proper Diet",]
    return(
        <div>
            <div className="task-container">
                  <div className="all-task">

                  {wishList.map((x) => {
                        return(
                            <div className="task-container-2">
                              <div className="tasks">
                                <input type="checkbox"></input>
                                <h4>{x}</h4>
                            </div>
                            <div className="icons">
                              <BiEdit />
                              <RiDeleteBin6Line/>  
                           </div>              
                            </div>
                        )
                    })}
                  </div>

                  <hr/>

                  <div className="all-task">

                    {completed.map((x) => {
                        return(
                            <div className="task-container-2">
                              <div className="tasks">
                                <input type="checkbox"></input>
                                <h4>{x}</h4>
                            </div>
                            <div className="icons">
                              <BiEdit />
                              <RiDeleteBin6Line/>  
                           </div>              
                            </div>
                        )
                    })}
                  </div>
               </div>
        </div>
    )
}

export default TaskList;