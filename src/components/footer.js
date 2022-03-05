import React from "react";
import logo from "../assests/good.png";

function footer() {
  return (
    <div className="footerContainer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>
              <img className="footerLogo" src={logo} alt="building" />
            </span>
          </h3>
          <p class="footer-links">
            <a href="\" class="link-1">
              Home
            </a>

            <a href="\">Blog</a>

            <a href="\">Pricing</a>

            <a href="\">About</a>

            <a href="\">Faq</a>

            <a href="\">Contact</a>
          </p>

          <p class="footer-company-name">Hyde Park Restaurant Systems ©2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Beachwood, Ohio,</span> USA.
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>All rights reserved. Privacy policy</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="\">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="\">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="\">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="\">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
