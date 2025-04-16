import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"

function App() {
 

  return (
    <>
   
   <BrowserRouter>
  


   <Routes>
    
   <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/lista-post" element={<Posts />} />


   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App