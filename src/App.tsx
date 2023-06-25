import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Faq from "./pages/faq"
import Home from "./pages/home"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
