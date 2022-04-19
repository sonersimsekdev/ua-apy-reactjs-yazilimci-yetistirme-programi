import React, { Component } from 'react'
export default class Kelvin extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>{this.props.KelvinValue} Kelvin</div>
        )
    }
}


