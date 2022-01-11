import React, { Component } from "react";
import  FormularioCadastro  from "./componentes/FormularioDeNotas";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeNotas from "./componentes/ListaDeNotas";

class App extends Component {

  criarNota(titulo, texto){
    console.log('uma nova nota foi criada ' + titulo + " " + texto)
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;