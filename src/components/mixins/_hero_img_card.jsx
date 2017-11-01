import React from 'react';

const HeroImgCard = props => {
	return (
		<div className="front-columns col-xs-12 col-sm-12 col-md-4">
			<img className="colummn-image" src={props.article.img} alt={props.article.title} />
			<h1>{props.article.shortTitle}</h1>
		</div>
	);
};

export default HeroImgCard;
