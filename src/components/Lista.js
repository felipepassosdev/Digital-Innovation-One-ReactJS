import React, { Component } from 'react'

const listaCliente = [
    {
        id: 'jhil2875',
        nome: 'Felipe'
    },
    {
        id: 'khil2567',
        nome: 'Jhosé'
    },
    {
        id: 'yhzl1547',
        nome: 'Nicolas'
    },
    {
        id: 'fhzl1847',
        nome: 'Luis Eduardo'
    },
    {
        id: 'zxtl2347',
        nome: 'Kauê'
    }
]

const listar = (cliente, index) => {
    return (
        <li key={`cliente-${cliente.id}`}>{cliente.nome}
           {` cliente-${cliente.id}`}
        </li>
    )
}


class Lista extends Component {

    render() {
        return (
            <>
                <ul>
                    {listaCliente.map(listar)}
                </ul>
            </>
        )
    }
}

export default Lista