import React from 'react';
import Menu from './menu';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="top-row">
					<div className="login-wrapper right">
						<label for="username" htmlFor="">
							Username:
						</label>
						<input name="username" type="text" />
						<label htmlFor="">Password:</label>
						<input name="password" type="text" />
						<button className="button btn" type="submit">
							Login
						</button>
					</div>
				</div>

				<div className="header-body">
					<div className="header-body-inner">
						<div className="title-wrapper">
							<h1>The Website</h1>
						</div>
						<div className="menu-wrapper">
							<Menu />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
