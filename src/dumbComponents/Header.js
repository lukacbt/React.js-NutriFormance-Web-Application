import React from "react"

export function Header(props){
    return(
        <navbar>
            <div id="navbar">
                <div>
                    <div id="logo">
                        <span onClick={props.handleHome} >NutriFormance</span>
                    </div>
                    <div id="regBtn">
                        <span id="registracijaBtn" onClick={props.handleRegistracija} className="regBtn">Registracija</span>
                        <span onClick={props.handlePrijava} className="regBtn">Prijava</span>
                        <span className="regBtn">Odjava</span>
                    </div>
                </div>

                <div id="navBtn">
                    <span onClick={props.handleHome} className="navBtn">Početna</span>
                    <span onClick={props.handleWebshop} className="navBtn">Webshop</span>
                    <span onClick={props.handleBio} className="navBtn">Životopis</span>
                </div>
            </div>
        </navbar>
    )
}