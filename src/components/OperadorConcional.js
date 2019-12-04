import React, { Component } from 'react'
// variaveis de elementos
const a = <button>Historico</button>
const b = <button>Cadastrar</button>
const hasCustumer = false

const renderShowHistory = () => (
    <div>
        <h1>Clique para ver historico</h1>
        {b}
    </div>
)

const renderAddCustumer = () => (
    <div>
        <h1>Clique abaixo para cadastrar clientes</h1>
        {b}
    </div>
)

class OperadorCondicional extends Component {
    
    render() {
        return (
            <>
                <h1>IF-ELSE inline c/ operdador condicional</h1>

                {hasCustumer ? renderShowHistory() : renderAddCustumer()}
            </>
        )
    }
}

export default OperadorCondicional