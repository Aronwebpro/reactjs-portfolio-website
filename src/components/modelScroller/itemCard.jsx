import React, { Component } from 'react';

class Item extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div
				ref={input => {
					this.tile = input;
				}}
				className="item_cont"
				style={this.props.width}
			>
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
	}
}

export default Item;
