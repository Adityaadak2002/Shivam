import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/shivam_birla01/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a href="https://www.linkedin.com/in/shivam-birla-0b07a7241/" className="home__social-icon" target="_blank">
         <i className="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/Shivambirla8" className="home__social-icon" target="_blank">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
}

export default Social;
