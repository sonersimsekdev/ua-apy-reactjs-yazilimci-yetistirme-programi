import React, { Component } from 'react'
export default class Fahrenheit extends Component {
    render() {
      return (
        <div>{this.props.FahrenheitValue} Fahrenheit</div>
      )
    }
}
