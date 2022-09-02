import React, { useState } from "react"
import "./Orders.css"
import axios from "axios"

const Orders = () => {
  const [order, setOrder] = useState({ price: "", seating: "", firstclase: "" })
  const handleChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  const validation = e => {
    if (!/^([0-9])*$/.test(order.price)) {
      setOrder({ ...order, price: "" })
    }
    if (!/^([0-9])*$/.test(order.seating)) {
      setOrder({ ...order, seating: "" })
    }
    if (!/^([0-9])*$/.test(order.firstclase)) {
      setOrder({ ...order, firstclase: "" })
    }
  }

  let disableSubmit = false
  if (Object.keys(order).length !== 13) {
    disableSubmit = false
  } else {
    disableSubmit = true
  }

  const submit = async () => {
    const response = await axios.post(
      "https://pf-viajes-final.herokuapp.com/flightsAvailable",
      order
    )
    console.log("soy el post", response.data)
  }
  console.log(order)
  return (
    <div className="order">
      <h1>Create Product</h1>
      <form>
        <article>
          <div>Origin:</div>
          <input type="text" name="origin" onChange={handleChange} />
        </article>
        <article>
          <div>Destination:</div>
          <input type="text" name="destination" onChange={handleChange} />
        </article>
        <article>
          <div>Airport:</div>
          <input type="text" name="airport" onChange={handleChange} />
        </article>
        <article>
          <div>Departs:</div>
          <input type="text" name="departs" onChange={handleChange} />
        </article>
        <article>
          <div>Status:</div>
          <input type="text" name="status" onChange={handleChange} />
        </article>
        <article>
          <div>Gate:</div>
          <input type="text" name="gate" onChange={handleChange} />
        </article>
        <article>
          <div>Date:</div>
          <input type="text" name="date" onChange={handleChange} />
        </article>
        <article>
          <div>Price:</div>
          <input
            value={order.price}
            type="text"
            name="price"
            onChange={handleChange}
            onKeyUp={validation}
          />
        </article>
        <article>
          <div>Firstclase:</div>
          <input
            value={order.firstclase}
            type="text"
            name="firstclase"
            onChange={handleChange}
            onKeyUp={validation}
          />
        </article>
        <article>
          <div>Seating:</div>
          <input
            value={order.seating}
            type="text"
            name="seating"
            onChange={handleChange}
            onKeyUp={validation}
          />
        </article>
        <article>
          <div>Duration:</div>
          <input type="text" name="duration" onChange={handleChange} />
        </article>
        <article>
          <div>Image:</div>
          <input type="text" name="img" onChange={handleChange} />
        </article>
        <article>
          <div>FlightId:</div>
          <input type="text" name="flightId" onChange={handleChange} />
        </article>
      </form>
      <button
        onClick={submit}
        disabled={!disableSubmit}
        className="botonSubmit"
      >
        Charge
      </button>
    </div>
  )
}

export default Orders
