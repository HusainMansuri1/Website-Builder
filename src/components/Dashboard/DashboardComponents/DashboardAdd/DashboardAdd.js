import './DashboardAdd.css';

// const AddButtonElem = (props) => <button className={props.decideClass(props.current.id)} >{props.current.id}</button>

const DashboardAdd = (props) => {
  
  const btnClasses = (id) => {
    let classes = "dashboard-common-btn ";
    props.pushedLayoutClass_2.state.sectionDetail.visibility.map((cur) => (cur.show && cur.id === id)  ? classes += ' added' : classes );
    return classes;
  }

  return (
    <div className="dashboard-add-wrap dashboard-component">
      <h2 className="dashboard-sect-head">Sections</h2>
      <div className="add-section-btn-wrap">
      {props.pushedLayoutClass_2.state.sectionDetail.visibility.map(curSection => 
        // <AddButtonElem key={`add-${curSection.id}-btn`} current={curSection} decideClass={btnClasses}/>
        <button onClick={() => props.pushedLayoutClass_2.sectionToggleHandler(curSection.id)} key={`add-${curSection.id}-btn`} className={btnClasses(curSection.id)} >{curSection.id}</button>
      )}
      </div>  
    </div>
  );
}

export default DashboardAdd;