import React from 'react'

function Aboutpage() {
    return (

        <div className="container-fluid aboutpage mb-5">
            <div className='row'>
                <h1 className="about-title">About Tsarit Services</h1>
                <p className="about-subtitle">We help build responsible AI.</p>

                <div className="about-card">
                    <h2>Our Mission</h2>
                    <p>To make AI accessible, secure, and valuable for organizations of all sizes.</p>
                </div>

                <div className=" container about-page">
                    <div className=" row ">
                        <div className='col-md-6 about-box1'>
                            <h3 className='box-content'>150+</h3>
                            <p className=' box-para '>Projects</p>
                        </div>
                        <div className='col-md-6 about-box2'>
                            <h3 className='box-content'>20+</h3>
                            <p className=' box-para '>Experts</p>
                        </div>
                    </div>
                </div>

                <div className="about-contact">
                    <h2>Contact</h2>
                    <p>info@tsaritservices.com</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutpage
