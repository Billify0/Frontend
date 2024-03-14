import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import DashboardLayout from "./layouts/DashboardLayout"
import Order from "./pages/Order"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
