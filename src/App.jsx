import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import Navbar from "./components/navbar"

function App() {
 

  return (
    <>
   
   <BrowserRouter>
   

   <Routes>
    
    <Route path="/homepage" Component={Homepage} />
    <Route path="/about" Component={About} />
    <Route path="/lista-post" Component={Posts} />


   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
