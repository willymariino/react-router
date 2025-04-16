import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import Navbar from "./components/navbar"

function App() {
 

  return (
    <>
   
   <BrowserRouter>
   <Navbar/>


   <Routes>
    
    <Route path="/homepage" component={Homepage} />
    <Route path="/chi-siamo" Component={About} />
    <Route path="/lista-post" Component={Posts} />


   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
