import Header from './PreviewComponents/Header/Header';
import Banner from './PreviewComponents/Banner/Banner';
import Faq from './PreviewComponents/Faq/Faq';
import Footer from './PreviewComponents/Footer/Footer';
import './Preview.css';

const Preview = (props) => {
  let sectionArray = [
    {id: "header", value: <Header key="header" content={props.pushedLayoutClass_1.state.sectionDetail.content.header}/>},
    {id: "banner", value: <Banner key="banner" content={props.pushedLayoutClass_1.state.sectionDetail.content.banner}/>},
    {id: "faq", value: <Faq key="faq" content={props.pushedLayoutClass_1.state.sectionDetail.content.faq}/>},
    {id: "footer", value: <Footer key="footer" content={props.pushedLayoutClass_1.state.sectionDetail.content.footer}/>},
  ];

  const showSelectedSections = () => {
    return props.pushedLayoutClass_1.state.sectionDetail.visibility.map(current => 
      sectionArray.map(element => 
        (current.id === element.id && current.show) ? element.value : "" 
      )
    )
  };

  const previewClasses = () =>{
    let classes = "preview-inner-wrap";
    props.pushedLayoutClass_1.state.formatting.color.map(curColor => 
      curColor.active ? classes += ` ${curColor.id}` : "");
    props.pushedLayoutClass_1.state.formatting.font.map(curFont => 
      curFont.active ? classes += ` ${curFont.id}` : "");
    return classes;
  };

  return ( 
    <div className={previewClasses()}>
      {showSelectedSections()}
    </div>
  );
}
 
export default Preview;