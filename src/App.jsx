import React, {Component} from 'react'

function loadLocalStorage(chave, item){
    window.localStorage.setItem(chave, JSON.stringify(item));
}

function readLocalStorage(chave){
    const imagens = JSON.parse(window.localStorage.getItem(chave));
    return imagens;
}

class App extends Component{
    state = {
        data: [],
    }

    componentDidMount(){ 
        const {elemento} = this.props
        const url = 'https://arq-json-server-1.andreianuness.repl.co/'

        if (readLocalStorage(elemento) !== true){
            fetch(url+elemento)
                .then((result) => result.json())
                .then((result) => {
                    loadLocalStorage(elemento, result)
                    this.setState({
                        data: result,
                    })
                })
        } else {
            this.setState(
                {
                    data: readLocalStorage(elemento)
                }
            )
        }   
    }
          
    render(){
        const {data} = this.state

        const result = data.map((entry, index) => {
            return <img src={entry.src} key={index} alt="" />
        })

        return result
    }
}

export default App;

