//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

//Styles
import './css/index.css';

//Components
import Home from './components/Home.jsx';
import NotFound from './components/notfound.jsx';
import Projects from './components/Projects.jsx';

<<<<<<< HEAD
=======



>>>>>>> fd446c8339e5dfee35c5cefddee2d31d6c4e28ce
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
