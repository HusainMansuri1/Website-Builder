import Dashboard from '../../components/Dashboard/Dashboard';
import Preview from '../../components/Preview/Preview';
import './Builder.css';

const Builder = (props) => {
  return ( 
    <div className="builder-page">
      <div className="builder-page-container clearfix">
        <div className="dashboard-outer-wrap">
          <Dashboard 
            state_1 = {props.state_0}
            add_1 = {props.add_0}
          />      
        </div>
        <div className="preview-outer-wrap">
          <Preview 
        
          />
        </div>
      </div>
    </div>

  );
}
 
export default Builder;