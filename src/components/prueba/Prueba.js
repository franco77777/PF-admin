import React, { useState } from "react"
import logo from "../imgs/logo.png"
import "./prueba.css"

const Prueba = () => {
  const [sumador, setSumador] = useState(0)

  const paginado = e => {
    if (e.target.value === "suma") {
      setSumador(sumador + 7)
    } else if (e.target.value === "resta") {
      setSumador(sumador - 7)
    }
  }
  return (
    <div className="error">
      <button value="suma" onClick={paginado}>
        sumar
      </button>
      <div>soy sumador:{sumador}</div>
      <button value="resta" onClick={paginado}>
        restar
      </button>
    </div>
  )
}

export default Prueba
