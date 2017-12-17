import React from 'react';

const ArticleCard = props => {
	return (
		<article className="container body-content">
			<div className="col-xxs-3 col-sm-2 theme-img">
				<img src={'img/' + props.img} alt={props.title} className="img img-responsive" />
			</div>
			<div className="col-xxs-9 col-sm-9 col-md-7 theme-text">
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<div className="col-xxs-12 col-xxs-offset-3 col-sm-3 col-sm-offset-0 theme-highlights">
				<ul>{props.key_points.map(point => <li key={Math.random()}>{point}</li>)}</ul>
			</div>
		</article>
	);
};

export default ArticleCard;
