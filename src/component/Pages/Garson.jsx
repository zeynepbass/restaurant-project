import React from "react";
import "./Garson.css"
const Garson = () => {
  return (
    <div className="GarsonPanel">
      <div id="algn">
        <div id="container">
          <p className="head">Giriş Garson</p>
          <form action="/" className="input-container">
            <input
              type="email"
              placeholder="adınız"
              className="inpt"
              required
            />
            <input
              type="password"
              placeholder="parola"
              className="inpt"
              required
            />
       
            <button value="submit" className="btn">
              Giriş
            </button>
          </form>
          <p className="footer">
            Bir sorun mu var? <a href="#">Bağla</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garson;
