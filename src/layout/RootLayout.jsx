import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout