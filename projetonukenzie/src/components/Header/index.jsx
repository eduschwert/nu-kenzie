import React from "react"

import "./style.css"

import Logo from "../../assets/homeLogo.svg"

const Header = ({ setPage }) => {
  return (
    <header className="header-main">
      <div className="container flex justify-between align-center">
        <img className="logo" src={Logo} alt="" />
        <button
          onClick={() => setPage("LandingPage")}
          className="btn btn-secondary btn-color-grey"
        >
          Inicio
        </button>
      </div>
    </header>
  )
}

export default Header
