import React, { Component } from 'react';
import Item from './itemCard';
import PropTypes from 'prop-types';

/* Import Compenet styles*/
import './css/scrollerStyles.css';

class ModelScroller extends Component {
	constructor(props) {
		super(props);
		this.count = props.count || 4;
		this.setWidth = this.setWidth.bind(this);
		this.resize = this.resize.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.countCal = this.countCal.bind(this);
		this.items = this.props.items;
	}
	countCal(width, lockedCount) {
		switch (true) {
			case width < 420:
				return 1;
			case width < 600:
				return 2;
			case width < 850:
				return 3;
			case width < 1050:
				return 4;
			case width > 1050:
				return lockedCount;
			default:
				return lockedCount;
		}
	}
	setWidth(scroller) {
		//set how many to show depending from viewport
		this.count = this.countCal(this.viewport.clientWidth, this.props.count);

		//onload Set Inventory Item width
		let toalItems = this.items.length;
		let itemWidth = 100 / toalItems + '%';
		this.itemWidth = { width: itemWidth };

		//onload Set moving_space Width
		let spaceWidth = toalItems / this.count * 100 + '%';
		this.spaceWidth = spaceWidth;
	}
	resize() {
		//Set Inventory Number to display depending on ViewPort
		this.count = this.countCal(this.viewport.clientWidth, this.props.count);

		// Reset moving_space Width
		this.movingSpace.style.width = this.items.length / this.count * 100 + '%';

		//Get Left property and moving_space width
		this.left = parseInt(this.movingSpace.style.left, 10);
		let spaceWidth = this.items.length * 100 / this.count;
		let itemLength = parseInt(this.item.props.width.width, 10);

		//Recalculate Left property for movingSpace
		if (
			-this.left + 100 > spaceWidth ||
			(this.count > 4 && -(this.left * 2) > spaceWidth) ||
			-this.left > spaceWidth - this.count * itemLength
		) {
			this.movingSpace.style.transition = 'none';
			this.movingSpace.style.left = -(spaceWidth - 100) + '%';
			setTimeout(() => {
				return (this.movingSpace.style.transition = 'left 0.7s');
			}, 100);
		}

		if (this.left % 100 !== 0) {
			this.movingSpace.style.transition = 'none';
			this.movingSpace.style.left = this.left - this.left % 100 + '%';
			setTimeout(() => {
				return (this.movingSpace.style.transition = 'left 0.7s');
			}, 100);
		}

		//change btn animation
		this.btnAnimation();
	}
	next() {
		//set left and stop properties
		let left = parseInt(this.movingSpace.style.left, 10);
		this.stop = -((this.items.length - this.count) / this.count) * 100;
		this.left = left;

		//Stop if Reach End
		if (-left >= -this.stop) {
			this.nextBtn.classList.add('passive');
			return;
		}
		//Scrolling Step
		let step = 100;
		if ((-this.stop - -this.left < -this.left && this.count !== 1) || (this.left === 0 && -this.stop < 100)) {
			step = -(this.stop - this.left);
		}
		//Scrolling
		this.movingSpace.style.left = left - step + '%';

		//Reset Left Property after scroll
		this.left = parseInt(this.movingSpace.style.left, 10);

		//change btn animation
		this.btnAnimation();
	}
	prev() {
		//get Left Property of moving_space
		let left = parseInt(this.movingSpace.style.left, 10);
		this.left = left;

		//Stop if Reach End	& change nav btn style
		if (-left <= 0) {
			this.prevBtn.classList.add('passive');
			return;
		}
		//Scrolling Step
		let step = 100;
		if (-this.left >= 100) {
			step = 100;
		} else {
			step = -this.left;
		}
		//Scrolling
		this.movingSpace.style.left = left + step + '%';

		//Reset Left Property after scroll
		this.left = parseInt(this.movingSpace.style.left, 10);

		//change btn animation
		this.btnAnimation();
	}
	btnAnimation() {
		let left = parseInt(this.movingSpace.style.left, 10);
		var stop = -((this.items.length - this.count) / this.count) * 100;

		if (Math.floor(-left) === Math.floor(-stop)) {
			this.nextBtn.classList.add('passive');
		}
		if (-left === 0) {
			this.prevBtn.classList.add('passive');
			this.nextBtn.classList.remove('passive');
		}
		if (-left > 0) {
			this.prevBtn.classList.remove('passive');
		}
		if (Math.floor(-left) < Math.floor(-stop)) {
			this.nextBtn.classList.remove('passive');
		}
		if (this.items.length <= this.count) {
			this.prevBtn.classList.add('btn-hidden');
			this.nextBtn.classList.add('btn-hidden');
		} else {
			this.prevBtn.classList.remove('btn-hidden');
			this.nextBtn.classList.remove('btn-hidden');
		}
	}
	/*******************/
	componentDidMount() {
		window.addEventListener('resize', this.resize);
		this.setWidth();
	}
	/*******************/
	render() {
		return (
			<div id={this.props.id} className="scroller model_scroller" ref={input => (this.scroller = input)}>
				<div
					ref={input => (this.prevBtn = input)}
					onClick={this.prev}
					className="prev scroller-control passive"
					id="scroll_prev"
				/>
				<div ref={input => (this.viewport = input)} className="item_space">
					<div
						className="moving_space"
						ref={input => (this.movingSpace = input)}
						style={{ width: this.spaceWidth, left: '0%' }}
					>
						{this.items.map(item => {
							return (
								<Item
									key={item.id}
									title={item.title}
									adTitle={item.adTitle}
									img={item.imgPath}
									alt={item.altImg}
									link={item.link}
									ref={input => (this.item = input)}
									width={this.itemWidth}
								/>
							);
						})}
					</div>
				</div>
				<div
					ref={input => (this.nextBtn = input)}
					onClick={this.next}
					className="next scroller-control"
					id="scroll_next"
				/>
			</div>
		);
	}
}

ModelScroller.PropTypes = {
	id: PropTypes.string,
	count: PropTypes.number,
	items: PropTypes.array
};

export default ModelScroller;
