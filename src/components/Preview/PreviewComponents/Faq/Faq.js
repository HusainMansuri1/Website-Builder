import './Faq.css';

const Faq = (props) => {
  return ( 
    <section className="faq-preview preview-section">
      <div className="container">
        <div className="faq-inner-wrap">
          <h3 className="sect-head theme-font">{props.content.title.text}</h3>
          <ul className="faq-block clearfix">
            {props.content.list.map(cur => 
              <li key={cur.id}>
                <div className="title">{cur.title}</div>
                <div className="desc">{cur.subTitle}</div>
              </li>  
            )}
          </ul>
        </div>
      </div>
    </section>
   );
}
 
export default Faq;