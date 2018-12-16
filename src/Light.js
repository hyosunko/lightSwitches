import React, { Component } from 'react';


class Light extends Component{
    constructor ( props ) {
        super( props );
    
    this.state = {
      isOn: false,
      light: "off",
      img: "http://www.myiconfinder.com/uploads/iconsets/256-256-9b952124a7973cedd363015231bfe197.png"
    }
    }
  
  // componentWillMount () {
  //   this.setState( {isOn: this.props.isOn} );
  //   this.setState({light: this.props.light})
  //   this.setState({img: this.props.img})
  // }


    handleChange () {
    this.setState({isOn: !this.state.isOn});
    this.setState({light:this.state.isOn?"off":"on"});
    this.setState({img:this.state.isOn?"http://www.myiconfinder.com/uploads/iconsets/256-256-9b952124a7973cedd363015231bfe197.png":"http://www.myiconfinder.com/uploads/iconsets/256-256-5c45fea7601361971f06202d034760dc.png"})
    console.log("isOn: ",this.state.isOn)
    console.log("light: ",this.state.light)
    console.log("background: ",`url(${this.state.img})`)
    }



    render () {
          var sectionStyle ={
              width: '100px',
              height: '100px',
              textAlign: 'center',
              userSelect: 'none',
              backgroundImage: `url(${this.state.img})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: '100px 100px',
              margin: 'auto',
              // border: '3px solid'
          }

        return(
            <div className="box-container">
              <div style={sectionStyle}  className="light-bulb"></div>

              <div className="switch-container">
                  <label>
                      <input ref="switch" checked={ this.state.isOn } onChange={ this.handleChange.bind(this) } className="switch" type="checkbox" />
                      <div>
                          <div>
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