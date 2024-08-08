import { Component } from 'react';
import Boton from '../comun/Boton';

export default class Alumnos extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
      console.log({
        id: this.props.id, 
      })
    }
    
  render() {
    return (
      <div className='Contenedor'>
        Componente Alumnos

        <div style={{marginTop: "20px"}}>
          <Boton ruta = '/login'>ir a login</Boton>
          <Boton ruta = '/cursos'>ir a cursos</Boton>
        </div>
      </div>
    )
  }
}
