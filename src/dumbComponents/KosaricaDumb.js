import React from "react"

export class Kosarica extends React.Component {

    handleRemove = () => {
        this.props.handleRemove(this.props.i)
    }

    handleKolicina = (e) => {
        this.props.handleKolicina(this.props.i, e.target.value)
    }

    render() {
        return(
            <div>
                <hr/>
                <img src={this.props.item.src} width="100px" height="100px" />
                <p>Naziv: {this.props.item.naziv} </p>
                <p>Veličina: {this.props.item.velicina} </p>
                <label>Količina: </label>
                <input
                onChange={this.handleKolicina}
                type="number"
                className="kolicinaInput"
                value={this.props.item.kolicina}
                />
                <p>Cijena: {this.props.item.cijena} HRK </p>
                <button onClick={this.handleRemove} className="Btn">Izbaci</button>
                <hr/>
            </div>
        )
    }

}