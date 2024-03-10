import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <div className="flexing">
  <div className="section section--yellow">
   <Link to="/kasa" style={{    color:"black"}}>  <h3 className="title" >Kasa</h3></Link>
  </div>
  <div className="section section--pink">
  <Link to="/garson" style={{    color:"black"}}> <h3 className="title">Garson</h3></Link>
  </div>
  <div className="section section--green">
  <Link to="/panel" style={{    color:"black"}}> <h3 className="title">Panel</h3></Link>
  </div>
</div>
    </div>
  )
}

export default Home