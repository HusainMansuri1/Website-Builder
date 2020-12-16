import './Footer.css';

const Footer = (props) => {
  return ( 
    <footer className="footer-preview preview-section">
      <div className="container">
        <div className="footer-inner-wrap">
          <h6 className="footer-logo">
            <a href={props.content.logo.href}>{props.content.logo.text}</a>
          </h6>
          <nav className="footer-nav">
            <ul>
              {props.content.linkList.map(element =>  
                <li key={element.id} > 
                  <a href={element.href}>{element.text}</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="copyright-text">&copy; {`${props.content.copyright.text} ${new Date().getFullYear()}`}</div>
      </div>
    </footer>
  );
}

export default Footer;