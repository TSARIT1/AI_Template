import React from 'react'

function Servicepage() {
    return (
        <div>
            <div className="services-container">
                <section className="services-intro">
                    <h1>Our AI Services</h1>
                    <p>End-to-end AI solutions from research to production.</p>
                </section>

                <section className="services-list">
                    <div className="service-card">
                        <h3>Machine Learning Development</h3>
                        <p>Data-driven models for forecasting & classification.</p>
                    </div>

                    <div className="service-card">
                        <h3>Generative AI</h3>
                        <p>Content generation, summarization, and creative tools.</p>
                    </div>

                    <div className="service-card">
                        <h3>Data Engineering</h3>
                        <p>Pipelines and ETL to make your data production-ready.</p>
                    </div>

                    <div className="service-card">
                        <h3>AI Strategy & Consulting</h3>
                        <p>Roadmaps and audits to align AI with business goals.</p>
                    </div>
                </section>

                <section className="contact-section">
                    <h3>Contact</h3>
                    <p>info@tsaritservices.com</p>
                </section>
            </div>
        </div>
    )
}

export default Servicepage
