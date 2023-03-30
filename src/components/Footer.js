import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos";
import 'aos/dist/aos.css';

function Footer() {

  useEffect(() =>{
    Aos.init({duration: 1500})
  },[])


  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading" data-aos="zoom-in">
          Join the Adventure and let's discover new heights together!
        </p>
        
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper" data-aos="zoom-in">
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/"><i className="fa-solid fa-phone" ></i> : +36 70/347-8222</Link>
            <Link to="/"><i className="fa-solid fa-envelope"></i> : fenydani@gmail.com</Link>
          </div>
        </div>
        <div className="footer-link-wrapper" data-aos="zoom-in">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media" data-aos="zoom-in">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DNL <i className="fa-solid fa-tree"></i>
            </Link>
          </div>
          <small className="website-rights">
            DNL <i className="fa-regular fa-copyright"></i> 2023
          </small>
          <div className="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Instagramm"
              className="social-icon-link instagramm"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="TikTok"
              className="social-icon-link tiktok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="YouTube"
              className="social-icon-link youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
