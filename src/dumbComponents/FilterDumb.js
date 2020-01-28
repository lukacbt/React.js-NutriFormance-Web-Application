import React from "react"

export function FilterDumb(props) {
    return(
        <div id="filter">
            <p id="rasponCijene">
                <span id="odabir">Raspon cijene: (0 - {props.raspon}) </span>
                <span>0
                <input
                id="rasponBar"
                onChange={props.handleChange}
                name="raspon"
                type="range"
                min="0"
                max="199"
                />
                199</span>
                <button className="Btn" onClick={props.handleFilter} >Filtriraj</button>
            </p>
            <select name="sort" 
            value={props.sort} 
            onChange={props.handleChange}
            className="Btn"
            >
                <option value="" >---Odaberite---</option>
                <option value="popularnost">Popularnost</option>
                <option value="najskuplje" >Najskuplje -> najjeftinije</option>
                <option value="najjeftinije" >Najjeftinije -> najskuplje </option>
                <option value="abeceda" >A -> Z</option>
                <option value="kontraAbeceda" >Z -> A</option>
            </select>
            <button className="Btn" onClick={props.handleClickSort}>Sortiraj</button>

        </div>
    )
}