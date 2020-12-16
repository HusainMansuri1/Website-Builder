import DashboardAdd from './DashboardComponents/DashboardAdd/DashboardAdd';
import DashBoardFormatting from './DashboardComponents/DashBoardFormatting/DashBoardFormatting';
import './Dashboard.css';

const Dashboard = (props) => {
  return (  
    <div className="dashboard-wrap">
      <DashboardAdd pushedLayoutClass_2={props.pushedLayoutClass_1}/>
      <DashBoardFormatting pushedLayoutClass_2={props.pushedLayoutClass_1}/>
    </div>
  );
}

export default Dashboard;