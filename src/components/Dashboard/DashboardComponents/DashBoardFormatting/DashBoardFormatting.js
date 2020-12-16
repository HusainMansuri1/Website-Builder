import './DashBoardFormatting.css';

const DashBoardFormatting = (props) => {
  const btnClasses = (id, formatElemName) => {
    let classes = "dashboard-common-btn ";
    props.pushedLayoutClass_2.state.formatting[formatElemName].map((cur) => (cur.active && cur.id === id)  ? classes += ' added' : classes );
    return classes;
  }

  return ( 
    <div className="dashboard-formatting-wrap dashboard-component">
      <h2 className="dashboard-sect-head">Formatting</h2>
      <div className="color-formatting-wrap dashboard-sub-component">
        <h3 className="dashboard-sect-sub-head">Color</h3>
        <div className="format-color-btn-wrap format-btn-wrap clearfix">
          {props.pushedLayoutClass_2.state.formatting.color.map(cur => 
            <button onClick={() => props.pushedLayoutClass_2.formatChangeHandler(cur.id, 'color')} className={btnClasses(cur.id,'color')} key={cur.id}>{cur.id}</button>
          )}
        </div>
      </div>
      <div className="font-formatting-wrap dashboard-sub-component">
        <h3 className="dashboard-sect-sub-head">Font</h3>
        <div className="format-font-btn-wrap format-btn-wrap clearfix">
          {props.pushedLayoutClass_2.state.formatting.font.map(cur => 
            <button onClick={() => props.pushedLayoutClass_2.formatChangeHandler(cur.id, 'font')} className={btnClasses(cur.id,'font')} key={cur.id}>{cur.id}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoardFormatting;