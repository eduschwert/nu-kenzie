import React from "react"

import { useState } from "react"

import "./style.css"

const HomeForm = ({ valuesList, setValuesList, valuesListFiltered }) => {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [valueType, setValueType] = useState("Entrada")
  const [counter, setCounter] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTransation =
      valueType === "Entrada"
        ? {
            description,
            value: +value,
            valueType,
            id: counter,
          }
        : {
            description,
            value: -value,
            valueType,
            id: counter,
          }
    setValuesList((previousList) => [...previousList, newTransation])

    setDescription("")
    setValue("")

    setCounter(counter + 1)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="form-label mb-0756r" htmlFor="inputDescription">
          Descrição
        </label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          className="input-text mb-0275r"
          id="inputDescription"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          required
        />
        <small className="regular size-075r color-grey-3 mb-1106r">
          Ex: Compra de roupas
        </small>
        <div className="flex flex-col justify-between gap-225r mb-1188r desk-home-form-button">
          <div className="flex flex-col gap-0563r">
            <label className="form-label" htmlFor="inputValue">
              Valor
            </label>
            <input
              onChange={(event) => setValue(event.target.value)}
              className="input-numberSelect input-bg"
              id="inputValue"
              type="number"
              placeholder="1"
              value={value}
              required
            />
          </div>
          <div className="flex flex-col gap-0563r">
            <label className="form-label" htmlFor="inputValueType">
              Tipo de valor
            </label>
            <select
              defaultValue="Entrada"
              onChange={(event) => setValueType(event.target.value)}
              className="input-numberSelect"
              id="inputValueType"
            >
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
          <div className="flex flex-col gap-0563r"></div>
        </div>
        <button type="submit" className="btn btn-primary btn-color-primary">
          Inserir valor
        </button>
      </form>
    </div>
  )
}

export default HomeForm
