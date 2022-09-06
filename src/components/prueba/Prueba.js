import { AudioOutlined } from "@ant-design/icons"
import {
  DatePicker,
  Modal,
  Button,
  Input,
  Form,
  TimePicker,
  Select,
  Space,
} from "antd"
import "./prueba.css"
import "antd/dist/antd.css"
import { useEffect, useState } from "react"
import moment from "moment"
import Item from "antd/lib/list/Item"
import axios from "axios"
import { getFlights } from "../../features/orders"
import { useDispatch, useSelector } from "react-redux"
const { RangePicker } = DatePicker
const { Search } = Input

const { Option } = Select

function Prueba() {
  const flights = useSelector(state => state.tasks.flights)
  const dispatch = useDispatch()
  const [defaultValue, setDefaultValue] = useState(null)
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState(null)
  const [filtered, setFiltered] = useState(null)

  useEffect(() => {
    dispatch(getFlights())
  }, [])
  console.log(" soy filter", filter)

  const layout = {
    labelCol: {
      span: 5,
    },

    wrapperCol: {
      span: 16,
    },
  }
  const [order, setOrder] = useState({ price: "", seating: "", firstclase: "" })

  const handleChange2 = e => {
    if (!e) {
      return
    }
    const response = moment(e).format("DD-MM-YYYY")
    setOrder({ ...order, date: response })
  }
  const handleChange3 = (a, b) => {
    setOrder({ ...order, departs: b })
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
    if (!/^([0-9])*$/.test(order.duration)) {
      setOrder({ ...order, duration: "" })
    }
  }
  const handleChange = e => {
    setDefaultValue(null)
    const response = flights.map(d => d[e])
    const dataArr = new Set(response)
    let result = [...dataArr]
    setFilter(result)
    setTimeout(() => {
      setDefaultValue(e)
    }, 300)
  }
  const filterChange = e => {
    const responde = flights.filter(d => d[defaultValue] === e)
    console.log("soy filtered", responde)
    setFiltered(responde)
    cerrarModal2()
  }
  const putFlight = () => {
    console.log("hola")
  }

  const abrirModal2 = e => {
    console.log("soy abrir", e)
    setDefaultValue(null)
    setFilter("filter by")
    setModal(true)
  }
  const cerrarModal2 = e => {
    setModal(false)
    console.log(e)
  }
  const accion = () => {
    cerrarModal2()
  }

  const a = flights.length && Object.keys(flights[0])

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  )

  const onSearch = e => console.log(e.target.value)

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onChange={onSearch}
          enterButton
          style={{ width: 200 }}
        />
      </Space>
    </div>
  )
}

export default Prueba
