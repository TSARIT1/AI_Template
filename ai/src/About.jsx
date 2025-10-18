import React from 'react'
import AI from "../src/assets/AI.webp"
function About() {
    return (
        <div>
            <div className='container-fluid about-cont'>
                <div className='row'>

                    <div className='col-md-6'>
                        <h1 className='mt-5'> Transform Your Business with AI-Powered Solutions</h1>
                        <p> Leverage cutting-edge artificial intelligence to optimize operations, enhance customer experiences, and drive innovation across your organization.</p>
                        <div className="btn-container">
                            <button className="aboutbutton"> Explore</button>
                            <button className="aboutbutton "> Book a Demo </button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={AI} className='about-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
