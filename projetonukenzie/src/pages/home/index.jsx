import React from "react"

import { useState } from "react"

import Header from "../../components/Header"
import HomeForm from "../../components/HomeForm"
import TotalMoney from "../../components/TotalMoney"
import EmptyList from "../../components/EmptyList"
import Card from "../../components/Card"
import CardFilter from "../../components/CardFilter"

import "./style.css"

const Home = ({ setPage }) => {
  const [valuesList, setValuesList] = useState([])
  const [listFilter, setListFilter] = useState([])
  const [filter, setFilter] = useState("Todos")

  let divTotalMoney, divCard
  if (valuesList.length !== 0) {
    divTotalMoney = <TotalMoney listFilter={listFilter} />

    divCard = (
      <Card
        valuesList={valuesList}
        setValuesList={setValuesList}
        listFilter={listFilter}
        setListFilter={setListFilter}
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
              filter={filter}
              setListFilter={setListFilter}
            />
            {divTotalMoney}
          </div>
          <div className="flex flex-col  gap-15r desk-home-card">
            <CardFilter
              valuesList={valuesList}
              setListFilter={setListFilter}
              filter={filter}
              setFilter={setFilter}
            />
            {divCard}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
