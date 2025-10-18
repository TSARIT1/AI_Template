import React from 'react'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">

                    <a className="navbar-brand text-dark fw-bold" href="#"><i className="fa-solid fa-robot"></i>Tsarit Service</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">


                        <div className="navbar-nav mx-auto">
                            <a className="nav-link text-dark" href="/">Home</a>
                            <a className="nav-link text-dark" href="/aboutpage">About</a>
                            <a className="nav-link text-dark" href="/servicepage">Service</a>
                            <a className="nav-link text-dark" href="/contactpage">Contact</a>
                        </div>


                        <div className="d-flex gap-2">
                            <button className="header-button "> <a className='registration' href="/registration">Get started</a></button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
