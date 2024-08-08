import { Component } from 'react';
import Boton from '../comun/Boton';

export default class Alumnos extends Component {
    constructor(props){
        super(props);
        this.state = {
          alumnos: []
        }
    }

    componentDidMount(){
      this.setState({alumnos: this.props.nombre})
    }
    
  render() {
    return (
      <div className='Contenedor'>
        <h2>ALUMNOS</h2>

        <table>
          <thead>
            <tr>
              <th>Nombres</th>
            </tr>
          </thead>
          <tbody>
              {this.state.alumnos.map((cont, index) => 
                <tr>{cont}</tr>
              )}
          </tbody>
        </table>

        <div style={{marginTop: "20px"}}>
          <Boton ruta = '/login'>Iniciar sesión con otra cuenta</Boton>
          <Boton ruta = '/cursos'>Ir a cursos</Boton>
        </div>
      </div>
    )
  }
}
