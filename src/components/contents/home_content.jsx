import React from 'react';
import ArticleCard from '../mixins/_articleCard.jsx';
import data from '../../articles.json';
import PropTypes from 'prop-types';

class HomeContent extends React.Component {
	
	constructor() {
		super();
		this.state = {
			articles: data
		}
	}

	render() {
		return (
			<div className="content" style={ {minHeight: '90vh'} } >
				<section className="statements">
					{	this.state.articles.map(article => (
							<ArticleCard article={article} key={article.title} />
						))}					
				</section>
			</div>
		)
	}

}



export default HomeContent;
