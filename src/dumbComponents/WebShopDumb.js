import React from "react"

export class WebShopDumb extends React.Component{

    handleMouseOver = () => {
        this.props.handleMouseOver(this.props.id, this.props.index)
    }

    handleMouseOut = () => {
        this.props.handleMouseOut(this.props.id, this.props.index)
    }

    handleKolicina = (e) => {
        this.props.handleKolicina(this.props.index, e.target.value)
    }

    handleVelicinaS = () => {
        this.props.handleVelicinaS("S", this.props.index)
    }

    handleVelicinaM = () => {
        this.props.handleVelicinaM("M", this.props.index)
    }

    handleVelicinaL = () => {
        this.props.handleVelicinaL("L", this.props.index)
    }

    handleVelicinaXL = () => {
        this.props.handleVelicinaXL("XL", this.props.index)
    }

    handleVelicinaXXL = () => {
        this.props.handleVelicinaXXL("XXL", this.props.index)
    }

    handleDodaj = () => {
        this.props.handleDodaj(this.props.index)
    }

    render(){
        return(            
            <div className="majica">
                <img 
                className="slikaMajica"
                onMouseOver={this.handleMouseOver} 
                onMouseOut={this.handleMouseOut}
                src={this.props.majica.src} 
                width="300px" 
                height="290px" 
                alt="#"
                />
                <h5>Naziv: {this.props.majica.naziv} </h5>
                <p>Cijena: {this.props.majica.cijena} HRK </p>
                <p>Veličina: {this.props.majica.velicina} 
                <span id="velicina" onClick={this.handleVelicinaS} className="velicinaBtn">S</span>
                <span onClick={this.handleVelicinaM} className="velicinaBtn">M</span>
                <span onClick={this.handleVelicinaL} className="velicinaBtn">L</span>
                <span onClick={this.handleVelicinaXL} className="velicinaBtn">XL</span>
                <span onClick={this.handleVelicinaXXL} className="velicinaBtn">XXL</span> </p>
                <p>
                    <label>Količina:</label>
                    <input
                    onChange={this.handleKolicina}
                    ref="novaKolicina"
                    value={this.props.majica.kolicina}
                    min="1"
                    type="number"
                    className="kolicinaInput"
                    />
                </p>
                <button onClick={this.handleDodaj} id="kosaricaBtn">Dodaj u košaricu</button>
            </div>
        )
    } 
}