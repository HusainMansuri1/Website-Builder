import React, { Component } from 'react';
import Landing from '../../pages/Landing/Landing';
import Builder from '../../pages/Builder/Builder';
import Delivery from '../../pages/Delivery/Delivery';
import './Layout.css';

class Layout extends Component {
  state = { 
    name: 'Website Builder',
    
    pages: [
      {id: 'landing', show: true},
      {id: 'builder', show: false},
      {id: 'delivery', show: false},
    ],

    formatting: {
      font: [
        {id: 'serif',active: true},
        {id: 'sans-serif',active: false},
        {id: 'courier',active: false},
      ],

      color: [
        {id: 'light', active: true},
        {id: 'dark', active: false},
        {id: 'bold', active: false},
      ]
    },

    sectionDetail: {
      visibility: [
        {id: 'header', show: true},
        {id: 'banner', show: false},
        {id: 'faq', show: false},
        {id: 'footer', show: true},
      ],

      content: {
        header: {
          title: {text: "header"},
          logo: {text: 'Logo', href: "#"},
          linkList : [
            {id: "1", text: "Link 1", href: "#"},
            {id: "2", text: "Link 2", href: "#"},
            {id: "3", text: "Link 3", href: "#"},
          ],
        },
  
        banner: {
          title: {text: "Your banner title here"},
          subTitle: {text: "your banner description here your banner description here your banner description here your banner description here"},
        },
  
        faq: {
          title: {text: "faq's"},      
          list: [
            {id: "1", title: "Faq 1", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsumamet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu."},
            {id: "2", title: "Faq 2", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsumamet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu."},
            {id: "3", title: "Faq 3", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsumamet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu."},
            {id: "4", title: "Faq 4", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsumamet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsu."},
          ]
        },
  
        footer: {
          logo: {text: 'Footer Logo', href: "#"},
          title: {text: "footer"},        
          linkList : [
            {id: "1", text: "Link 1", href: "#"},
            {id: "2", text: "Link 2", href: "#"},
            {id: "3", text: "Link 3", href: "#"},
          ],
          copyright: {text: "Copyright"} 
        },  
      }
    }
  }

  pageChangeHandler = (page) => {
    const pages = JSON.parse(JSON.stringify(this.state.pages));
    pages.map((cur, ind) => {
      return cur.id === page ?  cur.show = true : cur.show = false;
    });
    
    this.setState({pages})    
  };
  
  sectionToggleHandler = (id) => {
    const visibility = [...this.state.sectionDetail.visibility];
    let currentIndex = null;
    let currentElem = null;

    visibility.map((curr,ind) => curr.id === id ? currentIndex = ind : '');
    currentElem = {...visibility[currentIndex]};
    currentElem.show = !currentElem.show;
    visibility[currentIndex] = {...currentElem};

    const sectionDetail = {...this.state.sectionDetail};
    sectionDetail.visibility = visibility;

    this.setState({ sectionDetail });
  };

  formatChangeHandler = (id, formattingElem) => {
    const formattingElemAarray = JSON.parse(JSON.stringify(this.state.formatting[formattingElem]));
    formattingElemAarray.map((cur,ind) =>{cur.id === id ? cur.active = true : cur.active = false});
    const formatting={...this.state.formatting}
    formatting[formattingElem] = formattingElemAarray;
    this.setState({formatting});
  }

  // changeTitleCheck = () => {
  //   let name = this.state.name;
  //   name === "Website Builder" ? name = "Title Check" : name = "Website Builder";
  //   this.setState({name})
  // }

  // allPages = [
  //   {id: 'landing', value: <Landing key="landing" title={this.state.name} pageChange={this.pageChangeHandler}/>},
  //   {id: 'builder', value: <Builder key="builder" visibility_0 ={this.state.sectionDetail.visibility} add_0={this.sectionToggleHandler}/>},
  //   {id: 'delivery', value: <Delivery key="delivery"/>},
  // ];

  //displayCurrentPage = () => this.state.pages.map(page => page.show ? page.value : null);
  // displayCurrentPage = () => {
  //   return this.state.pages.map(page => 
  //     this.allPages.map(allPage => 
  //         (page.id === allPage.id && page.show) ? allPage.value : null
  //       )
  //       )
  // }


  render() {
    console.log("Layout Rendered");
    return ( 
      <div className="layout">
        {this.state.pages.map(cur => (cur.id === "landing" && cur.show) ? <Landing key="landing" pageChange={this.pageChangeHandler} title={this.state.name} /> : "" )}
        
        {this.state.pages.map(cur => (cur.id === "builder" && cur.show) ? <Builder key="builder" pushedLayoutClass={this} /> : "" )}

        {this.state.pages.map(cur => (cur.id === "delivery" && cur.show) ? <Delivery key="delivery" pushedLayoutClass={this}/> : "" )}
      </div>
    );
  }
}

export default Layout;