import React, { Component } from 'react';

const mostrarEvento = (e) => {
    console.log('Voce clicou no botão')
    console.log(e.target)
}

const Botao = <button onClick={mostrarEvento}> Mostrar evento</button>


const mostrarValor = (e) => {
    const { value } = e.target
    console.log(value)
}
class ManipulandoEventos extends Component {
  render() {
    return (
      <>
        { Botao }
        <input onChange={ mostrarValor }></input>
      </>
    )
  }

}

export default ManipulandoEventos;
