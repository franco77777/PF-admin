import "antd/dist/antd.css"
import { DatePicker, TimePicker } from "antd"
import { useEffect, useState } from "react"
import moment from "moment"
const { RangePicker } = DatePicker

function Prueba() {
  const [dates, setDates] = useState([])
  console.log(dates)
  const handlechange2 = e => {
    if (!e) {
      return
    }
    setDates(moment(e).format("DD-MM-YYYY"))
  }

  const format = "HH:mm"
  return (
    <div style={{ margin: 20 }}>
      {
        <RangePicker
          onChange={values => {
            setDates(
              values.map(item => {
                return moment(item).format("YYYY-DD-MM")
              })
            )
          }}
        />
      }
      <DatePicker onChange={handlechange2} />
      <TimePicker
        use12Hours
        format={format} // onChange?: ((value: moment.Moment | null, dateString: string) => void) | undefined
        onChange={(value, dateString) => {
          console.log("Time", value, "soyfate", dateString)
        }}
      />
    </div>
  )
}

export default Prueba
