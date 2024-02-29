import React from 'react'
import './Foter.css'

function Foter() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aditya Adak</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="http://surl.li/rawtt" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a
        href="https://www.instagram.com/adityaadak_/"
        className="footer__social-link"
        target="_blank"
      >
        <i className="bx bxl-instagram"></i>
      </a>

      <a href="https://www.linkedin.com/in/adity-adak-108a83277/" className="footer__social-link" target="_blank">
         <i className="bx bxl-linkedin"></i>
      </a>

      <a href="https://github.com/Adityaadak2002" className="footer__social-link" target="_blank">
        <i className="bx bxl-github"></i>
      </a>
        </div>

        <span className='footer__copy'>&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Foter
