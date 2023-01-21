import "./Dashboard.css";
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
               <hr/>

               <div className="task-container">
                  <div className="all-task">
                    <div className="bending tasks">
                       <input type="checkbox"></input>
                        <h4>Buy Water</h4>
                    </div>
                    <div className="bending tasks">
                       <input type="checkbox"></input>
                        <h4>Do cycle</h4>
                    </div>
                    <div className="bending tasks">
                       <input type="checkbox"></input>
                        <h4>Buy car</h4>
                    </div>
                  </div>
                  <hr/>
                  <div className="all-task">
                    <div className="completed tasks">
                      <input type="checkbox"></input>
                      <h4>Buy headphone</h4>
                    </div>
                    <div className="completed tasks">
                      <input type="checkbox"></input>
                      <h4>Buy headphone</h4>
                    </div>
                    <div className="completed tasks">
                      <input type="checkbox"></input>
                      <h4>Buy headphone</h4>
                    </div>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Dashboard;