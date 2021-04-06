import React from "react"
import { Component } from "react"

// export let Personagem = (props) =>{
//   return (
// <div>Personagem</div>
//   )
// }

class Personagem extends Component {
  state = {
    personagens: [],
  }

  // executa antes da renderização
  async componentWillMount(){
    try{
      let response = await fetch("https://pokeapi.co/api/v2/pokemon")
      let dataJson = await response.json()
      this.setState({ personagens: dataJson.results })
    }
    catch(error){
      alert(error)
    }
  }
  render() {
    let {personagens} = this.state
    return (
      <div>
        {
          personagens.map(
            personagem =>{
              return (
                <div key={personagem.id}>
                  {personagem.name}
                </div>
              )
            }
          )
        }
      </div>
    )
  }
}
export default Personagem
