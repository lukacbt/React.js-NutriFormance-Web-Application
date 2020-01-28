import React from "react"

export function PrijavaDumb(){
    return(
        <div id="prijava">
            <h1>Prijava</h1>

            <div>         
                <p>
                    <span>Unesite korisničko ime: </span>
                    <input 
                    />
                </p>

                <p>
                    <label>Unesite lozinku: </label>
                    <input 
                    />
                </p>
            </div>
            <div id="prijaviMeBtn">
                <hr/>
                <button>Prijavi me</button>
                <hr/>
            </div>

            <h4>Uspješno ste se prijavili!</h4>

        </div>
    )
}