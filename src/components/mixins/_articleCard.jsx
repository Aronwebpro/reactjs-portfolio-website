import React from 'react';

const ArticleCard = props => {
	return (
		<article className="container body-content">
			<div className="col-xs-3 col-sm-2 theme-img">
				<img src={props.article.img} alt={props.article.title} className="img img-responsive" />
			</div>
			<div className="col-xs-9 col-sm-9 col-md-7 theme-text">
				<h2>{props.article.title}</h2>
				<p>{props.article.description}</p>
			</div>
			<div className="col-xs-12 col-xs-offset-3 col-sm-3 col-sm-offset-0 theme-highlights">
				<ul>{props.article.key_points.map(point => <li key={Math.random()}>{point}</li>)}</ul>
			</div>
		</article>
	);
};

export default ArticleCard;
