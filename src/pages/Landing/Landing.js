import './Landing.css';
import {statContext} from '../../components/Layout/Layout';

const Landing = (props) => {
  return (
    <statContext.Consumer>
      {
        passedState => 
        <section className="landing-page">
          <div className="container">
            <div className="abs-center content">
              <h1 className="title">{passedState.projectDetails.name}</h1>
              <p className="subtitle">{passedState.projectDetails.desc}</p>
              <button onClick={() => props.pageChange('builder')} className="start-btn">{passedState.projectDetails.cta}</button>
            </div>
          </div>
        </section>
      }
    </statContext.Consumer>
  );
}

export default Landing;