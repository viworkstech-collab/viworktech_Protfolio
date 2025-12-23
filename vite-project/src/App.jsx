import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Feature from "./pages/Feature";
import Home from "./pages/Home.jsx";
import "./App.css";


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/AboutUs" element={<AboutUs />}/>
      <Route path="/ContactUs" element={<ContactUs />}/>
      <Route path="/Feature" element={<Feature />}/>
    </Routes>
    <Footer />
    
    </>
  )
}