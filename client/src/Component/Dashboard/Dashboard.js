import "./Dashboard.css";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import{BiEdit} from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"

const Dashboard = () => {
    return(
        <div className="Dashboard">
            <div className="main-container">

               <div className="title-card">
                  <div><h1>ToDo</h1></div>
                  <div className="date-region">
                    <div className="date">
                      <h3>Today</h3>
                      <p>21 jan 2023</p>
                    </div>
                    <p>picture</p>
                  </div>
               </div>
               <hr/>

               <div className="input-container">
                 <div className="inputBox">
                    <input placeholder="Add a new task" type="text"></input>
                    <button>+</button>
                 </div>
               </div>
               

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
        </div>
    )
}

export default Dashboard;