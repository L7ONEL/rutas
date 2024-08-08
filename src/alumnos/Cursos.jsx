import { Component } from 'react';
import Boton from '../comun/Boton';

export default class Alumnos extends Component {
    constructor(props){
        super(props);
        this.state = {
          cursos: []
        }
    }

    componentDidMount(){
      this.setState({cursos: this.props.curso})
    }
    
  render() {
    return (
      <div className='Contenedor'>
        <h2>CURSOS</h2>

        <table>
          <tbody>
              {this.state.cursos.map((cont, index) => 
                <tr>{cont}</tr>
              )}
          </tbody>
        </table>

        <div style={{marginTop: "20px"}}>
            <Boton ruta = '/login'>Iniciar sesión con otra cuenta</Boton>
            <Boton ruta = '/alumnos'>Ir a Alumnos</Boton>
        </div>
      </div>
    )
  }
}