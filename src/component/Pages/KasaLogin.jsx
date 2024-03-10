import React from "react";
import "./Kasa.css";
const PanelLogin = () => {
  return (
    <div className="panel">
      <div className="login-container">
        <div className="login-content">
          <div className="login-content_header">
            <span className="logo">
              <box-icon
                type="solid"
                name="landscape"
                color="#87A922"
              ></box-icon>{" "}
              Land Scape
            </span>
            <h2>Kasa Hoşgeldiniz</h2>
          </div>
          <div>
            <form className="login-form">
              <input type="email" placeholder="adınız" />
              <input type="email" placeholder="parola" />
              <input type="submit" />
            </form>
            <div className="login-netoworks">
              <p>
                {" "}
                Bir sorun mu var?{" "}
                <span style={{ cursor: "pointer" }}>Bağla</span>
              </p>
              <div className="login-or">
                <hr />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default PanelLogin;
