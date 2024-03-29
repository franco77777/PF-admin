import React from "react"
import { useNavigate } from "react-router-dom"
import { auth, userExists } from "../../firebase/fire"
import { onAuthStateChanged } from "firebase/auth"

const authProvider = ({ children, onUserLoggedIn, onUserNotLoggedIn }) => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        const isRegistered = await userExists(user.uid)
        if (isRegistered) {
          onUserNotLoggedIn(user)
          //  navigate("/dashboard") <--- ponerlo en el array para el warning
        } else {
          onUserNotRegistered(user)
        }
      } else {
        onUserLoggedIn()
      }
    })
  }, [navigate])

  return <div>{children}</div>
}

export default authProvider
