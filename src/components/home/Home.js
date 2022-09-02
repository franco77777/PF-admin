import React, { useState } from "react"
import { GiEuropeanFlag } from "react-icons/gi"
import Admins from "../admins/Admins"
import Customers from "../Customers/Customers"
import Flights from "../flights/Flights"
import Maindash from "../maindash/Maindash"
import Orders from "../Orders/Orders"
import Products from "../products/Products"
import RightSide from "../RigtSide/RightSide"
import Sidebar from "../Sidebar/Sidebar"
import "./home.css"

const Home = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar setSelected={setSelected} selected={selected} />

        {selected === 0 && (
          <Maindash setSelected={setSelected} selected={selected} />
        )}
        {selected === 1 && <Orders />}
        {selected === 2 && <Customers />}
        {selected === 3 && <Flights />}
        {selected === 4 && <Admins />}
        {selected === 5 && <Products />}

        <RightSide />
      </div>
    </div>
  )
}

export default Home
