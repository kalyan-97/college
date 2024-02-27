import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import {Routes,Route} from"react-router-dom";

const App = () => {
  return (
    <>
    <div>
     <TopNav/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
     </Routes>
    </div>
    </>
  )
}

export default App;