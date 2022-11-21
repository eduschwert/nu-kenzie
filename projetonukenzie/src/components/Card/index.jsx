import React from "react"

import "./style.css"

import TrashImg from "../../assets/trashDefault.svg"
import TrashImgHover from "../../assets/trashHover.svg"

const Card = ({ valuesList, setValuesList, listFilter, setListFilter }) => {
  return (
    <ul className="cards-list">
      {listFilter.length !== 0 ? (
        listFilter.map((transation, i) => {
          return (
            <li
              className={
                transation.valueType === "Entrada" ? "card-green" : "card-grey"
              }
              key={i}
            >
              <div className="flex flex-col gap-0563r">
                <div className="flex justify-between align-center">
                  <span className="bold size-1r color-grey-4">
                    {transation.description}
                  </span>
                  <div className="flex align-center gap-1688r">
                    <span className="regular size-075r color-grey-4">{`R$ ${transation.value},00`}</span>
                    <button
                      onClick={() =>
                        setValuesList(
                          valuesList.filter(
                            (transation2) =>
                              !(transation.value === transation2.value)
                          )
                        )
                      }
                      className="btn btn-trash"
                    >
                      <img
                        className="btn-trash-default"
                        src={TrashImg}
                        alt="Trash"
                      />
                      <img
                        className="btn-trash-hover"
                        src={TrashImgHover}
                        alt="Trash"
                      />
                    </button>
                  </div>
                </div>
                <p className="regular size-075r color-grey-4">
                  {transation.valueType}
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
