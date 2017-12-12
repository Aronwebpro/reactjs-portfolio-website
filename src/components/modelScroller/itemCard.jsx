import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
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
					<a className="text-color" href={this.props.link || '#'}>
						<div className="scroller-img-wrapper" style={{ maxWidth: '350px' }}>
							<img
								className="loaded"
								src={this.props.img}
								alt={this.props.alt}
							/>
						</div>
						<ul className="scroller-title">
							<li className="details-title">
								<div>{this.props.title}</div>
							</li>
							<li className="">
								<div className="scroller-price">{this.props.adTitle}</div>
							</li>
						</ul>
					</a>
				</div>
			</div>
		);
	}
}

Item.PropTypes = {
	key: PropTypes.number.required,
	title: PropTypes.string.required,
	adTitle: PropTypes.string,
	img: PropTypes.string.required,
	link: PropTypes.string,
	alt: PropTypes.string
};

export default Item;
