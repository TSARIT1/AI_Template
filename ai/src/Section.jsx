import React from 'react'

function Section() {
    return (
        <div>
            <div className="container-fluid section-cont">
                <h2 className='section-heading'>Leading the AI Revolution</h2>
                <p className='section-para'>Tsarit Services is at the forefront of AI innovation, helping businesses transform operations with ethical, production-ready AI systems.
                    Our team of engineers and data scientists design solutions that are secure, scalable, and aligned with business goals.</p>
                <div className="row ">
                    <div className="col-md-4 section-box1">
                        <h1 className="fw-bold">150+</h1>
                        <p className="fw-bold"> Projects Completed</p>
                    </div>

                    <div className="col-md-4 section-box2">
                        <h1 className="fw-bold">98%</h1>
                        <p className="fw-bold">Client satisfaction</p>
                    </div>

                    <div className="col-md-4 section-box3">
                        <h1 className="fw-bold">5+</h1>
                        <p className="fw-bold">Years experiences</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section
