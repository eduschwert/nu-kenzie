import React from "react"

const CardFilter = ({ valuesList, setListFilter, filter, setFilter }) => {
  const categories = ["Todos", "Entrada", "Saida"]
  return (
    <div className="flex justify-between align-center ">
      <h2 className="bold size-1r color-grey-4">Resumo financeiro</h2>
      <div className="flex gap-1r">
        {categories.map((category, i) => (
          <button
            key={i}
            onClick={() => {
              setFilter(category)
              if (category === "Todos") {
                setListFilter([...valuesList])
              } else {
                setListFilter(
                  valuesList.filter(
                    (transation) => transation.valueType === category
                  )
                )
              }
            }}
            className={
              filter === category
                ? "btn btn-secondary btn-color-grey btn-color-grey-active"
                : "btn btn-secondary btn-color-grey "
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CardFilter
