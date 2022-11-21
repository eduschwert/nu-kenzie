import React from "react"

import Header from "../../components/Header"
import HomeForm from "../../components/HomeForm"
import TotalMoney from "../../components/TotalMoney"
import EmptyList from "../../components/EmptyList"
import Card from "../../components/Card"
import CardFilter from "../../components/CardFilter"

import "./style.css"

const Home = ({ setPage, valuesList, setValuesList, filter, setFilter }) => {
  const valuesListFiltered = valuesList.filter((transation) =>
    filter === "Todos" ? true : transation.valueType === filter
  )

  let divTotalMoney, divCard
  if (valuesListFiltered.length) {
    divTotalMoney = <TotalMoney valuesListFiltered={valuesListFiltered} />

    divCard = (
      <Card
        valuesList={valuesList}
        setValuesList={setValuesList}
        valuesListFiltered={valuesListFiltered}
      />
    )
  } else if (valuesList.length !== 0) {
    divCard = (
      <EmptyList
        text={
          filter === "Entrada"
            ? `Você não possui nenhuma entrada`
            : "Você não possui nenhuma despesa"
        }
      />
    )
  } else {
    divTotalMoney = <div></div>
    divCard = <EmptyList />
  }
  return (
    <>
      <Header setPage={setPage} />
      <div className="container">
        <main className="home-main">
          <div className="flex flex-col gap-1r desk-home-form">
            <HomeForm
              valuesList={valuesList}
              setValuesList={setValuesList}
              valuesListFiltered={valuesListFiltered}
            />
            {divTotalMoney}
          </div>
          <div className="flex flex-col align-center gap-15r desk-home-card">
            <CardFilter filter={filter} setFilter={setFilter} />
            {divCard}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
