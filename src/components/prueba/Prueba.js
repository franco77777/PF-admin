import React, { useEffect, useState } from "react"
import "./prueba.css"

const Prueba = () => {
  let multiplicador = 0

  const paginado = e => {
    if (e.target.value === "+") {
      multiplicador = multiplicador + 7
    }
    if (e.target.value === "-") {
      multiplicador = multiplicador - 7
    }
    console.log(multiplicador)
  }
  return (
    <div className="esa">
      <button value="+" onClick={paginado}>
        suma
      </button>

      <div>soy multiplicador:{multiplicador}</div>

      <button value="-" onClick={paginado}>
        resta
      </button>
    </div>
  )
}

export default Prueba
