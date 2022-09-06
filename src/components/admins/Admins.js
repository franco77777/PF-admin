import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TableContainer from "@mui/material/TableContainer"

import "./Admins.css"
import { getTask } from "../../features/orders"
import axios from "axios"
import { BsFillArrowDownSquareFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { GiJumpAcross } from "react-icons/gi"
import { adminFiltering } from "../../features/tasks"
import Filters from "../filters/Filters"

const Admins = () => {
  const customers = useSelector(state => state.tasks.users)
  const adminFiltered = useSelector(state => state.tasks.adminFiltered)
  const users = customers.filter(e => e.status === "admin")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  const degrade = async e => {
    const response = await axios.put(
      `https://pf-seraerror.herokuapp.com/user/${e}`,
      { status: "user" }
    )
    dispatch(adminFiltering(null))
    dispatch(getTask())
    console.log("soy respuesta de degrade admin", response.data)
  }

  const Delete = async e => {
    const response = await axios.delete(
      `https://pf-seraerror.herokuapp.com/user/${e}`
    )
    dispatch(adminFiltering(null))
    dispatch(getTask())
    console.log("soy respuesta de delete user", response.data)
  }

  const ban = async e => {
    const response = await axios.put(
      `https://pf-seraerror.herokuapp.com/user/${e}`,
      { status: "banned" }
    )
    dispatch(adminFiltering(null))
    dispatch(getTask())
    console.log("soy respuesta de ban user", response.data)
  }
  let isNull = users
  adminFiltered ? (isNull = adminFiltered) : (isNull = users)

  return (
    <div className="Table2">
      <h2 className="centrar title">Administrators</h2>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Filters flightsComponent={users} dispatched={adminFiltering} />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Sex</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {isNull.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <div className="botonIcons">
                    <BsFillArrowDownSquareFill onClick={() => degrade(e._id)} />
                    <GiJumpAcross onClick={() => ban(e._id)} />
                    <MdDelete onClick={() => Delete(e._id)} />
                  </div>
                </TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.surname}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.phone}</TableCell>
                <TableCell>{e.DNI}</TableCell>
                <TableCell>{e.nationality}</TableCell>
                <TableCell>{e.sex}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Admins
