import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getTask = createAsyncThunk("tasks/getTasks", async () => {
  const responde = await axios.get("https://pf-backend-2702.onrender.com/user")
  return responde.data
})

export const getFlights = createAsyncThunk("tasks/getFlights", async () => {
  const response = await axios("https://pf-backend-2702.onrender.com/flights")

  return response.data
})

export const getFlightsAvailables = createAsyncThunk(
  "tasks/getFlightsAvailables",
  async () => {
    const response = await axios(
      "https://pf-backend-2702.onrender.com/flightsAvailable"
    )
    const response2 = response.data
    const response3 = response2.sort(
      (a, b) => parseInt(a.date) - parseInt(b.date)
    )

    return response3
  }
)

export const getPackage = createAsyncThunk("tasks/getPackage", async () => {
  const response = await axios("https://pf-backend-2702.onrender.com/package")

  return response.data
})
