import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Light from './Light';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      lightList:[<Light />,<Light />,<Light />]
    }
  }

  addLight=()=>{
    let {lightList}=this.state
    lightList.push(<Light />)
    this.setState({lightList:lightList})
    console.log("addLight: ",this.state.lightList)
  }

  deleteLight=()=>{
    let {lightList}=this.state;
    if(lightList.length>1){
      lightList.pop()
    }
    this.setState({lightList:lightList})
    console.log("removeLight: ",this.state.lightList)
  }

  render(){
    return(
      <div>
        <div>
          <Header />
          <Button  addLight={this.addLight} deleteLight={this.deleteLight} />
        </div>
        <div className="screen-container">
        {this.state.lightList}
        </div>
      </div>
      )
  }

}

export default App;

