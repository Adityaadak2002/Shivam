import React from 'react'

function Fronthand() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class="uil uil-html5"></i>

                <div>
                    <h3 className="skills__name">Html:5</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class="uil uil-css3-simple"></i>

                <div>
                    <h3 className="skills__name">CSS3</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class="uil uil-java-script"></i>

                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-bootstrap'></i>

                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-tailwind-css' ></i>

                <div>
                    <h3 className="skills__name">Tailwindcss</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class="uil uil-react"></i>

                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fronthand
