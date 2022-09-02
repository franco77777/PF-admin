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
import { getFlights } from "../../features/orders"
import "./Flights.css"

const Flights = () => {
  const dispatch = useDispatch()
  const flights = useSelector(state => state.tasks.flights)
  useEffect(() => {
    dispatch(getFlights())
  }, [])
  console.log("soy flights", flights)

  return (
    <div className="Table2 flightsTable">
      <h2 className="centrar">Flights in Progress</h2>

      <TableContainer
        className="centrarcaja"
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Destination</TableCell>
              <TableCell>Airport</TableCell>
              <TableCell>Gate</TableCell>
              <TableCell>Departs</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>FlightID</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{e.destination}</TableCell>
                <TableCell>{e.airport}</TableCell>
                <TableCell>{e.gate}</TableCell>
                <TableCell>{e.departs}</TableCell>
                <TableCell>{e.status}</TableCell>
                <TableCell>{e.flightId}</TableCell>
                <TableCell>{e.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Flights
