import { Component } from 'react';
import Boton from '../comun/Boton';

export default class Alumnos extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
      console.log({
        curso: this.props.curso
      })
    }
    
  render() {
    return (
      <div className='Contenedor'>
        Componente Cursos

        <div style={{marginTop: "20px"}}>
            <Boton ruta = '/login'>ir a login</Boton>
            <Boton ruta = '/alumnos'>ir a Alumnos</Boton>
        </div>
      </div>
    )
  }
}