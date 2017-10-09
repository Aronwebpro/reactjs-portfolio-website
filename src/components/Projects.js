import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

//Component styles
import '../css/App.css';



class Projects extends Component {
  render() {
    return (
      <div className="page">     
	      <Header />
	      <Footer />
      </div>
    );
  }
}

export default Projects;
