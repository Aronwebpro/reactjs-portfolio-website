import React from 'react';
import Header from './Header';
import HomeContent from './contents/home_content';
import Footer from './Footer';


//Styles
import '../css/App.css';








class Home extends React.Component {
  render() {
    return (
      <div className="body">     
	      <Header />
	      <HomeContent />
	      <Footer />
      </div>
    );
  }
}



export default Home;