import React, { Component } from 'react'

export default class FormularioGasto extends Component {

    //refs para los campos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();
    
    crearGasto = (e) => {
        //Prevenir el defaul
        e.preventDefault();

        //crear el objeto con los datos
        const gasto = {
            nombreGasto : this.nombreGastoRef.current.value,
            cantidadGasto : this.cantidadGastoRef.current.value
        }
        console.log(gasto);
        

        //agregarlo y enviarlo por props
        console.log(`Se agrego el gasto ${gasto}`);
        
        this.props.agregarGasto(gasto);

        //resetear el formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
    <h2>Agrega tus gastos hormiga aqui</h2>
    <div className="campo">
        <label>Nombre Gasto</label>
        <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Cigarro" />
    </div>

    <div className="campo">
        <label>Cantidad</label>
        <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. $5" />
    </div>

    <input className="button-primary u-full-width" type="submit" value="Agregar" />
</form>
        )
    }
}
