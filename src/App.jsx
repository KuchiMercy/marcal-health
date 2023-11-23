import { Routes, Route } from "react-router-dom"
import Department from "./components/pages/Department"
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/pages/Contact"
import ExploreDoctors from "./components/pages/ExploreDoctors"


function App() {
 

  return (
    <>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/department" element={<Department />}/>
        <Route path="/doctors" element={<ExploreDoctors/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      
      
    </>
  )
}

export default App
