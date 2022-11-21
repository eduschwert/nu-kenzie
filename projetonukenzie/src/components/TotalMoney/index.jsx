import React from "react"

import "./style.css"

const TotalMoney = ({ listFilter }) => {
  const sum = listFilter.reduce(
    (previous, current) => previous + current.value,
    0
  )
  return (
    <div className="money-box">
      <div className="flex justify-between align-center">
        <span className="bold size-1r color-grey-4">Valor total:</span>
        <span className="bold size-1r color-primary-1">{`$ ${sum}`}</span>
      </div>
      <p className="regular size-075r color-grey-3">
        O valor se refere ao saldo
      </p>
    </div>
  )
}

export default TotalMoney
