import React from "react"

import "./style.css"

const Card = ({ valuesList, setValuesList, valuesListFiltered }) => {
  return (
    <ul className="cards-list">
      {valuesListFiltered.length !== 0 ? (
        valuesListFiltered.map((transationFilter, i) => {
          return (
            <li
              className={
                transationFilter.valueType === "Entrada"
                  ? "card-green"
                  : "card-grey"
              }
              key={i}
            >
              <div className="flex flex-col gap-0563r">
                <div className="flex justify-between align-center">
                  <span className="bold size-1r color-grey-4">
                    {transationFilter.description}
                  </span>
                  <div className="flex align-center gap-1688r">
                    <span className="regular size-075r color-grey-4">{`R$ ${transationFilter.value
                      .toString()
                      .replace("-", "")},00`}</span>
                    <button
                      onClick={() =>
                        setValuesList(
                          valuesList.filter(
                            (transation) =>
                              transation.id !== transationFilter.id
                          )
                        )
                      }
                      className="btn btn-trash"
                    ></button>
                  </div>
                </div>
                <p className="regular size-075r color-grey-4">
                  {transationFilter.valueType}
                </p>
              </div>
            </li>
          )
        })
      ) : (
        <></>
      )}
    </ul>
  )
}

export default Card
