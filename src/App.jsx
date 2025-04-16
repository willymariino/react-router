import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import DefaultLayout from "./layouts/default-layout"

function App() {
 

  return (
    <>
   
   <BrowserRouter>
   

   <Routes>
    
    <Route element={<DefaultLayout />} >
    <Route path="/" element={<Homepage />} >
    <Route path="/about" element={<About/>} />
    <Route path="/lista-post" element={<Posts/>} />
    </Route>


   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
