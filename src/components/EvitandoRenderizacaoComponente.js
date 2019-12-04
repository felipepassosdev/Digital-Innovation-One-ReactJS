import React, { Component } from 'react'
    const hasCustumer = true
    const custumer = 'Felipe Passos' 

    const showCustumer = () => {
        if(!hasCustumer) return null

        return (
            <>
                {custumer}
            </>
        )
    }
class EvitandoRenderizacaoComponente extends Component {

    render() {
        return (
            <>
                {
                <h1> {showCustumer() }</h1>
                }
            </>   
        )
    }
}

export default EvitandoRenderizacaoComponente;