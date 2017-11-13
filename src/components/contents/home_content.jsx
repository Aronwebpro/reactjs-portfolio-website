import React from 'react';
import ArticleCard from '../mixins/_articleCard.jsx';
import data from '../../articles.json';
import ModelScroller from '../modelScroller/modelScroller.jsx';

const HomeContent = props => {
	return (
		<div className="content" style={{ minHeight: '90vh' }}>
			<section className="content-header">
				<div className="container">
					<div className="col-xs-6">
						<h2>
							Lets Get Started <span className="bold">Your Project</span>
						</h2>
					</div>
					<div className="col-xs-6 right">
						<div className="quote-btn-wrapper">
							<button className="quote-btn">Get Quote</button>
						</div>
					</div>
				</div>
			</section>
			<section className="statements">
				{props.articles.map(article => <ArticleCard {...article} key={article.title} />)}
			</section>
			<section>
				<div className="body-content" style={{ minHeight: '300px' }}>
					<div className="container" style={{ color: '#000', minHeight: '50px', color: 'white' }}>
						<h2>TECH NEWS</h2>
					</div>

					<p>This is news</p>
					<ModelScroller
						count={5}
						items={[
							{
								title: '',
								imgPath: ''
							}
						]}
					/>
				</div>
			</section>
		</div>
	);
};

export default HomeContent;
