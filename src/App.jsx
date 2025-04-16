import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import Navbar from "./components/navbar"

function App() {
 

  return (
    <>
    <Navbar/>

   <BrowserRouter>

   <Routes>
    
    <Route path="/homepage" component={homepage} />
    <Route path="/chi-siamo" Component={about} />
    <Route path="/lista-post" Component={posts} />


   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
