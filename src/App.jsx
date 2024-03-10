import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./component/Home"
import Panel from "./component/Pages/Panel"
import Kasa from "./component/Pages/KasaLogin"
import Garson from "./component/Pages/Garson"
import {Routes,Route} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/kasa" element={    <Kasa/>}></Route>
    <Route path="/garson" element={    <Garson/>}></Route>
    <Route  path="/panel" element={  <Panel/>}></Route>

   </Routes>

  


    </>
  )
}

export default App
