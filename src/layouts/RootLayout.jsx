import { Outlet } from "react-router-dom"
import NavBar from "../ui/NavBar"

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout