import './Header.css';

const Header = (props) => {
  return (
    <header className="header-preview preview-section">
      <div className="container">
        <h1 className="logo">
          <a href="/">{props.content.logo.text}</a>
        </h1>
        <div className="right-header clearfix">
          <nav className="header-nav">
            <ul>
              {props.content.linkList.map(element =>  
                <li key={element.id} > 
                  <a href={element.href}>{element.text}</a>
                </li>
              )}
            </ul>
          </nav>
          <div className="hamburger" title="Menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="close-mobile-menu">
            <span></span>
            <span></span>
          </div>	
        </div>
      </div>
    </header>     
  );
}

export default Header;