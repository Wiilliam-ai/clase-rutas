import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LayoutClient from "./layouts/LayoutClient"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutClient/>}> {/* Esta es una ruta padre  */}
            <Route index element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App