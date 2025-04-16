import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
   <BrowserRouter>

   <Routes>

    <Route path="/" component={homepage} />
    <Route path="/chi-siamo" Component={about} />
    <Route path="/lista-post" Component={posts} />


   </Routes>
   
   </BrowserRouter>
  )
}

export default App
