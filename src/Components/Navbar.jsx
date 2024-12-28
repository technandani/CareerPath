import React, { useState } from "react";

const Navbar = () => {
  return (
    <header>
      <div className="navLeft">
        <a href="/">
          <h1 className="logo"> Career Path</h1>
        </a>
      </div>
      <div className="navRight">
        <div className="responsiveMenu">
          <img src="images/menu.png" alt="menu" height={"22px"} />
        </div>
        <div className="btns">
        <button className="btn logBtn">
            <a href="/login">
              Login In
            </a>
          </button>
          <button className="btn" id="genBtn">
            <a
              href="/create"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              Request Demo
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
