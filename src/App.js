import React from "react"
import { Header } from "./dumbComponents/Header"
import { Footer } from "./dumbComponents/Footer"
import { EnergijaSmart } from "./smartComponents/EnergijaSmart"
import { RegistracijaSmart } from "./smartComponents/RegistracijaSmart"
import { PrijavaSmart } from "./smartComponents/PrijavaSmart"
import { WebShopSmart } from "./smartComponents/WebShopSmart"
import { BioDumb } from "./dumbComponents/BioDumb"
 
export class App extends React.Component{
  state = {
    page: "bio"
  }

  handleWebshop = () => {
    this.setState({ page: "webshop"})
  }

  handleHome = () => {
    this.setState({ page: "home" })
  }

  handleRegistracija = () => {
    this.setState({ page: "registracija" })
  }

  handlePrijava = () => {
    this.setState({ page: "prijava" })
  }

  handleBio = () => {
    this.setState({ page: "bio"})
  }

  rendering = () => {
    if(this.state.page === "prijava"){
      return <PrijavaSmart/>
    }
    if(this.state.page === "home"){
      return <EnergijaSmart/>
    }

    if(this.state.page === "registracija"){
      return <RegistracijaSmart/>
    }

    if(this.state.page === "webshop"){
      return <WebShopSmart/>
    }

    if(this.state.page === "bio"){
      return <BioDumb/>
    }
  }

  render(){
    return(
      <div>
        <Header handleBio={this.handleBio} handleWebshop={this.handleWebshop} handleRegistracija={this.handleRegistracija} handleHome={this.handleHome} handlePrijava={this.handlePrijava} />
        {this.rendering()}
        <Footer/>         
      </div>
    )
  }
}
