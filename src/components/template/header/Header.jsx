import React, { Component } from 'react';
import Menu from '../menu/menu';
import zippyWhale from '../../../img/zippy_whale.png';
import axios from 'axios';
import Flash from '../../mixins/flash/Flash';

class Header extends Component {
	constructor() {
		super();
		this.login = this.login.bind(this);
		this.stickHeader = this.stickHeader.bind(this);
		this.getUserValue = this.getUserValue.bind(this);
		this.getPass = this.getPass.bind(this);
		this.flashMessage = this.flashMessage.bind(this);	
		this.petras = 'zigmas';
		this.state = {
			top: '0px',
			headerMobile: '70px',
			headerMobileInner: 'scale(1)',
			headerMobileInnerMarginTop: '0px', 
			name: '',
			pass: '',
			flasMessage:'', 
			status: ''
		};
	}
	login(e) {
		e.preventDefault();
		const name = this.state.name;
		let pass = false;
		axios
		.post('/login', {
			email: name,
			password: pass
		})
		.then(res => { 
			if(res.data.hasOwnProperty('error') || res.headers.hasOwnProperty('error')) {
				this.setState({pass: '', errorMessage: res.data.error});
				return;
			} else if(res.data.hasOwnProperty('success') && res.data.success === true ) {
				this.setState({status: 'sucess', flasMessage: res.data.message});
				console.log(pass);
			}
			console.log(res);
			this.setState({name:'', pass:''});
			
		})
		.catch(err => {
			this.setState({ flasMessage: 'Login Failed!', status:'error'});
			setTimeout(() => { 	this.setState({status:''}) }, 4000);

			
		});
		
	}
	getUserValue(e) {
		this.setState({name: e.target.value })
	}
	getPass(e) {
		this.setState({pass: e.target.value })
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
		if(window.innerWidth <= 600) {
			this.setState({
				headerMobile: '45px',
				headerMobileInner: 'scale(0.85)', 
				headerMobileInnerMarginTop: '-5px'
			});
		} else {
			this.setState({
				top: -this.loginRow.clientHeight+'px'
			});
		}
	} else {
		this.setState({
			top: '0px',
			headerMobile: '70px',
			headerMobileInner: 'scale(1)' 
		});
	}
		
	}
	flashMessage(msg, status) {
		 if (this.state.pass == false) { 
			return ( <Flash text={msg} status={status} /> )
		 }
	}
	render() {
		let flash;
		let height = '0px';
		let opacity = '0';
		if (this.state.status == 'success') {
			flash = (  <Flash text={this.state.flasMessage} status={this.state.status} /> );
			height = '80px';
			opacity = '1';
		} else if (this.state.status === 'error') {
			flash = (  <Flash text={this.state.flasMessage} status={this.state.status} /> );
			height = '80px';
			opacity = '1';
		} else if (this.state.status === '') {
			flash = undefined;
			height = '0px';
		}
		
		return (
			<header style={{ top: this.state.top, position: 'fixed' }}>
				<div className="top-row">
					<div ref={ (input) => this.loginRow = input } className="login-wrapper right">
					<div style={ {height:height, transition: 'height 0.6s, opacity 1.5s', opacity: opacity} }>
						{ flash }
					</div>
					<form style={ {display: 'inline-block' } } onSubmit={ this.login } >
						<label htmlFor="username">Username:</label>
						<input name="username" type="text" onChange={ this.getUserValue } value={this.state.name} />
						<label htmlFor="">Password:</label>
						<input name="password" type="password" onChange={ this.getPass } value={this.state.pass} />
						<a className="top-row_login" type="submit">
							Login
						</a>
						<a className="register-btn" href="/register">Register</a>
					</form>	
						
					</div>
				</div>

				<div className="header-body" style={ {height:this.state.headerMobile} }>
					<div  ref={ (input) => this.loginRow = input }  className="header-body-inner" style={ {transform:this.state.headerMobileInner } }>
						<div className="title-wrapper col-xxs-12 col-xs-5 col-sm-5" style={ {marginTop: this.state.headerMobileInnerMarginTop } }>
							<h1 style={{ display: 'inline-block' }}>
								ZIPPY <span style={{ color: 'red' }}>WHALE</span>
							</h1>
							<img src={zippyWhale} alt="logo" id="site-logo" />
							<div className="mobile-login_button">
								<a href="">Login</a>
								<a href="">Register</a>						
							</div>
						</div>
						<div className="menu-wrapper col-xxs-7 col-xs-7 col-sm-7 col-lg-6">
							<Menu />
						</div>

					</div>
				</div>
			</header>
		);
	}
}

export default Header;