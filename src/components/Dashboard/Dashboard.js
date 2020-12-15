import './Dashboard.css';
import Dashboard_Add from '../Dashboard_Add/Dashboard_Add';

const Dashboard = (props) => {
  return (  
    <div className="dashboard-wrap">
      <Dashboard_Add state_2={props.state_1} add_2 = {props.add_1}/>
    </div>
  );
}
 
export default Dashboard;