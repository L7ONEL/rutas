import { Component } from 'react';
import Boton from '../comun/Boton';
import Linea from '../comun/Linea'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

  render() {
    return (
      <div className='Contenedor'>
        <h2>INICIAR SESIÓN</h2>

        <input type="text" placeholder='Nombre de usuario' />
        <input type="password" placeholder='Contraseña' />

        <p>¿No tenés un usuario registrado? <Linea ruta = '/registro'>Registrarse</Linea></p>
        
        <Boton ruta = '/alumnos'>Iniciar sesión</Boton>
      </div>
    )
  }
}
