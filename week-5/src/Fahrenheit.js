import React, { Component } from 'react'
export default class Fahrenheit extends Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <div>{this.props.FahrenheitValue} Fahrenheit</div>
      )
    }
}
