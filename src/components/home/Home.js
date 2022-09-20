import React, { useState } from "react"
import { GiEuropeanFlag } from "react-icons/gi"
import Admins from "../admins/Admins"
import Banned from "../banned/Banned"
import Customers from "../Customers/Customers"
import Flights from "../flights/Flights"
import Maindash from "../maindash/Maindash"
import Orders from "../Orders/Orders"
import Products from "../products/Products"
import RightSide from "../RigtSide/RightSide"
import Sidebar from "../Sidebar/Sidebar"
import salmon from "../imgs/salmon.jpg"
import "./home.css"
import Package from "../package/Package"
import PreView from "../preView/PreView"

const Home = () => {
  const [selected, setSelected] = useState(0)
  const [visual, setVisual] = useState({})
  const [effect2, setEffect2] = useState(null)
  const [effect3, setEffect3] = useState(null)
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar setSelected={setSelected} selected={selected} />

          {selected === 0 && (
            <Maindash setSelected={setSelected} selected={selected} />
          )}
          {selected === 1 && <Admins />}
          {selected === 2 && <Customers />}
          {selected === 3 && <Banned />}
          {selected === 4 && <Flights />}
          {selected === 5 && <Products />}
          {selected === 6 && <Orders />}
          {selected === 7 && (
            <Package
              setVisual={setVisual}
              visual={visual}
              setEffect2={setEffect2}
              setEffect3={setEffect3}
            />
          )}
          {selected === 7 ? (
            <PreView
              visual={visual}
              setVisual={setVisual}
              effect2={effect2}
              effect3={effect3}
            />
          ) : (
            <RightSide />
          )}
        </div>
      </div>
      <div className="header">
        <footer className="salmon">
          <div className="newbox">
            <div className="salmon1">
              <img src={salmon} alt="" id="salmon" />
              <span className="salvador">
                Jesus is the way, the truth, and the life
              </span>
            </div>

            <ul className="nuevodatos" id="ul">
              <span>Website Creator: </span>
              <li id="li" className="dos">
                <a id="a" href="https://www.facebook.com/franco.vedia.12">
                  <i class="fab fa-facebook-f icon"></i>
                </a>
              </li>
              <li id="li" className="tres">
                <span className="before1"></span>
                <a
                  id="a"
                  href="https://www.linkedin.com/in/franco-vedia-602877247/"
                >
                  <i class="fab fa-linkedin-in icon"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="antes" id="antes"></div>
          <div className="despues" id="despues"></div>
        </footer>
      </div>
    </>
  )
}

export default Home
