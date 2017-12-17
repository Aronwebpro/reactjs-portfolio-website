import React from 'react';

const Menu = () => {
	return (
		<div>
			<nav className="menu">
				<ul>
					<li>
						<a href="/">
							<p>Home</p>
						</a>
					</li>
					<li>
						<a href="">
							<p>About</p>
						</a>
					</li>
					<li>
						<a href="/service">
							<p>Service</p>
						</a>
					</li>
					<li>
						<a href="">
							<p>Porfolio</p>
						</a>
					</li>
					<li>
						<a href="">
							<p>Contact Us</p>
						</a>
					</li>
				</ul>
			</nav>
			<nav className="mobile-menu mobile">
				<div className="hamburger">
					<div className="row1" />
					<div className="row2" />
					<div className="row3" />
				</div>
				<div>Menu</div>
			</nav>
		</div>
	);
};

export default Menu;
