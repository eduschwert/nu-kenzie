import React from "react"

const CardFilter = ({ filter, setFilter }) => {
  const categories = ["Todos", "Entrada", "Despesa"]
  return (
    <div className="flex flex-col gap-1r justify-between align-center w-full desk-home-filter-buttons ">
      <h2 className="bold size-1r color-grey-4">Resumo financeiro</h2>
      <div className="flex gap-1r">
        {categories.map((category, i) => (
          <button
            key={i}
            onClick={() => setFilter(category)}
            className={
              filter === category
                ? "btn btn-secondary btn-color-grey btn-color-grey-active"
                : "btn btn-secondary btn-color-grey "
            }
          >
            {category === "Todos" ? "Todos" : `${category}s`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CardFilter
