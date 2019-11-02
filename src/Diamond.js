import React from 'react';

export default class Diamond extends React.Component {
  render () {
    return(
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300px" height="300px">
			<filter id="blueGlow" height="300%" width="300%" x="-75%" y="-75%">
				<feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
				<feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
				<feFlood floodColor="rgb(0,186,255)" result="glowColor" />
				<feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
				<feMerge>
					<feMergeNode in="softGlow_colored"/>
					<feMergeNode in="SourceGraphic"/>
				</feMerge>
			</filter>
        	<path id="path" className="path" d="M150,10 290,150 150,290 10,150 150,10z M150,13 13,150 150,287 287,150 150,13z" fill="white" stroke="white" strokeWidth="3" filter="url(#blueGlow)"></path>
        	<path d="M150,25 170,45 130,45 150,25z M150,275 170,255 130,255 150,275z" fill="white" filter="url(#blueGlow)"></path>
		</svg>
    )
  }
}