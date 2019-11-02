import React from 'react';
import './App.css';
import Diamond from './Diamond';
const classes = require('classnames');

export default class Token extends React.Component {
	constructor(props) {
		super(props);
		let initialStages = this.setStages({
			0: ['textBG', 'p1'],
			500: ['text', 'diamond', 'p2'],
			750: ['p3'],
			800: ['smallText01'],
			900: ['smallText02'],
		});
		console.log(initialStages);
		this.state = {
			stages: initialStages,
			text: 'JM5-XPZ-AW1-ZMP'
		};
		this.offset = 1000;
		setInterval(() => {
			this.offset -= 1;
			if (this.offset < 0) {
				this.offset = 1000;
			}
			document.getElementById('path').style['stroke-dashoffset'] = this.offset.toString();
		}, 15);
	}

	setStages(timings) {
		let initialStages = {};
		Object.keys(timings).forEach(key => {
			timings[key].forEach(value => {
				initialStages[value] = (key > 0) ? false : true;
			});
		});
		Object.keys(timings).forEach(key => {
			if (key > 0) {
				let values = {};
				timings[key].forEach(value => {
					values[value] = true
				});
				setTimeout(() => {
					this.setState({
						stages: {
							...this.state.stages,
							...values
						}
					});
				}, key);
			}
		});
		return initialStages;
	}

	render() {
		return <div className="token-wrapper">
			<div className="component pulse-wrapper">
				{this.state.stages.p1 && <div className="pulse"></div>}
				{this.state.stages.p2 && <div className="pulse"></div>}
				{this.state.stages.p3 && <div className="pulse"></div>}
			</div>
			<div className="component diamond-wrapper">
				<div className={classes("big-diamond", {"active": this.state.stages.diamond})}>
					<Diamond className="diamond"/>
				</div>
			</div>
			<div className="component">
				<div className="bonus-wrapper">
					<div class={classes("small-text", {"active": this.state.stages.smallText01})}>Friendship</div>
					<div class="shadow-text">MiddleText</div>
					<div class={classes("small-text", {"active": this.state.stages.smallText02})}>Token</div>
				</div>
			</div>
			<div className="component text-bg-wrapper">
				<div className={classes("text-bg", {"active": this.state.stages.textBG})}>
					<div className="shadow-text">{this.state.text}</div>
				</div>
			</div>
			<div className="component">
				<div className="text-wrapper">
					<div className={classes("text", {"active": this.state.stages.text})}>{this.state.text}</div>
				</div>
			</div>
		</div>
	}
}
