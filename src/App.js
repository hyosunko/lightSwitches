import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Light from './Light';


class App extends Component {
  constructor(props){
    // initial Light array
    super(props)
    this.state={
      lightList:[<Light />,<Light />,<Light />]
    }
  }
  // add Light box
  addLight=()=>{
    let {lightList}=this.state
    lightList.push(<Light />)
    this.setState({lightList:lightList})
  }
  // delete light box
  deleteLight=()=>{
    let {lightList}=this.state;
    if(lightList.length>0){
      lightList.pop()
    }
    this.setState({lightList:lightList})
  }

  render(){
    return(
      <div>
        <div>
          {/*Light Bulb Test Header */}
          <Header />
          {/*add and remove buttons*/}
          <Button  addLight={this.addLight} deleteLight={this.deleteLight} />
        </div>
        {/*lightBox with switch*/}
        <div className="screen-container">
          {this.state.lightList}
        </div>
      </div>
      )
  }

}

export default App;

