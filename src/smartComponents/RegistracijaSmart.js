import React from "react"
import { RegistracijaDumb } from "../dumbComponents/RegistracijaDumb"

export class RegistracijaSmart extends React.Component{

    state = {
        imeR: "",
        prezimeR:"",
        korisnickoImeR:"",
        lozinka1R:"",
        lozinka2R:"",
        emailR:"",
        imeErrorR: "",
        prezimeErrorR:"",
        korisnickoImeErrorR:"",
        lozinka1ErrorR:"",
        lozinka2ErrorR:"",
        emailErrorR:"",
        uspjeh: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    validacijaRegistracija = () => {
        let imeErrR = ""
        let prezimeErrR = ""
        let korisnickoImeErrR = ""
        let lozinka1ErrR = ""
        let lozinka2ErrR = ""
        let emailErrR = ""
        const broj = /^([^0-9]+)$/
        const maloSlovo = /[a-z]/g
        const velikoSlovo = /[A-Z]/g
        const emailTest = /^[\w+\-*_*.*+*]+\w*@[\w\-+_]+\.\w{2,4}\.*\w*$/
        
        if(this.state.imeR === "" || !broj.test(this.state.imeR)){
            imeErrR = "Unesite vaše ime"
        }

        if(this.state.prezimeR === "" || !broj.test(this.state.prezimeR)){
            prezimeErrR = "Unesite vaše prezime"
        }

        if(this.state.korisnickoImeR < 5 || broj.test(this.state.korisnickoImeR)){
            korisnickoImeErrR = "Vaše korisničko ime mora sadržavati 5 ili više znakova te najmanje 1 znamenku"
        }

        if(this.state.lozinka1R < 8 || !this.state.lozinka1R.match(maloSlovo) || !this.state.lozinka1R.match(velikoSlovo) || this.state.lozinka1R.match(broj) ){
            lozinka1ErrR = "Lozinka mora sadržavati minimalno 8 znakova (veliko i malo slovo te broj)"
        }

        if(this.state.lozinka2R !== this.state.lozinka1R){
            lozinka2ErrR = "Lozonke moraju biti identične"
        }

        if(!emailTest.test(this.state.emailR)){
            emailErrR = "Jeste li unijeli ispravan e-mail?"
        }

        if(imeErrR || prezimeErrR || korisnickoImeErrR || lozinka1ErrR || lozinka2ErrR ||emailErrR){
            this.setState({ imeErrorR: imeErrR, prezimeErrorR: prezimeErrR, korisnickoImeErrorR: korisnickoImeErrR, lozinka1ErrorR: lozinka1ErrR, lozinka2ErrorR: lozinka2ErrR, emailErrorR: emailErrR})
            return false
        }else{
            this.setState({ imeErrorR: "", prezimeErrorR: "", korisnickoImeErrorR: "", lozinka1ErrorR: "", lozinka2ErrorR: "", emailErrorR: ""})
            return true
        }    
    }

    handleRegistrirajMe = () => {
        const isValidR = this.validacijaRegistracija()
        if(isValidR){
            this.setState({ uspjeh: "Uspješno ste se registrirali"})
        }else{
            this.setState({ uspjeh: ""})
        }
    }

    render(){
        return <RegistracijaDumb 
        uspjeh={this.state.uspjeh} 
        handleRegistrirajMe={this.handleRegistrirajMe}
        handleChange={this.handleChange} 
        data={this.state}
        />
    }
}