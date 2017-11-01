import React from 'react';
import HeroImgCard from './mixins/_hero_img_card';

const HeroImg = props => {
	return (
		<section id="first-section" className="wrapper container-fluid">
			<div id="hero-img" className="parallax" />
			<div className="content">
				<div id="front-panel">
					{props.articles.map(article => <HeroImgCard key={article.title} article={article} />)}
				</div>
			</div>
		</section>
	);
};

export default HeroImg;
