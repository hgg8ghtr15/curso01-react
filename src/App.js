// import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import {FuncaoATeste} from "./Components/Button"// Exportar função auto declarativa
import Button from "./Components/Button" // importando classe formato Defalt

class App extends Component {
  render() {

    FuncaoATeste()

    return (
      <div className="app">
        <header className="App-header">
          <p>Bem Vindo ao react.</p>
          
          <Button titulo="Botão Salvar" descricao="Salvar os componentes">Salvar</Button>
          <br></br>

          <Button titulo={1} descricao="Excluir os componentes">Excluir</Button>
          <br></br>

          <Button>Defalt</Button>
          <br></br>
          
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