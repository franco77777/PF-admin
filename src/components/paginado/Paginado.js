import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFlights } from "../../features/orders"
import { paginadoFiltering } from "../../features/tasks"
import "./Paginado.css"

const Paginado = ({ filtered }) => {
  const paginadoState = useSelector(state => state.tasks.paginado)
  const [inputPaginado, setInputPaginado] = useState("")
  const [sumador, setSumador] = useState(7)

  const dispatch = useDispatch()

  let inicio = sumador - 7 //19-29

  let disablePrev = false
  if (inicio > 7) {
    disablePrev = true
  }
  let disableNext = true
  if (sumador >= filtered.length) {
    disableNext = false
  }

  const paginado = e => {
    if (e.target.value === "suma") {
      setSumador(sumador + 7)
    } else if (e.target.value === "resta") {
      setSumador(sumador - 7)
    }

    console.log("soy paginadoState", paginadoState)
  }

  let botones2 = Math.ceil(filtered.length / 7)
  let a = [0]
  for (let i = 0; i < botones2; i++) {
    a.push(i + 1)
  }

  let inputChange = e => {
    if (e.target.value < 1 || e.target.value > a.length) {
      return setInputPaginado("")
    }
    setInputPaginado(e.target.value)
    setSumador(e.target.value * 7 - 7)
  }

  return (
    <div className="paginado">
      <button
        className="botoncuatro"
        onClick={paginado}
        value="resta"
        disabled={!disablePrev}
      >
        <div className="icono1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <span>Prev</span>
      </button>
      <div className="padreinputpaginado">
        <input
          //onChange={inputChange}
          //value={inputPaginado}
          type="text"
          className="inputpaginado"
          //placeholder={Math.round(multiplicador / 7)}
        />
        &nbsp; of &nbsp;{botones2}
      </div>
      <button
        className="botoncinco"
        onClick={paginado}
        value="suma"
        disabled={!disableNext}
      >
        <div className="icono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
        <span>Next</span>
      </button>
    </div>
  )
}

export default Paginado
