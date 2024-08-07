import React, { Component } from 'react'

export default class Registro extends Component {
  render() {
    return (
      <div className='Contenedor'>
        <input type="text" placeholder='Nombre de usuario' />
        <input type="text" placeholder='Contraseña' />
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="number" placeholder='Fecha de nacimiento' />

        <Boton ruta = '/login'>Registrar usuario</Boton>
      </div>
    )
  }
}
