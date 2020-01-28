import React from "react"
import { EnergijaDumb } from "../dumbComponents/EnergijaDumb"

export class EnergijaSmart extends React.Component{
    state = {
        dob:"",
        dobError:"",
        kilaza:"",
        kilazaError:"",
        visina:"",
        visinaError:"",
        tjelesnaAkt:"",
        tjelesnaAktError:"",
        spol:"",
        spolError:"",
        bazalni:"",
        ukupno:""
    }

    validacija = () => {
        let dobErr = ""
        let kilazaErr = ""
        let visinaErr = ""
        let tjelesnaAktErr = ""
        let spolErr = ""

        if(this.state.dob === ""){
            dobErr = "Polje ne smije ostati prazno"
        }

        if(this.state.kilaza === ""){
            kilazaErr = "Polje ne smije ostati prazno"
        }

        if(this.state.visina === ""){
            visinaErr = "Polje ne smije ostati prazno"
        }

        if(this.state.tjelesnaAkt === ""){
            tjelesnaAktErr = "Morate odabrati jedno od ponuđenog"
        }

        if(this.state.spol === ""){
            spolErr = "Morate odabrati spol"
        }

        if(dobErr || visinaErr || kilazaErr || tjelesnaAktErr || spolErr){
            this.setState({dobError: dobErr, visinaError: visinaErr, kilazaError: kilazaErr, tjelesnaAktError: tjelesnaAktErr, spolError: spolErr})
            return false
        }else{
            this.setState({dobError: "", visinaError: "", kilazaError: "", tjelesnaAktError: "", spolError: ""})
            return true
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleIzracunaj = () => {
        const dob = parseFloat(this.state.dob)
        const kilaza = parseFloat(this.state.kilaza)
        const visina = parseFloat(this.state.visina)
        const tjelesnaAkt = parseFloat(this.state.tjelesnaAkt)
        const isValid = this.validacija()
        if(isValid){
            if(this.state.spol === "Žensko"){
                const bazalniZ = (10 * kilaza) + (6.25 * visina) - (5 * dob) - 161
                const ukupnoZ = tjelesnaAkt * bazalniZ
                this.setState({ bazalni: bazalniZ, ukupno: ukupnoZ }) 
            }else if(this.state.spol === "Muško"){
                const bazalniM = (10 * kilaza) + (6.25 * visina) - (5 * dob) + 5
                const ukupnoM = tjelesnaAkt * bazalniM
                this.setState({ bazalni: bazalniM, ukupno: ukupnoM })
            }
        }
    }


    render(){
        return <EnergijaDumb onClick={this.handleIzracunaj} onChange={this.handleChange} data={this.state} />
    }
}
