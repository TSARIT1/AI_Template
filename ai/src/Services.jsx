import React from 'react'

function Services() {
    return (
        <div>
            <div className='container mb-5'>
                <h1 className='text-center mt-5 mb-5'> AI Services</h1>
                <div className='row'>

                    {/* Card 1 */}
                    <div className='col-4 '>
                        <div className="card" style={{ width: "18rem", marginLeft: "4rem" }}>
                            <i className="fa-solid fa-brain" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title"> Machine Learning</h5>
                                <p>Predictive models & automation to drive decisions.</p>
                                <button className='button'> More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='col-4'>
                        <div className="card" style={{ width: "18rem", marginLeft: "3rem" }}>
                            <i className="fa-solid fa-comments" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title">Natural Language Processing</h5>
                                <p>Chatbots, sentiment analysis, and language automation.</p>
                                <button className='button'> More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='col-4'>
                        <div className="card" style={{ width: "18rem", marginLeft: "2rem" }}>
                            <i className="fa-solid fa-chart-line feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title">Predictive Analytics</h5>
                                <p>Forecast trends and optimize operations.</p>
                                <button className='button'> More</button>
                            </div>
                        </div>
                    </div>




                    {/* Card 4 */}
                    <div className='col-4'>
                        <div className="card" style={{ width: "18rem", marginLeft: "4rem", marginTop: '3rem' }}>
                            <i className="fa-solid fa-robot" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title"> Process Automation</h5>
                                <p>Intelligent bots to automate repetitive tasks.</p>
                                <button className='button'> More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className='col-4'>
                        <div className="card" style={{ width: "18rem", marginLeft: "3rem", marginTop: '3rem', }}>
                            <i className="fa-solid fa-shield-halved" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title">AI Security</h5>
                                <p>Threat detection and automated response systems.</p>
                                <button className='button' > More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className='col-4'>
                        <div className="card" style={{ width: "18rem", marginLeft: "2rem", marginTop: '3rem' }}>
                            <i className="fa-solid fa-cloud" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
                            <div className="card-body">
                                <h5 className="card-title">Cloud AI Solutions</h5>
                                <p>Scalable AI deployments on cloud infrastructure.</p>
                                <button className='button'> More</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Services
