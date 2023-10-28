import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Layout.css";

const Footer = () => {
  return (
    <div className="footer" style={{ background:"rgb(108,172,197)"}}>
      <h6 className="text-center">All Right Reserved &copy; Madhulika</h6>
      <h6 className="text-center">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </h6>
    </div>
  );
};

export default Footer;