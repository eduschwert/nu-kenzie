import React from "react"

import "./style.css"

import Img from "../../assets/landingPageImg.svg"
import Logo from "../../assets/landingPageLogo.svg"

const LandingPage = ({ setPage }) => {
  return (
    <div className="landingPage-bg">
      <div className="container">
        <main className="landingPage-main">
          <div className="flex flex-col gap-175r">
            <img className="logo mb-0156r" src={Logo} alt="Nu Kenzie Logo" />
            <h1 className="extraBold size-2375r lh-3r color-white">
              Centralize o controle das suas finanças
            </h1>
            <small className="regular size-1r color-white">
              de forma rápida e segura
            </small>
            <button
              onClick={() => setPage("home")}
              className="btn btn-primary btn-color-primary btn-landing-page"
            >
              Iniciar
            </button>
          </div>

          <img className="landingPage-img" src={Img} alt="" />
        </main>
      </div>
    </div>
  )
}

export default LandingPage
