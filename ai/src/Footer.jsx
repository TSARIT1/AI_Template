import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light pt-5 pb-3" id='contact'>
                <div className="container">
                    <div className="row">


                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold Artificial">Artificial Intelligence</h5>
                            <p>
                                AI solutions provider helping businesses harness AI for growth and innovation.
                            </p>
                        </div>


                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold Artificial">Other Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                                <li><a href="https://www.tsaritservices.com/" className="text-light text-decoration-none">TSAR IT Services</a></li>
                                <li><a href="https://hms.tsaritservices.com/" className="text-light text-decoration-none"> HMS</a></li>
                                <li><a href="https://billing.tsaritservices.com/" className="text-light text-decoration-none"> Billing</a></li>
                            </ul>
                        </div>



                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold Artificial" id='contact'>Contact Us</h5>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows="3" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="contact-button w-100">Send Message</button>
                            </form>
                        </div>

                    </div>

                    <hr className="border-light " />
                    <div className="text-center">
                        <p className="mb-0"> @Artificial intelligence. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
