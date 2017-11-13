import React, { Component } from 'react';
import Item from './itemCard';

/* Import Compenet styles*/
import './css/scrollerStyles.css';

class ModelScroller extends Component {
	constructor(props) {
		super(props);
		this.count = props.count || 4;
		this.setWidth = this.setWidth.bind(this);
	}
	setWidth(scroller) {
		//var lockedWidth = this.scroller.querySelector('.item_cont').clientWidth;

		//onload Set default constant to help in Resize function
		var lockedCount = this.count;
		var lockedWidth = this.item.tile.clientWidth;
		//set how many to show depending from viewport
		switch (true) {
			case this.viewport.clientWidth < 420:
				this.count = 1;
				break;
			case this.viewport.clientWidth < 550:
				this.count = 2;
				break;
			case this.viewport.clientWidth < 700:
				this.count = 3;
				break;
			case this.viewport.clientWidth < 1050:
				this.count = 4;
				break;
			case this.viewport.clientWidth > 1050:
				this.count = lockedCount;
				break;
		}

		//onload Set Inventory Tile width
		var itemWidth = 100 / 8 + '%'; //8 will have to be change with the actual number of items
		this.itemWidth = { width: itemWidth };

		//onload Set moving_space Width
		let spaceWidth = 8 / this.count * 100 + '%'; //8 will have to be change with the actual number of items
		this.spaceWidth = { width: spaceWidth };
	}
	/*******************/
	componentWillMount() {
		// var itemsNumber = this.count;
		// var itemWidth = 100 / itemsNumber + '%';
		// this.itemWidth = { width: itemWidth };
	}
	/*******************/
	componentDidMount() {
		this.setWidth();
	}
	render() {
		return (
			<div id="scroller" className="scroller model_scroller" ref={input => (this.scroller = input)}>
				<div className="prev scroller-control passive" id="scroll_prev" />
				<div ref={input => (this.viewport = input)} className="item_space">
					<div className="moving_space" ref={input => (this.movingSpace = input)} style={this.spaceWidth}>
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
						<Item ref={input => (this.item = input)} width={this.itemWidth} />
					</div>
				</div>
				<div className="next scroller-control" id="scroll_next" />
			</div>
		);
	}
}

export default ModelScroller;
