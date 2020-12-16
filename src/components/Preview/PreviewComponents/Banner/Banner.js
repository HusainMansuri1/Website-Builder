import './Banner.css';

const Banner = (props) => {
  return ( 
    <section className="banner-preview preview-section  theme-bg">
      <div className="container">
        <div className="banner-inner-wrap">
          <h2 className="banner-title theme-font theme-bg-text-color">{props.content.title.text}</h2>
          <p className="banner-desc theme-bg-text-color">{props.content.subTitle.text}</p>
        </div>
      </div>
    </section>
   );
}
 
export default Banner;