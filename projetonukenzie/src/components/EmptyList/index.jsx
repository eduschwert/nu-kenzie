import React from "react"

import EmptyListImg from "../../assets/emptyList.svg"

const EmptyList = ({ text }) => {
  const str = text ? text : "Você ainda não possui nenhum lançamento"
  return (
    <div>
      <p className="bold size-1375r color-grey-4 mb-1688r">{str}</p>
      <img className="w-full mb-2r" src={EmptyListImg} alt="" />
    </div>
  )
}

export default EmptyList
