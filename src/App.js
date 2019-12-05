import React, { Component } from 'react';
import './App.css';
import OperadorCondicional from './components/OperadorConcional';
import IFInlineOperadorLogico from './components/IFInlineOperadorLogico&&';
import EvitandoRenderizacaoComponente from './components/EvitandoRenderizacaoComponente';
import Lista from './components/Lista';



class App extends Component {
  render() {
    return (
      <>
        <IFInlineOperadorLogico />
        <OperadorCondicional />
        <EvitandoRenderizacaoComponente />
        <Lista />
      </>
    )
  }

}

export default App;

