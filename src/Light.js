import React, { Component } from 'react';


class Light extends Component{
    constructor ( props ) {
        super( props );
    
    // initial setting for switch and light condition
    // light and switch are css controlled. 
    // can be replace with images
    this.state = {
      isOn: false,
      light: "off",
      // img: "./lightOff.png"
      // img: "http://www.myiconfinder.com/uploads/iconsets/256-256-9b952124a7973cedd363015231bfe197.png"
    }
    }

    // switch status changes by onClick on switch.  
    handleChange = () =>{
    this.setState({isOn:!this.state.isOn});
    this.setState({light:this.state.isOn?"off":"on"});
    // this.setState({img:this.state.isOn?"./lihgtOn.png":"./lightOff.png"})
    // this.setState({img:this.state.isOn?"http://www.myiconfinder.com/uploads/iconsets/256-256-9b952124a7973cedd363015231bfe197.png":"http://www.myiconfinder.com/uploads/iconsets/256-256-5c45fea7601361971f06202d034760dc.png"})
    }

    render () {
          // var sectionStyle ={
          //     width: '100px',
          //     height: '100px',
          //     textAlign: 'center',
          //     userSelect: 'none',
          //     backgroundImage: `url(${this.state.img})`,
          //     backgroundRepeat:'no-repeat',
          //     backgroundSize: '100px 100px',
          //     margin: 'auto',
          //     // border: '3px solid'
          // }

        return(
            <div className="box-container">
              {/*<div style={sectionStyle}  className="light-bulb"></div>*/}

              {/* light, checkbox input is controlled by css */}
              <div className="light-container">
                  <label>
		              {/* light, checkbox checked status change by Onclick */}
                      <input ref="light" checked={ this.state.isOn } onChange={ this.handleChange } className="light" type="checkbox" />
                      <div>
                      </div>
                  </label>
              </div>

              {/* switch, checkbox input is controlled by css */}
              <div className="switch-container">
                  <label>
		              {/* switch, checkbox checked status change by Onclick */}
                      <input ref="switch" checked={ this.state.isOn } onChange={ this.handleChange } className="switch" type="checkbox" />
                      <div>
                          <div>
				            {/* switch, on/off charactr diplay */}
                            {this.state.light}
                          </div>
                      </div>
                  </label>
              </div>
            </div>
        );
    }

}

export default Light;