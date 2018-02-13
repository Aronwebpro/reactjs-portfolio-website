//Dependencies
import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';

//Styles
import './css/helpers.css';
import './css/style.css';

//Template parts
import Header from './components/template/header/Header.jsx';
import Footer from './components/template/footer/Footer.jsx';

//Components
import Home from './components/pages/home/Home.jsx';
import NotFound from './components/notfound.jsx';
import Service from './components/Service.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/pages/dashboard/Dashboard.jsx';



class Root extends Component {
	constructor() {
		super();
		this.isLoggedIn = this.isLoggedIn.bind(this); 
		this.state = {user:'unAuthorized'};
	}
	componentWillMount() {
		//this.isLoggedIn();
	}
	isLoggedIn() {
		axios
			.post('http://localhost:8080/islogin', {
			})
			.then(res => { 
				this.setState({user:'Authorized'});

			})
			.catch(err => {
				this.setState({user:'Authorized'});
			});
	}
	render() {
		const isLoggedIn = false;
		return (
			<BrowserRouter>
				<div className="body">
					<Header isLoggedIn={ true } />
						<div className="content">
							<Match exactly pattern="/" render={ () => <Home isLoggedIn={ isLoggedIn } /> } />
							<Match exactly pattern="/service" render={ () => <Service isLoggedIn={ isLoggedIn } /> } />
							<Match exactly pattern="/register" component={Register}/>
							<CookiesProvider>
							<Match exactly pattern="/dashboard" render={ () => <Dashboard isLoggedIn={ isLoggedIn } /> }/>
							</CookiesProvider>
							<Match exactly pattern="/not-found"  component={NotFound} />
							<Miss component={NotFound} />
						</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
};

//Render the App
render(<Root />, document.getElementById('page'));

//Initiate Service worker
registerServiceWorker();
