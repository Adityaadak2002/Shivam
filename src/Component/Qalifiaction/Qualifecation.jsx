import React, { useState } from 'react'
 import "./Qualication.css";

function Qualifecation() {
  return (
    <section className="qualification section" id='protfolio'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journeny</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expriences
          </div>
        </div>

        {/* lower section */}
        {/* ----------------------education section--------------------- */}
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.tech in (IT)</h3>
                <span className="qualification__subtitle">
                Swami Vivekanand College of Engineering 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2020-2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web designing</h3>
                <span className="qualification__subtitle">
                  DebugShala Indore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2022-Present
                </div>
              </div>
            </div>

            {/* Again past skill */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                DebugShala Indore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2022-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX&UI Expert</h3>
                <span className="qualification__subtitle">
                DebugShala Indore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2022-Present
                </div>
              </div>
            </div>
          </div>

          {/* ---------------Experiance Sectio-------------- */}

        </div>
      </div>
    </section>
  );
}

export default Qualifecation;
