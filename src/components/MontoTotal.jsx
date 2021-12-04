
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      min: this.props.min,
      max: this.props.max,
      value: this.props.min,
      esMonto: this.props.esMonto,
    };
  }
  onInputChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
    if (e.target.value >= this.props.min && e.target.value <= this.props.max) {
      if (this.state.esMonto) {
        this.props.monto(e.target.value);
      }
      else {
        this.props.plan(e.target.value);
      }
    }

  };
  onSliderChange = value => {
    this.setState({ value });

    if (this.state.esMonto) {
      this.props.monto(value);
    }
    else {
      this.props.plan(value);
    }
  };

  render() {
    return (
      <div className="simulacion">
        <div className="titulo-sec">
          <label className="titulo">{this.props.title}</label>

          <div className="total">
            <span>{this.props.signo}
              <input
                type="number"
                value={this.state.value}
                onChange={this.onInputChange}
              />
            </span>
          </div>
        </div>
        <br />
        <br />
        <Slider
          className="slider"
          value={this.state.value}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
        />
        <br />
        <div className="rango">
          <h4 className="valorminimo">{this.props.signo}{this.state.min}</h4>
          <h4 className="valormaximo">{this.props.signo}{this.state.max}</h4>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
