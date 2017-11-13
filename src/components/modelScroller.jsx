import React, { Component } from 'react';

/* Import Compenet styles*/
import './css/scrollerStyles.css';

const Item = items => {
	return (
		<div className="item_cont">
			<div className="item model_scroller_item">
				<div className="scroller-img-wrapper" style={{ maxWidth: '350px' }}>
					<img
						className="loaded"
						src="https://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Showroom2/2017/NEW/2017-C-SEDAN-AV-D.png"
						alt="Img Alternative"
					/>
				</div>
				<ul className="scroller-title">
					<li className="details-title">
						<a className="text-color" href="_blank">
							Your Model
						</a>
					</li>
					<li className="">
						<a className="text-color scroller-price" href="_blank">
							Additional Title
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

class ModelScroller extends Component {
	render() {
		return (
			<div id="scroller" class="scroller model_scroller">
				<div class="prev scroller-control passive" id="scroll_prev" />
				<div class="item_space">
					<div class="moving_space">
						<Item />
					</div>
				</div>
				<div class="next scroller-control" id="scroll_next" />
			</div>
		);
	}
}

export default ModelScroller;
