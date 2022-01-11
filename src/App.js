import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas.jsx/listaDeNotas";
import  FormularioCadastro  from "./componentes/FormularioDeNotas/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;