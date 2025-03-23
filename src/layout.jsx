import { Footer } from "./components/Footer"
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"
const layout = () => {
  return (
    <div className="layout">
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default layout