import React from 'react';
import ListaDeNotas from './componentes/listaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder='Título' />
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

//react -> lib
//React -> ecossistema
export default App;
