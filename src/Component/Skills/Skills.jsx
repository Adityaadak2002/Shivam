import React from 'react'
import "./Skills.css"
import Fronthand from './Fronthand'
import Backend from './Backend'

function Skills() {
  return (
   <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
            <Fronthand />
            <Backend />
      </div>
   </section>
  )
}

export default Skills
