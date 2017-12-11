import React from 'react';
import Header from './Header';
import HomeContent from './contents/home_content';
import Footer from './Footer';
import HeroImg from './hero_img';
import base from '../base';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: []
		};
	}

	componentWillMount() {
		base.syncState('articles', {
			context: this,
			state: 'articles',
			asArray: true
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.articles);
	}

	render() {
		return (
			<div className="body">
				<Header />
				<HeroImg articles={this.state.articles} />
				<HomeContent articles={this.state.articles} />
				<Footer />
			</div>
		);
	}
}

export default Home;
