import React from 'react';


const ArticleCard = (props) => {
	const image = props.article.img;
	const title = props.article.title;
	const description = props.article.description;
	const keyPoints = props.article.key_points;

	return (	
		<article className="container body-content">
			<div className="col-xs-3 col-sm-2 theme-img">
				<img src={image} alt={title} className="img img-responsive" />
			</div>
			<div className="col-xs-9 col-sm-9 col-md-7 theme-text">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className="col-xs-12 col-xs-offset-3 col-sm-3 col-sm-offset-0 theme-highlights">
				<ul>
					{keyPoints.map( point => (
						<li key={Math.random()} >{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
} 




export default ArticleCard;