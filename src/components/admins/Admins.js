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

const Admins = () => {
  const customers = useSelector(state => state.tasks.users)
  const users = customers.filter(e => e.status === "admin")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  const degrade = async e => {
    const response = await axios.put(
      `https://pf-viajes-final.herokuapp.com/user/${e.target.value}`,
      { status: "user" }
    )

    console.log("soy respuesta de degrade admin", response.data)
  }

  const Delete = async e => {
    const response = await axios.delete(
      `https://pf-viajes-final.herokuapp.com/user/${e.target.value}`
    )
    dispatch(getTask())
    console.log("soy respuesta de delete user", response.data)
  }

  return (
    <div className="Table2">
      <h2>Administrators</h2>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {users.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.surname}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.phone}</TableCell>
                <TableCell>{e.DNI}</TableCell>
                <TableCell>{e.nationality}</TableCell>
                <TableCell>{e.sex}</TableCell>
                <TableCell>
                  <button value={e._id} onClick={degrade}>
                    -
                  </button>
                  <button value={e._id} onClick={Delete}>
                    x
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Admins
