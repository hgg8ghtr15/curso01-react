// import { Component } from "react"
// import PropTypes from "prop-types"
import React from "react"

let Button = (props) =>{
  return (
    <button onClick={props.press}>{props.children}</button>
  )
}


//stateFull
// class Button extends Component {

//   //copmortamento padrão
//   static defaultProps = {
//     titulo: "Padrão",
//     descricao: "Padrão"
//   }
  
//   //tipagem
//   static propTypes = {
//     titulo: PropTypes.string,
//     descricao: PropTypes.string
//     // descricao: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <>
//         <p>Titulo: {this.props.titulo}</p>
//         <p>Descrissao: {this.props.descricao}</p>
//         <button onClick={this.props.press}>{this.props.children}</button>
//       </>
//     )
//   }
// }

//Exportar função auto declarativa
export let FuncaoATeste = () => {
  console.log("Bem vindo")
}

//exportar de forma Padão
export default Button