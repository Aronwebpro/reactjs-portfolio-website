import React from 'react';
import designIcon from '../../../img/responsive-design-icon.png';
import developingIcon from '../../../img/web-developing-icon.png';
import seoIcon from '../../../img/analytics-icon.png';

const HeroImgCard = props => {
	const imgIconStyles = {
		width: '100%'
	};
	const imgIconConStyles = {
		height: '100px',
		width: '85px',
		margin: '0 auto 15px'
	};
	
	return (
		<div className="front-columns col-xxs-12 col-sm-12 col-md-4">
			<div style={imgIconConStyles}>
				<img src={'img/' + props.article.icon} alt="Image" style={imgIconStyles} />
			</div>
			<h1>{props.article.shortTitle}</h1>
			<p>Having a unique website design is important part of the branding and marketing process of your business</p>
		</div>
	);
};

export default HeroImgCard;
