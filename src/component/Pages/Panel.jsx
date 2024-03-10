import React from 'react'
import "./Panel.css"
const Panel = () => {
  return (
    <div className="panell">
        <div className="container">
  <div className="form" id="login">
    <h1 className="form__title">PANEL</h1>
    <div className="form__input-group">
      <input type="text" className="form__input" autofocus placeholder="Email" id="usernameinput"/>

    </div>
    <div className="form__input-group">
      <input type="password" className="form__input" autofocus placeholder="Parola" id="passwordInput"/>
      <div className="padding"></div>
      <a href="#"><button className="form__button" id="loginButton" >Giriş</button></a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Panel