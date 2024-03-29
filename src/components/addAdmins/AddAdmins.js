import { Button, Modal } from "antd"
import axios from "axios"
import React, { useState } from "react"
import { AiFillEye } from "react-icons/ai"
import { HiUserAdd } from "react-icons/hi"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { getTask } from "../../features/orders"
import "./AddAdmins.css"

const AddAdmins = () => {
  const [modal, setModal] = useState(false)
  const [place, setPlace] = useState({})
  const [ojo, setOjo] = useState("password")
  const dispatch = useDispatch()

  const abrirModal = e => {
    setModal(true)
    setPlace(e)
  }
  const cerrarModal = e => {
    setModal(false)
  }
  const accion = () => {
    cerrarModal()
  }

  const initialState = {
    status: "admin",
    email: "",
    phone: "",
    DNI: "",
  }

  const [order, setOrder] = useState(initialState)

  const validation = e => {
    if (!/^([0-9])*$/.test(order.DNI)) {
      setOrder({ ...order, DNI: "" })
    }
    if (!/^([0-9])*$/.test(order.phone)) {
      setOrder({ ...order, phone: "" })
    }
  }

  const handleChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  const submit = async () => {
    if (Object.keys(order).length !== 9) {
      return Swal.fire({
        icon: "error",
        title: "error",
        text: `fill all the fields`,
        confirmButtonText: "yes",
        confirmButtonColor: "#1890ff",
      })
    }
    if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        order.email
      )
    ) {
      return Swal.fire({
        icon: "error",
        title: "error",
        text: `invalid email data`,
        confirmButtonText: "yes",
        confirmButtonColor: "#1890ff",
      })
    }

    const response = await axios.post(
      "https://pf-backend-2702.onrender.com/user",
      order
    )
    dispatch(getTask())
    cerrarModal()
    Swal.fire({
      icon: "success",
      tittle: "Success",
      text: `new admin ${order.email} created`,
      timer: 1500,
      confirmButtonColor: "#2f9b05",
    })
    setOrder(initialState)
  }

  const ojoChange = () => {
    if (ojo === "password") setOjo("text")
    else setOjo("password")
  }
  return (
    <div>
      <Button type="primary" size="small" onClick={() => abrirModal()}>
        <HiUserAdd />
      </Button>
      <Modal
        centered
        title="Create Admin"
        open={modal}
        onCancel={cerrarModal}
        onOk={accion}
        footer={[
          <Button type="primary" onClick={cerrarModal}>
            Cancel
          </Button>,
          <Button type="primary" name="dsf" onClick={submit}>
            Send
          </Button>,
        ]}
      >
        <form className="form form2" key="form">
          <div class="relative">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              id="floating_outlined"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Name:
            </label>
          </div>
          <div class="relative">
            <input
              name="surname"
              onChange={handleChange}
              type="text"
              id="floating_outlined1"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined1"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Surname:
            </label>
          </div>
          <div class="relative">
            <input
              name="password"
              onChange={handleChange}
              type={ojo}
              id="floating_outlined2"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined2"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password:
            </label>
            <span className="ojoPadre2">
              <AiFillEye className="ojo2" onClick={ojoChange} />
            </span>
          </div>

          <div class="relative">
            <input
              name="sex"
              onChange={handleChange}
              type="text"
              id="floating_outlined4"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined4"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Sex:
            </label>
          </div>

          <div class="relative">
            <input
              name="nationality"
              onChange={handleChange}
              type="text"
              id="floating_outlined5"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined5"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Nationality:
            </label>
          </div>
          <div class="relative">
            <input
              value={order.DNI}
              onKeyUp={validation}
              type="text"
              name="DNI"
              onChange={handleChange}
              id="floating_outlined6"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined6"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              DNI:
            </label>
          </div>
          <div class="relative">
            <input
              value={order.phone}
              onKeyUp={validation}
              type="text"
              name="phone"
              onChange={handleChange}
              id="floating_outlined7"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined7"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              placeholder=" "
            >
              Phone:
            </label>
          </div>
          <div class="relative">
            <input
              value={order.email}
              onKeyUp={validation}
              type="text"
              name="email"
              onChange={handleChange}
              id="floating_outlined9"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined9"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              E-mail:
            </label>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddAdmins
