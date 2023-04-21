import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getTask = createAsyncThunk("tasks/getTasks", async () => {
  const responde = await axios.get(
    "https://pfbackend-production-b49a.up.railway.app/user"
  )
  return responde.data
})

export const getFlights = createAsyncThunk("tasks/getFlights", async () => {
  const response = await axios(
    "https://pfbackend-production-b49a.up.railway.app/flights"
  )

  return response.data
})

export const getFlightsAvailables = createAsyncThunk(
  "tasks/getFlightsAvailables",
  async () => {
    const response = await axios(
      "https://pfbackend-production-b49a.up.railway.app/flightsAvailable"
    )
    const response2 = response.data
    const response3 = response2.sort(
      (a, b) => parseInt(a.date) - parseInt(b.date)
    )

    return response3
  }
)

export const getPackage = createAsyncThunk("tasks/getPackage", async () => {
  const response = await axios(
    "https://pfbackend-production-b49a.up.railway.app/package"
  )

  return response.data
})
