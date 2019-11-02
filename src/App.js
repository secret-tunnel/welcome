import React from 'react';
import Token from './Token.js';
import Lock from './Lock.js';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'locked'
		};

		this.unlock = this.unlock.bind(this);
	}

	unlock() {
		this.setState({
			mode: 'unlocking'
		});
		setTimeout(() => {
			this.setState({
				mode: 'unlocked'
			});
		}, 10);
	}

	render() {
		return <div className="bg">
			{this.state.mode === 'unlocked' && <Token />}
			{this.state.mode === 'locked' && <Lock unlock={this.unlock}/>}
		</div>
	}
}
