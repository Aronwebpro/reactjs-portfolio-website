import React from 'react';
import ArticleCard from '../mixins/_articleCard.jsx';
import data from '../../articles.json';
import PropTypes from 'prop-types';
import base from '../../base';

class HomeContent extends React.Component {
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

		//Fetch data from Fire base
		// this.articles = [];
		// base.fetch('articles', { context: this, asArray: true }).then(data => {
		// 	data.forEach(article => this.articles.push(article));
		// });
	}

	componentWillUnmount() {
		base.removeBinding(this.articles);
	}

	render() {
		return (
			<div className="content" style={{ minHeight: '90vh' }}>
				<section className="statements">
					{this.state.articles.map(article => <ArticleCard article={article} key={article.title} />)}
				</section>
			</div>
		);
	}
}

export default HomeContent;
