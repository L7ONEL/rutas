import React, { Component } from 'react';
import Boton from '../comun/Boton';
import Linea from '../comun/Linea';

export default class Registro extends Component {
  render() {
    return (
      <div className='Contenedor'>
        <input type="text" placeholder='Nombre de usuario' />
        <input type="text" placeholder='Contraseña' />
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="number" placeholder='Fecha de nacimiento' />

        <p>¿Ya tenés un usuario registrado? <Linea ruta = '/login'>Iniciar sesión</Linea></p>

        <Boton ruta = '/login'>Registrar usuario</Boton>
      </div>
    )
  }
}
