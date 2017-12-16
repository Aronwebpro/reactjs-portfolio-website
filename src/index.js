//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

//Styles
import './css/helpers.css';
import './css/style.css';

//Components
import Home from './components/Home.jsx';
import NotFound from './components/notfound.jsx';
import Projects from './components/Projects.jsx';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match exactly pattern="/projects" component={Projects} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	);
};

//Render the App
render(<Root />, document.getElementById('page'));

//Initiate Service worker
registerServiceWorker();
