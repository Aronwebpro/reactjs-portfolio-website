import React from 'react';
import ArticleCard from '../mixins/_articleCard.jsx';
import data from '../../articles.json';

const HomeContent = props => {
	return (
		<div className="content" style={{ minHeight: '90vh' }}>
			<section className="statements">
				{props.articles.map(article => <ArticleCard article={article} key={article.title} />)}
			</section>
		</div>
	);
};

export default HomeContent;
