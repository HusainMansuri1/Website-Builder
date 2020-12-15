import './Dashboard_Add.css';


const ButtonElem = (props) => {
  return (
    <button key={props.current.id} className={props.decideClass(props.current.id)} onClick={() => props.add_3(props.current.id)}>{props.current.id}</button>
  )
}

const Dashboard_Add = (props) => {
  console.log(props.state_2);

  const btnClasses = (id) =>{
    let classes = "add-section-btn ";
    const visibility = props.state_2;

    visibility.map((cur) => {
      if(cur.show && cur.id === id) classes += ' added';
      return true;
    });

    return classes;
  }

  return (
    <div className="dashboard-add-wrap dashboard-component">
      <h2 className="dashboard-sect-head"><span className="text">Select</span> <span className="highlight">Sections</span></h2>
      <div className="add-section-btn-wrap">
      {props.state_2.map(curSection => {
        return (
          <ButtonElem current={curSection} decideClass={btnClasses} add_3 = {props.add_2}/>
        );
      })}
      </div>  
    </div>
  );
}
 
export default Dashboard_Add;