import React, { Component } from "react";
import Celcius from "./Celcius"
import Fahrenheit from "./Fahrenheit"
import Kelvin from "./Kelvin"
export default class ShowData extends Component {


    constructor() {
        super();
        this.state = {
            defaultCelcius: 1,
            fahrenheitC: 32,
            kelvinC: 274.15,
        }
    }


    render() {
        let DataConvertor = () => {
            this.setState({
                defaultCelcius: this.state.defaultCelcius + 1,
                fahrenheitC: this.state.defaultCelcius * 1.8 + 32,
                kelvinC: this.state.defaultCelcius + 274.15,
            })
        }

        return (
            <div className="container-fluid  d-flex  bg-dark justify-content-center align-items-center vh-100 vw-100">
                <div className="container text-center  bg-dark text-white  ">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-1 fw-normal">Hava Nasıl ?</h1>
                        </div>
                        <div className="row">
                            <h2>Şuan sıcaklık: {this.state.defaultCelcius} derece.</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2 m-1">
                                <button className="btn btn-outline-light fw-bold" onClick={() => DataConvertor()}>Sıcaklık Artır</button>

                            </div>
                        </div>
                    </div>
                    <div className="row fw-bold justify-content-center text-center">
                        <div className="col-4"> <Celcius CelciusValue={this.state.defaultCelcius} /></div>
                        <div className="col-4"><Fahrenheit FahrenheitValue={this.state.fahrenheitC} /></div>
                        <div className="col-4"><Kelvin KelvinValue={this.state.kelvinC} /></div>
                    </div>
                </div>
            </div>
        );
    }
}
