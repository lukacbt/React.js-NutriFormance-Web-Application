import React from "react"

export function EnergijaDumb(props){
    return(
        <div id="pocetna">
            <div id="energija">
                <div id="unosInfo">
                    <p><h2>Izračunajte svoje energetske potrebe:</h2>
                    <label>Dob: </label>
                    <input
                    value={props.data.dob}
                    onChange={props.onChange} 
                    placeholder="U godinama"
                    type="number"
                    name="dob"
                    /><br/><span className="errorMsg">{props.data.dobError}</span></p>

                    <p><label>Visina: </label>
                    <input
                    value={props.data.visina}
                    onChange={props.onChange}  
                    placeholder="U centimetrima"
                    type="number"
                    name="visina"
                    /><br/><span className="errorMsg">{props.data.visinaError}</span></p>

                    <p><label>Kilaža:  </label>
                    <input
                    value={props.data.kilaza}
                    onChange={props.onChange}  
                    placeholder="U kilama"
                    type="number"
                    name="kilaza"
                    /><br/><span className="errorMsg">{props.data.kilazaError}</span></p>

                    <p><label>Odaberite spol:</label>
                    <span>Muško</span>
                    <input 
                    value={props.data.spol}
                    onChange={props.onChange} 
                    type="radio"
                    value="Muško"
                    name="spol"
                    />
                    <span>Žensko</span>
                    <input 
                    value={props.data.spol}
                    onChange={props.onChange} 
                    type="radio"
                    value="Žensko"
                    name="spol"
                    /><br/><span className="errorMsg">{props.data.spolError}</span></p>

                    <p><label>Odredite svoju tjelesnu aktivnost:  </label>
                        <select name="tjelesnaAkt" value={props.data.tjelesnaAkt} onChange={props.onChange} >
                        <option value="">
                            ---Odaberite---
                        </option>
                        <option value="1.53">
                            {props.data.spol === "Žensko" ? "Slabo aktivna" : "Slabo aktivan"}
                        </option>
                        <option value="1.76">
                            {props.data.spol === "Žensko" ? "Umjereno aktivna" : "Umjereno aktivan"}
                        </option>
                        <option value="2.25">
                            {props.data.spol === "Žensko" ? "Vrlo aktivna" : "Vrlo aktivan"}
                        </option>
                    </select><br/><span className="errorMsg">{props.data.tjelesnaAktError}</span>
                    </p>
                </div>
                <div id="unosBtn">
                    <hr/>
                    <button className="Btn" onClick={props.onClick}>Izračunaj</button>  
                    <hr/>
                </div>
                <div id="iznosUkupno">
                    <h4>{props.data.bazalni !== "" ? `Vaš bazalni metabolizam iznosi: ${props.data.bazalni} kcal` : "- - - - -"}</h4>
                    <h4>{props.data.ukupno !=="" ? `Vaše ukupne energetske potrebe iznose: ${props.data.ukupno} kcal` : null}</h4>
                </div>
            </div>
        </div>
    )
}