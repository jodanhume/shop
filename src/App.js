import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import HeaderHeight from './components/HeaderHeight';
import Main from './components/Main';
import Footer from './components/Footer';
import FooterHeight from './components/FooterHeight';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header:{title: 'S.P.A', sub:'Spa'},
      toggle: {
        slide: function(e) {
          let asideNav = document.getElementById('asideNav');
          let asideNavBg = document.getElementById('asideNavBg');
          e.preventDefault();
          asideNav.classList.toggle('asideNavOpen');
          asideNavBg.style.display='block';
        }
      },
      close: {
        slideClose: function(e) {
          let asideNav = document.getElementById('asideNav');
          let asideNavBg = document.getElementById('asideNavBg');
          e.preventDefault();
          asideNav.classList.toggle('asideNavOpen');
          asideNavBg.style.display='none';
        }
      },
      Reacttitle: {title:'React'},
      Tailwind: {title:'Tailwind'},

    }
  }
    render() {
      
    return(
    <div className="App">
      <Header title={this.state.Header.title} toggleBtn={this.state.toggle.slide}></Header>
      <HeaderHeight></HeaderHeight>
      <Nav toggleClose={this.state.close.slideClose}></Nav>
      <Main Reacttitle={this.state.Reacttitle.title} Tailwind={this.state.Tailwind.title}></Main>
      <Footer></Footer>
      <FooterHeight></FooterHeight>
    </div>
    );
  }
}
export default App;