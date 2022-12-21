import React from "react"

const Prueba = () => {
  const endpoint = value => {
    value = value || "https://www.cotalker.com/api/messages/ping"
    fetch(value)
      .then(res => res.json())
      .then(res => new Date(res.time).toISOString())
      .then(res => console.log("soy res", res))
  }

  endpoint()
  return <div>hpola</div>
}

export default Prueba
