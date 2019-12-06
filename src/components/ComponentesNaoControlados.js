import React, { Component } from 'react'



class ComponentesNaoControlados extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.fileInput = React.createRef()
    }
    handleSubmit(event) {
        event.preventDefault()

        alert (`Arquivo Selecionado - ${
            this.fileInput.current.files[0].name
        }`)
    }

    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'columns'}}>
                <label>
                    Upload de Arquivo:
                    <input type="file" ref={ this.fileInput }/>
                </label>
                <button type="submit">Enviar</button>
            </form>
            </>
        )
    }
}

export default ComponentesNaoControlados;