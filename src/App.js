// import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import { FuncaoATeste } from "./Components/Button"// Exportar função auto declarativa
import Button from "./Components/Button" // importando classe formato Defalt

class App extends Component {

  //class fields
  state = {
    contador: 0,
    nome: "",
    idade: 0,
  }

  // Arrowfunction
  adicionar = () => {
    // console.log("Precionado")
    this.setState({ contador: this.state.contador + 1 })
  }

  adiconarNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  adiconarIdade = (event) => {
    this.setState({ idade: event.target.value })
  }

  adiconarIdadeMais = () => {
    let {idade} = this.state
    this.setState({ idade: idade+1 })
  }

  render() {

    FuncaoATeste()
    //Destruct
    let { contador, nome, idade } = this.state

    return (
      <div className="app">
        <header className="App-header">
          <p>Bem Vindo ao react.</p>

          <Button titulo="Botão Salvar" descricao="Salvar os componentes">Salvar</Button>
          <br></br>

          <Button titulo={"botão excluir"} descricao="Excluir os componentes">Excluir</Button>
          <br></br>

          <Button >Defalt</Button>
          <br></br>

          <Button press={this.adicionar}>State</Button>
          <p>Contador : {contador}</p>
          <br></br>

          <label>Nome</label>
          <input onChange={this.adiconarNome}></input>
          <p>{nome}</p>
          
          <br></br>
          <label>Idade</label>
          <input type="number" onChange={this.adiconarIdade}></input>
          <p>Idade: {idade}</p>
          <Button press={this.adiconarIdadeMais}>+ idade</Button>
        </header>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   )
// }

export default App;