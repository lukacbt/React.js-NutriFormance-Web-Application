import React from "react"

export function RegistracijaDumb(props){
    return(
        <div id="registracija">
            <h1>Registracija</h1>

            <div>
                <p>
                    <label>Unesite ime: </label>
                    <input 
                    placeholder="Ime"
                    onChange={props.handleChange}
                    name="imeR"
                    type="text"
                    value={props.data.imeR}
                    /><br/>
                    <span className="regError">{props.data.imeErrorR}</span>
                </p>
        
                <p>
                    <label>Unesite prezime: </label>
                    <input 
                    placeholder="Prezime"
                    onChange={props.handleChange}
                    name="prezimeR"
                    type="text"
                    value={props.data.prezimeR}
                    /><br/>
                    <span className="regError">{props.data.prezimeErrorR}</span>
                </p>
            
                <p>
                    <span>Unesite korisničko ime: </span>
                    <input 
                    placeholder="Korisničko ime"
                    onChange={props.handleChange}
                    name="korisnickoImeR"
                    type="text"
                    value={props.data.korisnickoImeR}
                    /><br/>
                    <span className="regError">{props.data.korisnickoImeErrorR}</span>
                </p>

                <p>
                    <label>Unesite lozinku: </label>
                    <input 
                    placeholder="Password"
                    onChange={props.handleChange}
                    name="lozinka1R"
                    type="password"
                    value={props.data.lozinka1R}
                    /><br/>
                    <span className="regError">{props.data.lozinka1ErrorR}</span>
                </p>

                <p>
                    <label>Potvrdite lozinku: </label>
                    <input 
                    placeholder="Password"
                    onChange={props.handleChange}
                    name="lozinka2R"
                    type="password"
                    value={props.data.lozinka2R}
                    /><br/>
                    <span className="regError">{props.data.lozinka2ErrorR}</span>
                </p>

                <p>
                    <label>Unesite e-mail adresu: </label>
                    <input 
                    placeholder="E-mail adresa"
                    onChange={props.handleChange}
                    name="emailR"
                    type="mail"
                    value={props.data.emailR}
                    /><br/>
                    <span className="regError">{props.data.emailErrorR}</span>
                </p>
            </div>
            <div id="registrirajMeBtn">
                <hr/>
                <button onClick={props.handleRegistrirajMe} >Registriraj me</button>
                <hr/>
            </div>

            <h4>{props.data.uspjeh}</h4>



        </div>
    )
}