import React, { Component } from 'react';
import Item from './itemCard';

/* Import Compenet styles*/
import './css/scrollerStyles.css';

class ModelScroller extends Component {
	constructor(props) {
		super(props);
		this.count = props.count || 4;
		this.setWidth = this.setWidth.bind(this);
		this.resize = this.resize.bind(this);
		this.next = this.next.bind(this);
	}
	setWidth(scroller) {
		//onload Set default constant to help in Resize function
		const lockedCount = this.count;
		var lockedWidth = this.item.tile.clientWidth;
		
		//set how many to show depending from viewport
		switch (true) {
			case this.viewport.clientWidth < 420:
				this.count = 1;
				break;
			case this.viewport.clientWidth < 550:
				this.count = 2;
				break;
			case this.viewport.clientWidth < 800:
				this.count = 3;
				break;
			case this.viewport.clientWidth < 1050:
				this.count = 4;
				break;
			case this.viewport.clientWidth > 1050:
				this.count = lockedCount;
				break;
		}

		//onload Set Inventory Item width
		let toalItems = this.props.items.length;
		let itemWidth = 100 / toalItems + '%'; 
		this.itemWidth = { width: itemWidth };

		//onload Set moving_space Width
		let spaceWidth = toalItems / this.count * 100 + '%'; 
		this.spaceWidth = spaceWidth;
	}
	resize(item, lockedWidth, lockedCount) {
			//Set Inventory Number to display depending on ViewPort	
			switch (true) {
				case this.viewport.clientWidth < 420:
					this.count = 1;
					break;
				case this.viewport.clientWidth < 550:
					this.count = 2;
					break;
				case this.viewport.clientWidth < 800:
					this.count = 3;
					break;
				case this.viewport.clientWidth < 1050:
					this.count = 4;
					break;
				case this.viewport.clientWidth > 1050:
					this.count = lockedCount;
					break;
			}
			// Reset moving_space Width
			this.movingSpace.style.width = this.props.items.length / this.count * 100 + '%';
			
			//Get Left property and moving_space width
			this.left = parseInt(this.movingSpace.style.left, 10);
			let spaceWidth = this.props.items.length * 100 / this.count;
			let itemLength = parseInt(this.item.props.width.width);

			
			//Recalculate Left property for moving_space
			// if (-this.left + 100 > spaceWidth || this.count > 4 && -(this.left * 2) > spaceWidth || -this.left > spaceWidth - this.count * itemLength) {
			// 	this.moving_space.style.transition = 'none';
			// 	this.moving_space.style.left = -(spaceWidth - 100) + '%';
			// 	setTimeout(function () {
			// 		return _this3.moving_space.style.transition = 'left 0.7s';
			// 	}, 100);
			// }

			// if (this.left % 100 != 0) {
			// 	this.moving_space.style.transition = 'none';
			// 	this.moving_space.style.left = this.left - this.left % 100 + '%';
			// 	setTimeout(function () {
			// 		return _this3.moving_space.style.transition = 'left 0.7s';
			// 	}, 100);
			// }



			// //change btn animation
			// this.btnAnimation();
	}
	next() {
			//set left and stop properties
			var left = parseInt(this.moving_space.style.left, 10);
			this.stop = -((this.items.length - this.count) / this.count) * 100;
			this.left = left;

			// //Stop if Reach End	
			// if (-left >= -this.stop) {
			// 	this.nextBtn.classList.add('passive');
			// 	return;
			// }
			// //Scrolling Step
			// var step = 100;
			// if (-this.stop - -this.left < -this.left && this.count !== 1 || this.left === 0 && -this.stop < 100) {
			// 	step = -(this.stop - this.left);
			// }
			// //Scrolling
			// this.moving_space.style.left = left - step + '%';

			// //Reset Left Property after scroll
			// this.left = parseInt(this.moving_space.style.left, 10);

			// //change btn animation
			// this.btnAnimation();
		}
	/*******************/
	componentDidMount() {
		this.setWidth();
		window.addEventListener('resize', this.resize);
	}
	/*******************/
	componentWillMount() {
	}
	render() {
		return (
			<div id="scroller" className="scroller model_scroller" ref={input => (this.scroller = input)}>
				<div className="prev scroller-control passive" id="scroll_prev" />
				<div ref={input => (this.viewport = input)} className="item_space">
					<div className="moving_space" ref={input => (this.movingSpace = input)} style={ {width: this.spaceWidth, left:'0%'}}>

						{this.props.items.map((item) => {
							return (<Item key={Math.random()} ref={input => (this.item = input)} width={this.itemWidth} />)	
						})}
					</div>
				</div>
				<div className="next scroller-control" id="scroll_next" />
			</div>
		);
	}
}

export default ModelScroller;
