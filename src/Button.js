import React, { Component } from 'react';

class Button extends Component{

	render(){
		return(
			<div className="button button-container">
			    {/*add and remove buttons with function cneection*/}
				<button onClick={this.props.addLight}>Add Light</button>{' '}
				<button onClick={this.props.deleteLight}>Remove Light</button>{' '}
			</div>
			)
	}
}

export default Button;