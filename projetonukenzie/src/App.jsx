import { useState } from "react"

import Home from "./pages/home"
import LandingPage from "./pages/landingPage"

import "./styles/displays.css"
import "./styles/texts.css"
import "./styles/spaces.css"
import "./styles/buttons.css"

function App() {
  const [page, setPage] = useState("LandingPage")
  return page === "LandingPage" ? (
    <LandingPage setPage={setPage} />
  ) : (
    <Home setPage={setPage} />
  )
}

export default App
