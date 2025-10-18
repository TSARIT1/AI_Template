import React from 'react'

function Contactpage() {
    return (
        <div className='container-fluid'>
            <div className="contact-page row ">
                <h2 className="contact-title">Contact Tsarit Services</h2>
                <p className="contact-subtitle">Let's build your AI future together.</p>

                <div className="contact-container">

                    <div className="contact-form">
                        <h3 className="form-title">Get in Touch</h3>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>


                    <div className="contact-info">
                        <p><strong>Email:</strong> info@tsaritservices.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <h4>Office</h4>
                        <p>123 AI Street, Tech City</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
