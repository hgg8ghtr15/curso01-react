import { Component} from "react"

class Button extends Component {
  render() {
    return (

      <button>{this.props.children}</button>
    )
  }
}

//Exportar função auto declarativa
export let FuncaoATeste = () => {
  console.log("Bem vindo")
}

//exportar de forma Padão
export default Button