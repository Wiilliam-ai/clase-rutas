import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LayoutClient = () => {
  return (
    <>
        <Header/>
        <main className="container mx-auto my-2">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default LayoutClient