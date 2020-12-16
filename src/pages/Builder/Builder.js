import Dashboard from '../../components/Dashboard/Dashboard';
import Preview from '../../components/Preview/Preview';
import './Builder.css';

const Builder = (props) => {
  return ( 
    <div className="builder-page">
      <div className="builder-page-container clearfix">
        <div className="dashboard-outer-wrap">
          <Dashboard 
            key="dashboard"
            pushedLayoutClass_1={props.pushedLayoutClass}
          />      
        </div>
        <div className="preview-outer-wrap">
          <Preview 
            key="preview"
            pushedLayoutClass_1={props.pushedLayoutClass}
          />
        </div>
      </div>
    </div>

  );
}
 
export default Builder;