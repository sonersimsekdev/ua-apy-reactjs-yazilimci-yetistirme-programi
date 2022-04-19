import React, { Component } from 'react'
export default class Celcius extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>{this.props.CelciusValue} Celcius</div>
      )
    }
}
