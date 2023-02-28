import { useState } from "react"

import Home from "./pages/home"
import LandingPage from "./pages/landingPage"

import "./styles/displays.css"
import "./styles/texts.css"
import "./styles/spaces.css"
import "./styles/buttons.css"

function App() {
  const [page, setPage] = useState("LandingPage")
  const [valuesList, setValuesList] = useState([])
  const [filter, setFilter] = useState("Todos")

  return page === "LandingPage" ? (
    <LandingPage setPage={setPage} />
  ) : (
    <Home
      setPage={setPage}
      valuesList={valuesList}
      setValuesList={setValuesList}
      filter={filter}
      setFilter={setFilter}
    />
  )
}

export default App
