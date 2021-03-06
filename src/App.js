import React, { Component } from 'react';
import './App.css';
import OperadorCondicional from './components/OperadorConcional';
import IFInlineOperadorLogico from './components/IFInlineOperadorLogico&&';
import EvitandoRenderizacaoComponente from './components/EvitandoRenderizacaoComponente';
import Lista from './components/Lista';
import ManipulandoEventos from './components/ManipulandoEventos';
import ComponentesControlados from './components/ComponentesControlados';
import ComponentesNaoControlados from './components/ComponentesNaoControlados';



class App extends Component {
  render() {
    return (
      <>
        <IFInlineOperadorLogico />
        <OperadorCondicional />
        <EvitandoRenderizacaoComponente />
        <Lista />
        <ManipulandoEventos />
        <ComponentesControlados />
        <ComponentesNaoControlados />
      </>
    )
  }

}

export default App;

