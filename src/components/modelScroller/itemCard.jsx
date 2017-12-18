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
						<div className="scroller-img-wrapper" style={{}}>
							<img className="loaded" src={this.props.img} alt={this.props.alt} />
						</div>
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
