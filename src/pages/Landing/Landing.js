import './Landing.css';

const Landing = (props) => {
  return (
    <section className="landing-page">
      <div className="container">
        <div className="abs-center content">
          <h1 className="title">{props.title}</h1>
          <p className="subtitle">follow simple steps for generating your website</p>
          <button onClick={() => props.pageChange('builder')} className="start-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Landing;