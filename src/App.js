// import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import Button from "./Components/Button" // importando classe formato Defalt
import {FuncaoATeste} from "./Components/Button"// Exportar função auto declarativa

class App extends Component {
  render() {

    FuncaoATeste()

    return (
      <div className="app">
        <header className="App-header">
          <p>Bem Vindo ao react.</p>
          <Button>Salvar</Button>
          <br></br>
          <Button>Excluir</Button>
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