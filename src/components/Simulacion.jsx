import React from "react";
import DynamicBounds from "./MontoTotal";
import NumberFormat from 'react-number-format';




export default class Simulacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: 3,
      monto: 5000,
      detalle: false,
    }
  }

  handleMonto = (monto) => {
    this.setState({
      monto: monto,
    });
  }
  handlePlan = (plan) => {
    this.setState({
      plan: plan,
    });
  }
  handleCredito() {
    alert("obtuviste  un credito!")
  }
  handleDetalle = () => {
    this.setState({
      detalle: !this.state.detalle,
    });
  }

  render() {

    const detalleStyle = this.state.detalle ? { display: 'block' } : { display: 'none' };
    return (
      <>
        <DynamicBounds esMonto={true} title="Monto total" min={5000} max={50000} signo="$" monto={(monto) => this.handleMonto(monto)} />
        <DynamicBounds title="Plazo" esMonto={false} min={3} max={24} plan={(plan) => this.handlePlan(plan)} />

        <div className="cuota-sec">

          <h2>Cuota Fija Por Mes: <b>
            <NumberFormat value={(this.state.monto / this.state.plan).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></b></h2>
        </div>

        <div className="botones">
          <button onClick={this.handleCredito} className="credito">Obtene Credito</button>
          <button onClick={this.handleDetalle} className="detalle">Ver detalle de cuotas</button>
        </div>

        <div className="detalleCuota" style={detalleStyle}  >
          <h2>Detalle de cuotas</h2>
          <p>Monto total a Pagar: <b>${this.state.monto}</b></p>
          <p>plazo total de: <b>{this.state.plan} Cuotas</b></p>
          <p>Cuota Fija por mes: <b><NumberFormat value={(this.state.monto / this.state.plan).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></b></p>
        </div>
      </>
    );
  }
}

