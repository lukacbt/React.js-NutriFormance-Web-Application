import React from "react"
import { WebShopDumb } from "../dumbComponents/WebShopDumb"
import { FilterDumb } from "../dumbComponents/FilterDumb"
import { majiceSve } from "../dumbComponents/MajiceSve"
import { Kosarica } from "../dumbComponents/KosaricaDumb"

export class WebShopSmart extends React.Component{
    state = {
        webshop: "webshop",
        sort:"",
        raspon: 199,
        majice: majiceSve,
        kosarica:[]
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleClickSort = () => {
        if(this.state.sort === "najskuplje"){
            let arr = this.state.majice
            arr.sort(function(a, b){return b.cijena - a.cijena})
            this.setState({ majice: arr})
        }
        if(this.state.sort === "najjeftinije"){
            let arr = this.state.majice
            arr.sort(function(a, b){return a.cijena - b.cijena})
            this.setState({ majice: arr })
        }
        if(this.state.sort === "abeceda"){
            let arr = this.state.majice
            arr.sort(function(a, b){
                let x = a.naziv.toLowerCase()
                let y = b.naziv.toLowerCase()
                if(x < y){return -1}
                if(x > y){return 1}
                return 0
            })
            this.setState({ majice: arr })
        }
        if(this.state.sort === "kontraAbeceda"){
            let arr = this.state.majice
            arr.sort(function(a, b){
                let x = b.naziv.toLowerCase()
                let y = a.naziv.toLowerCase()
                if(x < y){return -1}
                if(x > y){return 1}
                return 0
            })
            this.setState({ majice: arr })
        }
        if(this.state.sort === "popularnost"){
            let arr = this.state.majice
            arr.sort(function(a, b){return a.id - b.id})
            this.setState({ majice: arr })
        }
    }

    filterCijene = () => {
        let arr = majiceSve
        let rasponCijene = this.state.raspon
        let newArr = arr.filter(function(el){
            return el.cijena <= rasponCijene
        })
        this.setState({ majice: newArr, sort:"" })
    }

    handleClickShopNav = () => {
        if(this.state.webshop === "webshop"){
            this.setState({ webshop: "kosarica" })
        }else{
            this.setState({ webshop: "webshop"})
        }
    }

    handleKolicina = (i, novaKolicina) => {
        let arr = this.state.kosarica
        arr[i].kolicina = novaKolicina
        this.setState({ kosarica: arr })
    }

    handleVelicinaS = (novaVelicina, i) => {
        let arr = this.state.majice
        arr[i].velicina = novaVelicina
        this.setState({ majice: arr })
    }
    handleVelicinaM = (novaVelicina, i) => {
        let arr = this.state.majice
        arr[i].velicina = novaVelicina
        this.setState({ majice: arr })
    }
    handleVelicinaL = (novaVelicina, i) => {
        let arr = this.state.majice
        arr[i].velicina = novaVelicina
        this.setState({ majice: arr })
    }
    handleVelicinaXL = (novaVelicina, i) => {
        let arr = this.state.majice
        arr[i].velicina = novaVelicina
        this.setState({ majice: arr })
    }
    handleVelicinaXXL = (novaVelicina, i) => {
        let arr = this.state.majice
        arr[i].velicina = novaVelicina
        this.setState({ majice: arr })
    }

    handleDodaj = (i) => {
        const arrWebshop = this.state.majice
        if(arrWebshop[i].velicina === ""){
            alert("Morate odabrati veličinu majice!")
        }else{
            this.setState({
                kosarica: [...this.state.kosarica, arrWebshop[i]]
            })
        }
    }

    handleRemove = (i) => {
        let arr = this.state.kosarica
        arr.splice(i, 1)
        this.setState({ kosarica: arr })
    }

    handleKupi = () => {
        this.setState({ kosarica: []})
        alert("Vaša je kupnja uspješno izvršena!")
    }

    prikazRacun = () => {
        let arr = this.state.kosarica
        let ukupno = 0
        for(let i = 0; i < arr.length; i++){
            ukupno = ukupno + (arr[i].cijena * arr[i].kolicina)
        }
        return `${ukupno} HRK`
    }

    handleMouseOver = (i, id) => {
        let arr = this.state.majice
        arr[id].src = require(`../Majice/majica${i}Back.png`)
        this.setState({ majice: arr })
    }

    handleMouseOut = (i, id) => {
        let newArr = this.state.majice
        newArr[id].src = require(`../Majice/majica${i}Front.png`)
        this.setState({ majice: newArr })
    }

    prikazMajica = (majica, i) =>{
        return(
            <WebShopDumb 
            handleVelicinaS={this.handleVelicinaS}
            handleVelicinaM={this.handleVelicinaM}
            handleVelicinaL={this.handleVelicinaL}
            handleVelicinaXL={this.handleVelicinaXL}
            handleVelicinaXXL={this.handleVelicinaXXL}
            //handleKolicina={this.handleKolicina}
            handleDodaj={this.handleDodaj}
            handleMouseOut={this.handleMouseOut} 
            handleMouseOver={this.handleMouseOver} 
            key={i}
            index={i} 
            id={majica.id} 
            majica={majica} 
            />
        )
    }

    prikazKosarica = (item, i) => {
        return(
            <Kosarica
            handleKolicina={this.handleKolicina}
            handleRemove={this.handleRemove}
            item={item}
            key={i}
            i={i}
            id={item.id}
            />
        )
    }
    prikazUkupno = () => {
        let arr = this.state.kosarica
        if(arr.length > 0){
            return(
                <div>
                <p>Ukupno: {this.prikazRacun()} </p>
                <button onClick={this.handleKupi} className="Btn">Kupi</button>
                <hr/>
                </div>
            )
        }else{
            return(
                <div>
                    <h5>Vaša je košarica prazna</h5>
                </div>
            )
        }
    }

    rendering = () => {
        if(this.state.webshop === "webshop"){
            return(
                <div id="webshop">
                    <h2>NutriFormance Webshop</h2>
                    <div id="shopKosarica">
                        <hr/>
                        <p onClick={this.handleClickShopNav} className="shopKosaricaNav">Košarica</p>
                        <hr/>
                    </div>
                    <FilterDumb 
                    handleFilter={this.filterCijene}
                    raspon={this.state.raspon}
                    sort={this.state.sort} 
                    handleChange={this.handleChange} 
                    handleClickSort={this.handleClickSort} 
                    />
                    <div id="majice">
                        {this.state.majice.map(this.prikazMajica)}
                    </div>
                </div>
            )
        }else if (this.state.webshop === "kosarica"){
            return (
                <div id="webshop">
                    <h2>NutriFormance Košarica</h2>
                    <div id="shopKosarica">
                        <hr/>
                        <p className="shopKosaricaNav"onClick={this.handleClickShopNav}>Webshop</p>
                        <hr/>
                    </div>
                    <div id="majice">
                        {this.state.kosarica.map(this.prikazKosarica)}
                    </div>
                   {this.prikazUkupno()}
                </div>
            )
        }
    }

    render(){
        return this.rendering()
    }
}