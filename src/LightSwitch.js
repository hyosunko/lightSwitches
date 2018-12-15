import React, { Component } from 'react';

class LightSwitch extends Component{
	render(){
		var lightStyle = {
			background : this.props.color
		}
		return (
			<div className="container" sytle={lightStyle}>
				Light Switch
			</div>
			)
	}
}

export default LightSwitch;