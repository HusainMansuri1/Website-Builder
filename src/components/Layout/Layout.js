import React, { Component } from 'react';
import Landing from '../../pages/Landing/Landing';
import Builder from '../../pages/Builder/Builder';
import Delivery from '../../pages/Delivery/Delivery';

class Layout extends Component {
  state = { 
    name: 'Website Builder',
    
    // pages: [
    //   {id: 'landing', show: true, value: <Landing key="landing"/>},
    //   {id: 'builder', show: false, value: <Builder key="builder"/>},
    //   {id: 'delivery', show: false, value: <Delivery key="delivery"/>},
    // ],

    pages: [
      {id: 'landing', show: true},
      {id: 'builder', show: false},
      {id: 'delivery', show: false},
    ],

    formatting: {
      font: [
        {id: 'serif',active: true},
        {id: 'sans-serif',active: false},
        {id: 'round',active: false},
      ],

      color: [
        {id: 'light', active: true},
        {id: 'dark', active: false},
        {id: 'mono', active: false},
      ]
    },

    sectionDetail: {
      visibility: [
        {id: 'header', show: true},
        {id: 'banner', show: false},
        {id: 'showcase', show: false},
        {id: 'service', show: false},
        {id: 'faq', show: false},
        {id: 'testimonial', show: false},
        {id: 'footer', show: true},
      ],

      content: {
        header: {
          title: {text: "header"},
          logo: {text: 'Logo', href: ".com"},
          linkList : [
            {id: "1", text: "Link 1", href: ""},
            {id: "2", text: "Link 2", href: ""},
            {id: "3", text: "Link 3", href: ""},
          ],
        },
  
        banner: {
          title: {text: "banner"},
          subTitle: {text: ""},
        },
  
        service: {
          title: {text: "services"},        
          list: [
            {id: "1", title: "Question 1", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "2", title: "Question 2", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "3", title: "Question 3", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "4", title: "Question 4", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
          ]
        },

        showcase: {
          title: {text: "showcase"},   
          list: [
            {id: "1", title: "Showcase 1", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "2", title: "Showcase 2", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "3", title: "Showcase 3", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "4", title: "Showcase 4", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
          ]     
        },

        faq: {
          title: {text: "faq's"},      
          list: [
            {id: "1", title: "Faq 1", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "2", title: "Faq 2", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "3", title: "Faq 3", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "4", title: "Faq 4", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
          ]
        },

        testimonial: {
          title: {text: "testimonials"},     
          list: [
            {id: "1", title: "testimonial 1", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "2", title: "testimonial 2", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "3", title: "testimonial 3", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
            {id: "4", title: "testimonial 4", subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et laudantium dolores eius ex nesciunt adipisci? Voluptas blanditiis et eius molestiae vitae sunt culpa ab illo, provident rerum sequi! Quo, ipsum."},
          ]   
        },
  
        footer: {
          title: {text: "footer"},        
          linkList : [
            {id: "1", text: "Link 1", href: ""},
            {id: "2", text: "Link 2", href: ""},
            {id: "3", text: "Link 3", href: ""},
          ],
          copyright: {text: "Copyright"} 
        },  
      }
    }
  }

  
  displayCurrentPage = () => {
    return this.state.pages.map(page => 
      this.allPages.map(allPage => 
          (page.id === allPage.id && page.show) ? allPage.value : null
        )
        )
  }

  pageChangeHandler = (page) => {
    const pages = [...this.state.pages];
    pages.map((cur, ind) => {
      return cur.id === page ?  cur.show = true : cur.show = false;
    });
    
    this.setState({pages})    
  } 

  allPages = [
    {id: 'landing', value: <Landing key="landing" title={this.state.name} pageChange={this.pageChangeHandler}/>},
    {id: 'builder', value: <Builder key="builder"/>},
    {id: 'delivery', value: <Delivery key="delivery"/>},
  ]
  
  //displayCurrentPage = () => this.state.pages.map(page => page.show ? page.value : null);
  

  render() {
    return ( 
      <div className="layout">
        {this.displayCurrentPage()}
      </div>
    );
  }
}

export default Layout;