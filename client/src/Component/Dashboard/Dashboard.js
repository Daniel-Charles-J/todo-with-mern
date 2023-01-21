import "./Dashboard.css";
import TaskList from "../TaskList/TaskList";


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
               <TaskList/>
            </div>
        </div>
    )
}

export default Dashboard;