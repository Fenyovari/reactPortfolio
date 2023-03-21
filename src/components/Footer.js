import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure and let's discover new heights together!
        </p>
        
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/"><i class="fa-solid fa-phone"></i> : +36 70/347-8222</Link>
            <Link to="/"><i class="fa-solid fa-envelope"></i> : fenydani@gmail.com</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" class="social-logo">
              DNL <i className="fa-solid fa-tree"></i>
            </Link>
          </div>
          <small className="website-rights">
            DNL <i class="fa-regular fa-copyright"></i> 2023
          </small>
          <div class="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Instagramm"
              className="social-icon-link instagramm"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="TikTok"
              className="social-icon-link tiktok"
            >
              <i class="fa-brands fa-tiktok"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="YouTube"
              className="social-icon-link youtube"
            >
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
