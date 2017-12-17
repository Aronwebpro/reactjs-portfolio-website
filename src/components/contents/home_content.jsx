import React from 'react';
import ArticleCard from '../mixins/_articleCard.jsx';
import ModelScroller from '../modelScroller/modelScroller.jsx';
import modelItems from '../../modelItems.json';

const HomeContent = props => {
	return (
		<div className="content" style={{ minHeight: '90vh' }}>
			<section className="content-header">
				<div className="container">
					<div className="col-xxs-6">
						<h2>
							Lets Get Started <span className="bold mobile-break">Your Project</span>
						</h2>
					</div>
					<div className="col-xxs-6 col-get-quote">
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
				<div className="body-content">
					<div className="fluid-container" style={{ paddingTop: '10px' }}>
						<h2 style={{ color: '#000', display: 'block', borderBottom: '1px solid #000', minHeight: '30px' }}>
							TECH NEWS
						</h2>
					</div>
					<ModelScroller id={'scroller'} count={4} items={modelItems} />
				</div>
			</section>
		</div>
	);
};

export default HomeContent;
