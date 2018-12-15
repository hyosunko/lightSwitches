import React, { Component } from 'react';
import LightSwitch from './LightSwitch';


class LightList extends Component{
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div>
				<LightSwitch lightColor={this.props.color} lightSwith={this.props.light} />
				<LightSwitch lightColor={this.props.color} lightSwith={this.props.light} />
				<LightSwitch lightColor={this.props.color} lightSwith={this.props.light} />
				<LightSwitch lightColor={this.props.color} lightSwith={this.props.light} />
			</div>
			)
	}
}

export default LightList;