import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="container  footer-container mt-5" >
        <div className="row">
        <div className="col-4">
            <h1>FOODIED</h1>
            <li className="mt-2">Phone: 0969907215</li>
            <li>Email: konghengseang878@gmail.com</li>

        </div>
        <div className="col-4">
            <p>Information</p>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
        </div>
        <div className="col-4">
            <p>Newsletter</p>
            <input className="form-control" placeholder="Email" type="text" />
            <button className="btn btn-primary mt-2">Subcription</button>
        </div>
        </div>
      </div>
      <div className="container footer-bottom bg-dark">
          <p className="text-center copyright">Copyright By Seangkongheng 2024</p>
      </div>
    </div>
  );
};

export default Footer;
