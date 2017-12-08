import React, { Component } from 'react';
import Menu from './menu';
import zippyWhale from '../img/zippy_whale.png';

class Header extends Component {
	constructor() {
		super();
		this.login = this.login.bind();
		this.stickHeader = this.stickHeader.bind(this);
		this.state = {
			top: '0px'
		};
	}
	login() {
		console.log('Loging...');
	}
	componentDidMount() {
		window.addEventListener('scroll', this.stickHeader);
	}
	componentWillUnmount() {
		//window.removeEventListener('scroll', this.stickHeader);
	}
	stickHeader() {
		const top = window.scrollY;
		if (top > 100) {
			this.setState({
				top: '-42px'
			});
		} else {
			this.setState({
				top: '0px'
			});
		}
	}
	render() {
		return (
			<header style={{ top: this.state.top, position: 'fixed' }}>
				<div className="top-row">
					<div className="login-wrapper right">
						<label htmlFor="username">Username:</label>
						<input name="username" type="text" />
						<label htmlFor="">Password:</label>
						<input name="password" type="text" />
						<button className="btn login-btn" onClick={this.login} type="submit">
							Login
						</button>
					</div>
				</div>

				<div className="header-body">
					<div className="header-body-inner">
						<div className="title-wrapper col-xs-4">
							<h1 style={{ display: 'inline-block' }}>
								ZIPPY <span style={{ color: 'red' }}>WHALE</span>
							</h1>
							<img src={zippyWhale} alt="" style={{ width: '70px', display: 'inline-block' }} />
						</div>
						<div className="menu-wrapper col-xs-8">
							<Menu />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
