//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

//Styles
import './css/helpers.css';
import './css/style.css';

//Template parts
import Header from './components/template/header/Header.jsx';
import Footer from './components/template/footer/Footer.jsx';

//Components
import Home from './components/Home.jsx';
import NotFound from './components/notfound.jsx';
import Service from './components/Service.jsx';
import Register from './components/Register.jsx';



const Root = () => {
	return (
		<BrowserRouter>
			<div className="body">
				<Header />
					<div className="content">
						<Match exactly pattern="/" component={Home} />
						<Match exactly pattern="/service" component={Service} />
						<Match exactly pattern="/register" component={Register} />
						<Match exactly pattern="/not-found"  component={NotFound} />
						<Miss component={NotFound} />
					</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

//Render the App
render(<Root />, document.getElementById('page'));

//Initiate Service worker
registerServiceWorker();
