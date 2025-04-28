import SideNav from "./components/SideNav"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Reservations from "./pages/reservations"
import Schedules from "./pages/schedules"
import Students from "./pages/students"
import Teachers from "./pages/teachers"
import Finances from "./pages/finances"
import Reports from "./pages/reports"
import Messages from "./pages/messages"
import Permissions from "./pages/permissions"
import Layout from "./components/Layout"

function App() {

  return (
    <BrowserRouter>
    <div dir="rtl" lang="ar" className="flex">
      <SideNav/>
      <Navbar/>
      <div className="flex-1">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/schedules" element={<Schedules/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/finances" element={<Finances/>}/>
            <Route path="/reports" element={<Reports/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/permissions" element={<Permissions/>}/>
          </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
