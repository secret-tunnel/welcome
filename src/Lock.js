import React from 'react';
import './App.css';

export default class Lock extends React.Component {
	constructor(props) {
		super(props);
	    this.unlock = this.unlock.bind(this);
	}

	unlock() {
		this.props.unlock();
	}

	render() {
		return <div className="lock" onClick={this.unlock}>
			<div className="blink"></div>
			<div className="blink-overlay"></div>
		</div>
	}
}
