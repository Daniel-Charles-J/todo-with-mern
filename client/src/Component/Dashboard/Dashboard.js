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
                 <div>
                    <input placeholder="Add a new task" type="text"></input>
                    <button>+</button>
                 </div>
               </div>
               <hr/>

               <div className="task-container">
                  <div className="bending">
                    <input type="checkbox"></input>
                    <h4>Buy Water</h4>
                  </div>
                  <hr/>
                  <div className="completed">
                    <input type="checkbox"></input>
                    <h4>Buy headphone</h4>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Dashboard;