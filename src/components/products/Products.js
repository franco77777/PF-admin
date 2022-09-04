import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFlightsAvailables } from "../../features/orders"
import "./Products.css"

const Products = () => {
  const dispatch = useDispatch()
  const flights = useSelector(state => state.tasks.flightsAv)
  //const flights = flight.sort((a, b) => parseInt(a.date) - parseInt(b.date))
  useEffect(() => {
    dispatch(getFlightsAvailables())
  }, [])
  console.log("soy products", flights)

  return (
    <div className="Table2 flightsTable">
      <h2 className="centrar">Planned Trips</h2>

      <TableContainer style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Turist</TableCell>
              <TableCell>FirstClase</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>FlightID</TableCell>
              <TableCell>Gate</TableCell>
              <TableCell>Airport</TableCell>
              <TableCell>Seating</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Destination</TableCell>
                <TableCell>{e.destination}</TableCell>
                <TableCell>{e.origin}</TableCell>
                <TableCell>{e.price}</TableCell>
                <TableCell>{e.firstclase}</TableCell>
                <TableCell>{e.status}</TableCell>
                <TableCell>{e.flightId}</TableCell>
                <TableCell>{e.gate}</TableCell>
                <TableCell>{e.airport}</TableCell>
                <TableCell>{e.seating}</TableCell>
                <TableCell>{e.duration}</TableCell>
                <TableCell>{e.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Products
