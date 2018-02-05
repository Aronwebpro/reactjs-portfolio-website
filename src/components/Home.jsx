import React from 'react';
import HomeContent from './contents/home_content';
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
			<div className="home-content">
				<HeroImg articles={this.state.articles} />
				<HomeContent articles={this.state.articles} />
			</div>
		);
	}
}

export default Home;
