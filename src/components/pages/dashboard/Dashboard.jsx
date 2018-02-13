import React, {Component} from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.isLoggedIn = this.isLoggedIn.bind(this);
		console.log(this.props);
	}
	componentWillMount() {

	}
	componentDidMount() {

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
		if (this.props.isLoggedIn) {
			return (
				<div className="content2">
					<h1>This is Dashboard</h1>
				</div>
			)
		} else {
			return <Redirect to="/" />
		}
	}
}

export default Dashboard;