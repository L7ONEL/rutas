import { Component } from "react";
import { Redirect, Route, Switch } from "wouter";
import Login from "./login/Login";
import Registro from "./login/Registro";
import Alumnos from "./alumnos/Alumnos";
import Cursos from "./alumnos/Cursos"
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <>
        {/* header */}
        <Switch>
          <Route path="/"><Redirect to = "/login" /></Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registro">
            <Registro />
          </Route>

          <Route path="/alumnos">
            <Alumnos nombre={["Juan", "Pablo", "Catalina", "Lucas", "Guillermina"]} />
          </Route>

          <Route path="/cursos">
            <Cursos curso={["7mo 2da", "7mo 7ma", "6to 5ta"]} />
          </Route>

          <Route>ERROR 404</Route>

        </Switch>
        {/* footer */}
      </>
    )
  }
}