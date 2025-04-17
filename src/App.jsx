import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import DefaultLayout from "./layouts/defaultLayout"

function App() {


  return (
    <>

      <BrowserRouter>



        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/about" Component={About} />
            <Route path="/lista-post" Component={Posts} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App