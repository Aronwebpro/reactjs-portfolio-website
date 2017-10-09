//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';


//Styles
import './css/index.css';


//Components
import Home from './components/Home';
import NotFound from './components/notfound';
import Projects from './components/Projects';


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={ Home } />
				<Match exactly pattern="/projects" component={ Projects } />
				<Miss component={ NotFound} />
			</div>
		</BrowserRouter>
	)
}


//Render the App
render(<Root/>, document.getElementById('page'));

//Initiate Service worker
registerServiceWorker();
