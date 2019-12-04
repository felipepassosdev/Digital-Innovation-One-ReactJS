import React, { Component } from 'react';
import './App.css';
import OperadorCondicional from './components/OperadorConcional';
import IFInlineOperadorLogico from './components/IFInlineOperadorLogico&&';



class App extends Component {
  render() {
    return (
      <>
        <IFInlineOperadorLogico />
        <OperadorCondicional />
      </>
    )
  }

}

export default App;

